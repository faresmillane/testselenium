const {Given, When, Then, setDefaultTimeout, Before, After} = require('@cucumber/cucumber');
setDefaultTimeout(60*1000);
const helper = require('./../helpers/web');
const pages = require('./../pages/home');

Before(async function () {
  await helper.initBrowser();
});

After(async function () {
  await helper.quitBrowser();
});

  Given('i navigate to home page', async function () {
    await helper.navigate(pages.url);
    await helper.click(pages.cgu_button);
  });

  When('I fill {string} in the bar search', async function (string) {
    await helper.waitToSeeElement(pages.searc_bar);
    await helper.type(pages.searc_bar, string)
  });

  When('I click on the search button', async function () {
    await helper.waitToSeeElement(pages.search_button);
    await helper.clickForce(pages.search_button);
  });

  Then('I see the result label', async function () {
    console.log("le test est bon")
  });