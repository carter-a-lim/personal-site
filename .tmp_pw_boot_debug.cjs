const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const logs = [];
  page.on('console', msg => logs.push(`[console:${msg.type()}] ${msg.text()}`));
  page.on('pageerror', err => logs.push(`[pageerror] ${err && err.stack ? err.stack : err}`));
  page.on('requestfailed', req => logs.push(`[requestfailed] ${req.url()} :: ${req.failure() && req.failure().errorText}`));
  page.on('crash', () => logs.push('[page] crash event'));

  try {
    await page.goto('http://127.0.0.1:4173/?debugboot', { waitUntil: 'domcontentloaded', timeout: 45000 });
    await page.waitForTimeout(22000);
    const bootLabel = await page.locator('#boot-label').first().textContent().catch(()=>null);
    logs.push(`[boot-label] ${bootLabel}`);
    const hasStart = await page.locator('#boot-start.visible').count().catch(()=>0);
    logs.push(`[boot-start-visible] ${hasStart}`);
  } catch (e) {
    logs.push(`[goto-error] ${e && e.stack ? e.stack : e}`);
  }

  for (const line of logs) console.log(line);
  await browser.close();
})();
