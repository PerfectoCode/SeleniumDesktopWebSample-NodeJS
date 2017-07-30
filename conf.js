let logger = console,
  host = process.env.host,
  token = process.env.token;

// Use Security token for Perfecto Turbo Web authentication
// let token = '';

exports.config = {

  seleniumAddress: `https://${host}/nexperience/perfectomobile/wd/hub`,

  /**
   * For perfecto Turbo Web follow the instructions at:
   * http://developers.perfectomobile.com/display/PD/Turbo+Web+Automation
   *
   * In addition change the seleniumAddress in this config file to be:
   * seleniumAddress: `https://${host}/nexperience/perfectomobile/wd/hub/fast`,
   *
   * and add your security token to the capabilities
   */

  //Capabilities to be passed to the webdriver instance.
  capabilities: {
    platformName: 'Windows',
    platformVersion: '10',
    browserName: 'Chrome',
    browserVersion: '58',
    resolution: '1280x1024',
    securityToken: token
  },

  //Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['./specs/spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true,	// Use colors in the command line report.
    defaultTimeoutInterval: 120000	// Time to wait in ms before a test fails. Default value = 30000
  },

}