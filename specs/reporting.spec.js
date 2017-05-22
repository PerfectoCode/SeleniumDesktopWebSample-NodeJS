describe('Protractor Desktop Web', function () {
  it('Protractor Desktop Web Template', function () {

    browser.reportingClient.stepStart('Navigate to google');
    browser.driver.get('https://google.com');
    browser.reportingClient.stepEnd();

    // complete your test here

  });
});