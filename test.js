const {Builder, By, until} = require("selenium-webdriver");

const test = async () =>  {
    const driver = await new Builder()
    .withCapabilities({browserName: "chrome"})
    .usingServer("http://localhost:4444/")
    .build()
    await driver.get("https://www.google.fr/");
    await driver.wait(until.elementLocated(By.id("L2AGLb")), 3000);
    await driver.findElement(By.id("L2AGLb")).click();
    await driver.wait(until.elementLocated(By.className("gLFyf")), 3000);
    await driver.findElement(By.className("gLFyf")).sendKeys("davidson-consulting");
    await driver.wait(until.elementLocated(By.className("gLFyf")), 3000);
    await driver.executeScript(`document.getElementsByClassName("gNO89b")[0].click()`);
    await driver.quit();
};

test();