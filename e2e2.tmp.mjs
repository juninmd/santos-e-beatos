import { chromium } from 'playwright'
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })
const p = await b.newPage()
const falhas = []
p.on('response', (r) => { if (r.status() >= 400 && !r.url().includes('tile.openstreetmap')) falhas.push(r.status() + ' ' + r.url()) })
p.on('requestfailed', (r) => { if (!r.url().includes('tile.openstreetmap')) falhas.push('FAIL ' + r.url()) })
for (const rota of ['/', '/santos/', '/beatos/', '/santos/santa-elena-guerra/', '/beatos/beata-antonieta-meo/']) {
  await p.goto('http://localhost:4173' + rota, { waitUntil: 'networkidle' })
  await p.waitForTimeout(800)
}
console.log('falhas nao-tile:', falhas.length)
falhas.forEach((f) => console.log(' -', f))
// santo do dia
await p.goto('http://localhost:4173/', { waitUntil: 'networkidle' })
await p.waitForTimeout(1200)
const sod = await p.$eval('.saint-of-day', (el) => el.innerText.replace(/\n+/g, ' | ')).catch(() => 'ausente')
const img = await p.$eval('.saint-of-day img', (el) => ({ src: el.currentSrc, ok: el.complete && el.naturalWidth > 0 })).catch(() => null)
console.log('santo do dia:', sod)
console.log('imagem:', JSON.stringify(img))
await b.close()
