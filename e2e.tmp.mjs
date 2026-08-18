import { chromium } from 'playwright'
const base = 'http://localhost:4173'
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })
const p = await b.newPage({ viewport: { width: 1280, height: 900 } })
const erros = []
p.on('console', (m) => { if (m.type() === 'error') erros.push(m.text()) })
p.on('pageerror', (e) => erros.push('PAGEERROR: ' + e.message))

const paginas = ['/', '/santos/carlo-acutis/', '/santos/sao-pedro/', '/beatos/beato-joao-paulo-i/', '/santos/santa-helena/']
for (const rota of paginas) {
  await p.goto(base + rota, { waitUntil: 'networkidle' })
  await p.waitForTimeout(1200)
  const imgs = await p.$$eval('img', (list) => list.map((i) => ({ src: i.currentSrc || i.src, ok: i.complete && i.naturalWidth > 0 })))
  const quebradas = imgs.filter((i) => !i.ok).map((i) => i.src.slice(0, 90))
  const marcadores = await p.$$eval('.miracle-map-pin', (l) => l.length)
  const legenda = await p.$$eval('.miracle-map-legend li', (l) => l.map((x) => x.textContent.trim()))
  console.log(`${rota} | imgs=${imgs.length} quebradas=${quebradas.length} | marcadores=${marcadores} | legenda=[${legenda.join(', ')}]`)
  if (quebradas.length) console.log('   quebradas:', quebradas.join(' ; '))
}
await p.goto(base + '/santos/carlo-acutis/', { waitUntil: 'networkidle' })
await p.waitForTimeout(1500)
await p.screenshot({ path: '/tmp/claude-0/-home-user-santos-e-beatos/d9e268a0-3671-53cd-a654-ce62d726e43c/scratchpad/pagina.png', fullPage: false })
await p.goto(base + '/', { waitUntil: 'networkidle' })
await p.waitForTimeout(1200)
await p.screenshot({ path: '/tmp/claude-0/-home-user-santos-e-beatos/d9e268a0-3671-53cd-a654-ce62d726e43c/scratchpad/home.png' })
console.log('\nerros de console:', erros.length)
erros.slice(0, 10).forEach((e) => console.log(' -', e))
await b.close()
