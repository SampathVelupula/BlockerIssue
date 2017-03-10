module.exports = {
    'Demo test' : function (browser) {

        browser
            .url(browser.launchUrl)
            .waitForElementVisible('#control', 2000)
            .click('#control')
            .pause(40000)
            .end();
        browser.expect.element('#main').to.be.visible;

    }
};