import puppeteer from 'puppeteer'

// Streamlit Community Cloud duerme las apps tras ~12 h sin visitas. Abrir la app
// en un navegador real (con su WebSocket) cuenta como visita; si está dormida,
// se pulsa el botón de despertar. Falla (exit 1) si una app no llega a cargar.
const APPS = [
  ['DinoRAG', 'https://mattbuiles-dinorag-autonomous-multi-agent-ui-dinosaurios-xg9fl5.streamlit.app/'],
  ['AI Accounting Agent', 'https://mattbuiles-ia-contable-app-ivkcyc.streamlit.app/'],
]

const SLEEP = /gone to sleep|get this app back up/i
const LOADING = /taking longer|oven|spinning up|waking/i
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function pageText(page) {
  const parts = await Promise.all(
    page.frames().map((frame) =>
      frame.evaluate(() => document.body.innerText.replace(/\s+/g, ' ').slice(0, 600)).catch(() => ''),
    ),
  )
  return parts.filter((text) => text && !/Status embed/.test(text)).join(' || ')
}

async function wakeIfAsleep(page) {
  for (const frame of page.frames()) {
    for (const button of await frame.$$('button').catch(() => [])) {
      const label = await frame.evaluate((el) => el.textContent, button).catch(() => '')
      if (/get this app back up/i.test(label)) {
        await button.click()
        return true
      }
    }
  }
  return false
}

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] })
let failed = false

for (const [name, url] of APPS) {
  const page = await browser.newPage()
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 120000 }).catch(() => {})
  await wait(6000)
  const woke = await wakeIfAsleep(page)
  let text = ''
  let ok = false
  for (let i = 0; i < 30; i += 1) {
    await wait(6000)
    text = await pageText(page)
    const stripped = text.replace(/Hosted with Streamlit|Created by \w+|Stop|Fork|Skip to main content/g, '').trim()
    if (!SLEEP.test(text) && !LOADING.test(text) && stripped.length > 30) {
      ok = true
      break
    }
  }
  console.log(`${ok ? 'OK ' : 'FALLO'} ${name}${woke ? ' (estaba dormida)' : ''}`)
  if (!ok) {
    console.log(`  último texto: ${text.slice(0, 200)}`)
    failed = true
  }
  await page.close()
}

await browser.close()
process.exit(failed ? 1 : 0)
