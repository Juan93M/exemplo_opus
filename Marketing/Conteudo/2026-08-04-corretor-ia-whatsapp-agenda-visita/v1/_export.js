const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1080, height: 1440 },
    deviceScaleFactor: 2,
  });
  const fileUrl = 'file://' + path.resolve(__dirname, 'carrossel.html').split(path.sep).join('/');
  await page.goto(fileUrl);
  await page.waitForLoadState('networkidle');
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(1000);
  const slides = await page.$$('.slide');
  if (slides.length === 0) throw new Error('Nenhum .slide encontrado em carrossel.html');
  for (let i = 0; i < slides.length; i++) {
    const n = String(i + 1).padStart(2, '0');
    await slides[i].screenshot({ path: path.join(__dirname, `slide-${n}.png`) });
    console.log(`Exportado slide-${n}.png`);
  }
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
