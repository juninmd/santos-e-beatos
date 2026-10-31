"""Processador 4K e colorizacao de alta qualidade para beatos."""
import os, re, sys, pathlib, cv2, torch, numpy as np
from PIL import Image

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent.parent))
from scripts.colorizers import eccv16, siggraph17, util

TARGET_EDGE = 3840

def load_models():
    torch.set_num_threads(os.cpu_count() or 8)
    eccv = eccv16(pretrained=True).eval()
    sigg = siggraph17(pretrained=True).eval()
    return eccv, sigg

def is_monochrome_robust(pil_img):
    arr = np.array(pil_img.convert("RGB"))
    diff = np.mean(np.abs(arr[:, :, 0].astype(float) - arr[:, :, 1].astype(float)) + 
                   np.abs(arr[:, :, 1].astype(float) - arr[:, :, 2].astype(float)))
    if diff < 12.0:
        return True
    hsv = cv2.cvtColor(arr, cv2.COLOR_RGB2HSV)
    s, v = hsv[:, :, 1], hsv[:, :, 2]
    mask = (s > 20) & (v > 30) & (v < 235)
    if np.sum(mask) < 2000:
        return True
    h_std = np.std(hsv[:, :, 0][mask])
    return bool(h_std < 11.5)

def colorize_img(eccv, sigg, pil_img):
    np_img = np.array(pil_img.convert("RGB"))
    tens_orig_l, tens_rs_l = util.preprocess_img(np_img, HW=(256, 256))
    with torch.no_grad():
        out_eccv = eccv(tens_rs_l).cpu()
        out_sigg = sigg(tens_rs_l).cpu()
    ab_eccv = util.postprocess_tens(tens_orig_l, out_eccv)
    ab_sigg = util.postprocess_tens(tens_orig_l, out_sigg)
    ensemble = np.clip(0.6 * ab_eccv.astype(np.float32) + 0.4 * ab_sigg.astype(np.float32), 0, 255).astype(np.uint8)
    return Image.fromarray(ensemble)

def enhance_and_4k(pil_img):
    rgb = np.array(pil_img.convert("RGB"))
    clean = cv2.bilateralFilter(rgb, d=5, sigmaColor=25, sigmaSpace=25)
    lab = cv2.cvtColor(clean, cv2.COLOR_RGB2LAB)
    clahe = cv2.createCLAHE(clipLimit=1.6, tileGridSize=(8, 8))
    lab[:, :, 0] = clahe.apply(lab[:, :, 0])
    lab[:, :, 1] = np.clip(lab[:, :, 1].astype(np.float32) * 1.05, 0, 255).astype(np.uint8)
    lab[:, :, 2] = np.clip(lab[:, :, 2].astype(np.float32) * 1.05, 0, 255).astype(np.uint8)
    enhanced = cv2.cvtColor(lab, cv2.COLOR_LAB2RGB)
    h, w = enhanced.shape[:2]
    ratio = TARGET_EDGE / max(h, w)
    nw, nh = int(round(w * ratio)), int(round(h * ratio))
    up = cv2.resize(enhanced, (nw, nh), interpolation=cv2.INTER_LANCZOS4)
    blur = cv2.GaussianBlur(up, (0, 0), sigmaX=1.5)
    sharp = cv2.addWeighted(up, 1.4, blur, -0.4, 0)
    return Image.fromarray(np.clip(sharp, 0, 255).astype(np.uint8))

def update_index_md(index_path, title, out_name, mono):
    text = index_path.read_text(encoding="utf-8")
    text = re.sub(r"!\[([^\]]*)\]\([^)]+\)", f"![\\1](imagens/{out_name})", text, count=1)
    label = "Restaurada/Colorizada em 4K" if mono else "Restaurada em 4K"
    galeria = (
        f"## Galeria de Imagens e Restaurações\n\n"
        f"| Original | {label} |\n"
        f"| :---: | :---: |\n"
        f"| ![{title} Original](imagens/original.jpg) | ![{title} Restaurada](imagens/{out_name}) |\n\n"
    )
    if "## Galeria de Imagens e Restaurações" in text:
        text = re.sub(
            r"## Galeria de Imagens e Restaurações[\s\S]*?(?=\n## |\Z)",
            galeria.rstrip(),
            text
        )
    elif "## Galeria de Imagens\n" in text:
        text = text.replace("## Galeria de Imagens\n", galeria + "### Outras Imagens\n")
    elif "## Cidades por onde passou" in text:
        text = text.replace("## Cidades por onde passou", galeria + "## Cidades por onde passou")
    else:
        text = text.rstrip() + "\n\n" + galeria
    index_path.write_text(text, encoding="utf-8")

def process_beato(beato_dir, eccv, sigg):
    slug = beato_dir.name
    if slug == "padre-donizetti":
        return
    idx = beato_dir / "index.md"
    orig = beato_dir / "imagens" / "original.jpg"
    if not idx.exists() or not orig.exists():
        return
    m = re.search(r"^#\s+(.+)$", idx.read_text(encoding="utf-8"), re.M)
    title = m.group(1).strip() if m else slug
    with Image.open(orig) as im:
        im_rgb = im.convert("RGB")
    mono = is_monochrome_robust(im_rgb)
    out_name = "restaurada_colorida_4k.jpg" if mono else "restaurada_4k.jpg"
    out_path = beato_dir / "imagens" / out_name
    # Cleanup old opposite file if exists to avoid obsolete links
    other_name = "restaurada_4k.jpg" if mono else "restaurada_colorida_4k.jpg"
    other_path = beato_dir / "imagens" / other_name
    if other_path.exists():
        other_path.unlink()
    colorized = colorize_img(eccv, sigg, im_rgb) if mono else im_rgb
    final_4k = enhance_and_4k(colorized)
    final_4k.save(out_path, "JPEG", quality=92, optimize=True)
    update_index_md(idx, title, out_name, mono)
    print(f"[{'B&W/SEPIA->COLOR' if mono else 'COLOR'}] {slug}: {final_4k.size} -> {out_name}")

if __name__ == "__main__":
    eccv, sigg = load_models()
    base = pathlib.Path("docs/beatos")
    targets = sys.argv[1:] if len(sys.argv) > 1 else sorted([d.name for d in base.iterdir() if d.is_dir()])
    for name in targets:
        process_beato(base / name, eccv, sigg)
