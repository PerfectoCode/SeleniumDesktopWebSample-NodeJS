let logger = console,
    host = process.env.host,
    token = process.env.token;
;

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
  specs: ['./specs/spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true,	// Use colors in the command line report.
    defaultTimeoutInterval: 120000	// Time to wait in ms before a test fails. Default value = 30000
  },

}