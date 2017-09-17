var reportingClient;
let logger = console,
  host = process.env.host,
  token = process.env.token;

exports.config = {

  seleniumAddress: `https://${host}/nexperience/perfectomobile/wd/hub/fast`,

  /**
   * For more information regarding Perfecto Turbo Web please visit:
   * http://developers.perfectomobile.com/display/PD/Automating+Web-apps+with+Perfecto
   *
   * In order to use regular web change the seleniumAddress in this config file to be:
   * seleniumAddress: `https://${host}/nexperience/perfectomobile/wd/hub`,
   *
   * You can use username and password instead security token for regular web (only).
   * Be noted that using old credentials instead of security token is NOT recommended.
   */

  //Capabilities to be passed to the webdriver instance.
  capabilities: {
    platformName: 'Windows',
    platformVersion: '10',
    browserName: 'Chrome',
    browserVersion: 'latest',
    resolution: '1280x1024',
    securityToken: token
  },

  //Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['./specs/reporting.spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true,	// Use colors in the command line report.
    defaultTimeoutInterval: 120000	// Time to wait in ms before a test fails. Default value = 30000
  },

  // Before starting all tests
  onPrepare: function () {
    const Reporting = require('perfecto-reporting');

    reportingClient = new Reporting.Perfecto.PerfectoReportingClient(new Reporting.Perfecto.PerfectoExecutionContext({
      webdriver: browser.driver,
      tags: ['javascript driver']
    }));
    browser.reportingClient = reportingClient;

    var myReporter = {
      /**
       * when Jasmine spec started
       * @param result the tests result's object
       */
      specStarted: function (result) {
        reportingClient.testStart(result.fullName);
      },
      /**
       * when Jasmine sped is done
       * @param result the tests result's object
       */
      specDone: function (result) {
        if (result.status === 'failed') {
          const failure = result.failedExpectations[result.failedExpectations.length - 1];
          reportingClient.testStop({
            status: Reporting.Constants.results.failed,
            message: `${failure.message} ${failure.stack}`.substr(0, 4095)
          });
        } else {
          reportingClient.testStop({
            status: Reporting.Constants.results.passed
          });
        }
      }
    }
    jasmine.getEnv().addReporter(myReporter);
  },

  // After running all tests
  onComplete: function () {
    // Output report URL
    return reportingClient.getReportUrl().then(
      function (url) {
        console.log(`Report url = ${url}`);
      }
    );
  },

}