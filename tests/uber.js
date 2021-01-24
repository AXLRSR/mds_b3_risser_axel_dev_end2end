describe('Uber.com', function() {

    beforeEach(browser => browser.url('https://www.uber.com/fr/fr/'));

    test('Open Uber Website', function (browser) {
      browser.useXpath()
        .waitForElementPresent('//*[@id="main"]/section[1]/div/div/div/div/div/div') // COVID Popup (slowest element to load)
        .assert.elementPresent('/html/head/title')
        .assert.elementPresent('//*[@id="main"]')
        .assert.elementPresent('//*[@id="main"]/nav')
        .assert.elementPresent('//*[@id="main"]/footer')
        .end();
    });

    test('Check block login in the header wrapper', function (browser) {
      browser.useXpath()
        .waitForElementPresent('//*[@id="main"]/section[1]/div/div/div/div/div/div') // COVID Popup (slowest element to load)
        .waitForElementPresent('//*[@id="main"]/nav/div/ul[3]/li[1]/button')
        .waitForElementPresent('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
        .end();
    });

    test('Check login block in two sections', function (browser) {
      browser.useXpath()
        .waitForElementPresent('//*[@id="main"]/section[1]/div/div/div/div/div/div') // COVID Popup (slowest element to load)
        .waitForElementPresent('//*[@id="main"]/nav/div/ul[3]/li[1]/button')
        .click('//*[@id="main"]/nav/div/ul[3]/li[1]/button')
        .waitForElementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a')
        .waitForElementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a')
        .end();
    });

    test('Check login chauffeur section', function (browser) {
      browser.useXpath()
        .waitForElementPresent('//*[@id="main"]/section[1]/div/div/div/div/div/div') // COVID Popup (slowest element to load)
        .waitForElementPresent('//*[@id="main"]/nav/div/ul[3]/li[1]/button')
        .click('//*[@id="main"]/nav/div/ul[3]/li[1]/button')
        .waitForElementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a')
        .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a')
        .waitForElementPresent('//*[@id="useridInput"]')
        .setValue('//*[@id="useridInput"]', 'adresse@mail.fr')
        .waitForElementPresent('//*[@id="app-body"]/div/div[1]/form/div[2]/button')
        .click('//*[@id="app-body"]/div/div[1]/form/div[2]/button')
        .assert.urlEquals('https://auth.uber.com/login/session')
        .end();
    });

    test('Check login passager section', function (browser) {
      browser.useXpath()
        .waitForElementPresent('//*[@id="main"]/section[1]/div/div/div/div/div/div') // COVID Popup (slowest element to load)
        .waitForElementPresent('//*[@id="main"]/nav/div/ul[3]/li[1]/button')
        .click('//*[@id="main"]/nav/div/ul[3]/li[1]/button')
        .waitForElementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a')
        .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a')
        .waitForElementPresent('//*[@id="mobile"]')
        .waitForElementPresent('//*[@id="app-content"]/div/div/div/div/div/div/div/div[2]/div/a')
        .click('//*[@id="app-content"]/div/div/div/div/div/div/div/div[2]/div/a')
        .waitForElementPresent('//*[@id="app-content"]/div/div/div/div/div/a[1]')
        .waitForElementPresent('//*[@id="googleLoginButton"]')
        .end();
    });

    test('Check Registration block in two sections', function (browser) {
      browser.useXpath()
        .waitForElementPresent('//*[@id="main"]/section[1]/div/div/div/div/div/div') // COVID Popup (slowest element to load)
        .waitForElementPresent('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
        .click('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
        .waitForElementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a')
        .waitForElementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a')
        .end();
    });

    test('Check Registration block with Devenir Professional section', function (browser) {
      browser.useXpath()
        .waitForElementPresent('//*[@id="main"]/section[1]/div/div/div/div/div/div') // COVID Popup (slowest element to load)
        .waitForElementPresent('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
        .click('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
        .waitForElementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a')
        .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a')
        .assert.urlContains('https://www.uber.com/a/join-new')
        .waitForElementPresent('//*[@id="maincontent"]/div[2]/div/form/div[3]/div/input')
        .waitForElementPresent('//*[@id="maincontent"]/div[2]/div/form/div[4]/div/input')
        .waitForElementPresent('//*[@id="maincontent"]/div[2]/div/form/div[5]/div/input')
        .waitForElementPresent('//*[@id="maincontent"]/div[2]/div/form/div[6]/div/input')
        .waitForElementPresent('//*[@id="maincontent"]/div[2]/div/form/div[7]/div/input')
        .waitForElementPresent('//*[@id="maincontent"]/div[2]/div/form/div[8]/div/div/div[1]/input')
        .waitForElementPresent('//*[@id="maincontent"]/div[2]/div/form/div[9]/div/input')
        .end();
    });

    test('Check Registration block with Commander une course section', function (browser) {
      browser.useXpath()
        .waitForElementPresent('//*[@id="main"]/section[1]/div/div/div/div/div/div') // COVID Popup (slowest element to load)
        .waitForElementPresent('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
        .click('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
        .waitForElementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a')
        .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a')
        .assert.urlContains('https://auth.uber.com/login')
        .waitForElementPresent('//*[@id="mobile"]')
        .end();
    });

    test('Registration with Commander une course section shouldnt pass', function (browser) {
      browser.useXpath()
        .waitForElementPresent('//*[@id="main"]/section[1]/div/div/div/div/div/div') // COVID Popup (slowest element to load)
        .waitForElementPresent('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
        .click('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
        .waitForElementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a')
        .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a')
        .assert.urlContains('https://auth.uber.com/login')
        .waitForElementPresent('//*[@id="mobile"]')
        .waitForElementPresent('//*[@type="submit"]')
        .click('//*[@type="submit"]')
        .assert.urlContains('https://auth.uber.com/login')
        .end();
    });

    test('Registration should pass', function (browser) {
      browser.useXpath()
        .waitForElementPresent('//*[@id="main"]/section[1]/div/div/div/div/div/div') // COVID Popup (slowest element to load)
        .waitForElementPresent('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
        .click('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
        .waitForElementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a')
        .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a')
        .assert.urlContains('https://auth.uber.com/login')
        .waitForElementPresent('//*[@id="mobile"]')
        // .setValue('0612345678', '//*[@id="mobile"]')
        // BrowserStack didn't go on the same page than my browser because of the geolocalization
        .end();
    });

});
