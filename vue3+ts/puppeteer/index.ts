import puppeteer from 'puppeteer'

const sleep = (time: number) => {
    return new Promise((r, j) => {
        setTimeout(() => {
            r(time)
        }, time)
    })
}


(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ['--start-maximized']
    })
    const page = await browser.newPage()
    await page.goto('https://jd.com')

    const key = await page.$('#key')
    await key?.focus()
    await page.keyboard.sendCharacter('iphone13')
    await page.click('.button')
    await sleep(1000)
    await page.waitForSelector('.gl-item')
    let scrollEnable: boolean = true;
    let scrollStep: number = 500;
    while (scrollEnable) {
        scrollEnable = await page.evaluate((scrollStep: number) => {
            let scrollTop: number = document.scrollingElement?.scrollTop ?? 0;
            document.scrollingElement!.scrollTop = scrollTop + scrollStep;
            return document.body.clientHeight > scrollTop + 1080 ? true : false
        }, scrollStep)
        await sleep(500)
    }
    await page.screenshot({ path: `iphone13.png`, fullPage: true })
})()