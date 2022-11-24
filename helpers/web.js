const {Builder, By, until} = require("selenium-webdriver");
let driver=null;

const initBrowser = async () => {
    driver = await new Builder()
    .withCapabilities({browserName: 'chrome'})
    .usingServer("http://localhost:4444/")
    .build()
};

const navigate = async (url) => {
    await driver.get(url);
};

const waitToSeeElement = async (element) => {
    await driver.wait(until.elementLocated(By.className(element)), 3000);
};

const click = async (element) => {
    await driver.findElement(By.className(element)).click();
};

const type = async (element, word) => {
    await driver.findElement(By.className(element)).sendKeys(word);
};

const clickForce = async (element) => {
    await driver.executeScript(`document.getElementsByClassName("${element}")[0].click()`);
};

const quitBrowser = async () => {
    await driver.quit();
};




module.exports = {
    initBrowser,
    navigate,
    waitToSeeElement,
    click,
    type,
    clickForce,
    quitBrowser
}