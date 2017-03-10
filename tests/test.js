var fs = require('fs');
var moment = require('moment');

var timestamp = moment().unix();

var wstream = fs.createWriteStream('browser-log-' + timestamp + '.txt');

module.exports = {
    'Demo test' : function (browser) {

        browser
            .url(browser.launchUrl)
            .waitForElementVisible('#control', 2000)
            .click('#control')
            .pause(40000)
            .url('http://google.com')
            .getLog('browser', function(logEntriesArray) {
                console.log('Log length: ' + logEntriesArray.length);
                logEntriesArray.forEach(function(log) {
                    console.log('[' + log.level + '] ' + log.timestamp + ' : ' + log.message);
                    wstream.write('[' + log.level + '] ' + log.timestamp + ' : ' + log.message + '\n\n');
                });
            });
        browser.expect.element('#main').to.be.visible;

    }
};