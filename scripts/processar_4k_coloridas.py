"""Script de restauracao, colorizacao DDColor e upscale 4K para todas as imagens."""
import os, re, shutil, sys, pathlib
import cv2, numpy as np, onnxruntime as ort
from huggingface_hub import hf_hub_download
from PIL import Image, ImageEnhance

ort.set_default_logger_severity(3)
TARGET_EDGE = 3840

def get_session():
    p = hf_hub_download(repo_id="edgetools/ddcolor", filename="ddcolor-tiny-fp16.onnx")
    opts = ort.SessionOptions()
    opts.log_severity_level = 3
    return ort.InferenceSession(p, sess_options=opts, providers=["CPUExecutionProvider"])

def is_monochrome(pil_img):
    arr = np.array(pil_img.convert("RGB"), dtype=np.float32)
    diff = np.mean(np.abs(arr[:, :, 0] - arr[:, :, 1]) + np.abs(arr[:, :, 1] - arr[:, :, 2]))
    return bool(diff < 12.0)

def colorize(session, pil_img):
    rgb = np.array(pil_img.convert("RGB"), dtype=np.float32) / 255.0
    h, w = rgb.shape[:2]
    lab = cv2.cvtColor(rgb, cv2.COLOR_RGB2Lab)
    l_orig = lab[:, :, 0]
    l_in = cv2.resize(l_orig, (512, 512), interpolation=cv2.INTER_AREA)
    inp = np.stack([l_in] * 3, axis=0)[np.newaxis, ...].astype(np.float32)
    out = session.run(None, {session.get_inputs()[0].name: inp})[0][0]
    ab = cv2.resize(np.transpose(out, (1, 2, 0)), (w, h), interpolation=cv2.INTER_CUBIC)
    lab_out = np.dstack([l_orig, ab])
    rgb_out = np.clip(cv2.cvtColor(lab_out, cv2.COLOR_Lab2RGB) * 255.0, 0, 255).astype(np.uint8)
    return Image.fromarray(rgb_out)

def upscale_4k(pil_img):
    w, h = pil_img.size
    max_side = max(w, h)
    if max_side != TARGET_EDGE:
        ratio = TARGET_EDGE / max_side
        new_w, new_h = int(round(w * ratio)), int(round(h * ratio))
        pil_img = pil_img.resize((new_w, new_h), Image.Resampling.LANCZOS)
    return ImageEnhance.Sharpness(pil_img).enhance(1.12)

def update_index(index_path, title, img_filename, is_mono):
    text = index_path.read_text(encoding="utf-8")
    text = re.sub(r"!\[([^\]]*)\]\([^)]+\)", f"![\\1](imagens/{img_filename})", text, count=1)
    if "## Galeria de Imagens e Restaurações" in text:
        index_path.write_text(text, encoding="utf-8")
        return
    label = "Restaurada/Colorizada" if is_mono else "Restaurada em 4K"
    galeria = (
        f"\n## Galeria de Imagens e Restaurações\n\n"
        f"| Original | {label} |\n"
        f"| :---: | :---: |\n"
        f"| ![{title} Original](imagens/original.jpg) | ![{title} Restaurada](imagens/{img_filename}) |\n\n"
    )
    if "## Galeria de Imagens\n" in text:
        text = text.replace("## Galeria de Imagens\n", galeria + "### Outras Imagens\n")
    elif "## Cidades por onde passou" in text:
        text = text.replace("## Cidades por onde passou", galeria + "## Cidades por onde passou")
    else:
        text = text.rstrip() + "\n" + galeria
    index_path.write_text(text, encoding="utf-8")

def process_person(dir_path, session):
    idx_path = dir_path / "index.md"
    if not idx_path.exists() or dir_path.name == "padre-donizetti":
        return
    text = idx_path.read_text(encoding="utf-8")
    m = re.search(r"!\[([^\]]*)\]\(([^)]+)\)", text)
    if not m:
        return
    title, rel_img = m.group(1) or dir_path.name, m.group(2).replace("./", "")
    src_img_path = dir_path / rel_img
    if not src_img_path.exists():
        cand = dir_path / "imagens" / pathlib.Path(rel_img).name
        if cand.exists():
            src_img_path = cand
        else:
            return
    imgs_dir = dir_path / "imagens"
    imgs_dir.mkdir(exist_ok=True)
    orig_copy = imgs_dir / "original.jpg"
    if not orig_copy.exists():
        if src_img_path.suffix.lower() in [".jpg", ".jpeg"]:
            shutil.copy2(src_img_path, orig_copy)
        else:
            with Image.open(src_img_path) as im:
                im.convert("RGB").save(orig_copy, "JPEG", quality=95)
    
    with Image.open(orig_copy) as im:
        im_rgb = im.convert("RGB")
    
    mono = is_monochrome(im_rgb)
    out_name = "restaurada_colorida_4k.jpg" if mono else "restaurada_4k.jpg"
    out_path = imgs_dir / out_name
    
    # Se ja existe com tamanho >= 100KB, pode pular reprocessamento de imagem
    if not out_path.exists() or out_path.stat().st_size < 10000:
        processed = colorize(session, im_rgb) if mono else im_rgb
        final_4k = upscale_4k(processed)
        final_4k.save(out_path, "JPEG", quality=84, optimize=True, progressive=True)
    
    update_index(idx_path, title, out_name, mono)
    return mono

def main():
    target = sys.argv[1] if len(sys.argv) > 1 else "beatos"
    session = get_session()
    if target == "beatos":
        all_dirs = sorted(list(pathlib.Path("docs/beatos").iterdir()))
    elif target == "santos":
        all_dirs = sorted(list(pathlib.Path("docs/santos").iterdir()))
    else:
        all_dirs = sorted(list(pathlib.Path("docs/santos").iterdir()) + list(pathlib.Path("docs/beatos").iterdir()))
    all_dirs = [d for d in all_dirs if d.is_dir() and (d / "index.md").exists()]
    total = len(all_dirs)
    print(f"Iniciando processamento de {total} biografias ({target})...")
    mono_cnt, color_cnt = 0, 0
    for idx, d in enumerate(all_dirs, start=1):
        res = process_person(d, session)
        if res is True:
            mono_cnt += 1
        elif res is False:
            color_cnt += 1
        if idx % 10 == 0 or idx == total:
            print(f"Progresso: {idx}/{total} ({mono_cnt} B&W colorizadas, {color_cnt} coloridas 4K)")
    print(f"Concluido com sucesso para {target}!")

if __name__ == "__main__":
    main()
