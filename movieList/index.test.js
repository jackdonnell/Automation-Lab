const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('delete a movie', async () => {
    const inputField = await driver.findElement(By.xpath('//form/input'))
    await inputField.sendKeys('shrek')
    await driver.sleep(1000)

    const theButton = await driver.findElement(By.css('button'))
    await theButton.click()
    await driver.sleep(1000)

    const deleteButton = await driver.findElement(By.css('#shrek'))
    await deleteButton.click()
    await driver.sleep(1000)
})

test('check deleted movie message', async () => {
    const inputField = await driver.findElement(By.xpath('//form/input'))
    await inputField.sendKeys('shrek')
    await driver.sleep(1000)

    const theButton = await driver.findElement(By.css('button'))
    await theButton.click()
    await driver.sleep(1000)

    const deleteButton = await driver.findElement(By.css('#shrek'))
    await deleteButton.click()

    const deleteMessage = await driver.findElement(By.css('#message')).getText()
    expect(deleteMessage).toEqual('shrek deleted!')
    await driver.sleep(1000)
})

test('delete a movie', async () => {
    const inputField = await driver.findElement(By.xpath('//form/input'))
    await inputField.sendKeys('shrek')
    await driver.sleep(1000)

    const theButton = await driver.findElement(By.css('button'))
    await theButton.click()
    await driver.sleep(1000)

    const movieText = await driver.findElement(By.css('.checked'))
    await movieText.click()
    await driver.sleep(1000)

})