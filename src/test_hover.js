const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto('http://localhost:8000/site.html');
    
    // wait for js to populate categories
    await page.waitForSelector('.category-group');
    
    let heightBefore = await page.evaluate(() => {
        return document.querySelector('.category-posts').getBoundingClientRect().height;
    });
    
    // hover over the group
    await page.hover('.category-group');
    await page.waitForTimeout(500); // wait for animation
    
    let heightAfter = await page.evaluate(() => {
        return document.querySelector('.category-posts').getBoundingClientRect().height;
    });
    
    console.log(`Height before hover: ${heightBefore}`);
    console.log(`Height after hover: ${heightAfter}`);
    
    await browser.close();
})();
