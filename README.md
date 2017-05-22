# NodeJS + Protractor Desktop Web Code Sample

[![CircleCI](https://circleci.com/gh/PerfectoCode/SeleniumDesktopWebSample-NodeJS.svg?style=shield)](https://circleci.com/gh/PerfectoCode/SeleniumDesktopWebSample-NodeJS)

This code sample demonstrates how to use Perfecto Web Machines & Protractor in order to execute tests 
for your web applications on the cloud. 

### Getting Stated: 
- Clone or download the sample:<br/> `git clone https://github.com/PerfectoCode/SeleniumDesktopWebSample-NodeJS.git`
- Add your Perfecto Lab credentials within one of the conf.js files:
```JavaScript
...
host = process.env.host,
user = process.env.user,
password = process.env.password;
... 
```
Note! you may want to use env variable for your credentials as demonstrated

- Note:exclamation: the project include 2 different specs and 2 different conf.js files: 
    - conf.js and spec.js for running Desktop Web tests without Perfecto DigitalZoom Reporting
    - reporting.conf.js and reporting.spec.js for running Desktop Web tests with Perfecto DigitalZoom Reporting.
    
- Run the project from your IDE or using command line for example `Protractor conf.js`

### Web Capabilities: 

- To insure your tests run on Perfecto Web machines on the cloud use the capabilities as demonstrated in the code sample: <br/>
```JavaScript
//Capabilities to be passed to the webdriver instance.
capabilities: {
    platformName: 'Windows',
    platformVersion: '10',
    browserName: 'Chrome',
    browserVersion: '58',
    resolution: '1280x1024',
    user: user,
    password: password,
    // securityToken: token
},
```

- More capabilities are available, read more [here](http://developers.perfectomobile.com/display/PD/Supported+Platforms).

### Perfecto Turbo Web Automation:

Perfecto's Desktop Web environment introduces an accelerated interface to Web Browser automation with its new Turbo web interface. Using this new environment will allow you to connect quicker to the browser "device" you select for automating and testing your web application.

*Click [here](http://developers.perfectomobile.com/display/PD/Turbo+Web+Automation) to read more about Turbo Web Automation.*

- To enable Turbo Web Automation in this code sample follow the instructions in the link above in order to generate authentication token.
Place the authentication in one of the Turbo Web test's files:
```JavaScript
// Use Security token for Perfecto Turbo Web authentication
// let token = '';

exports.config = {

  seleniumAddress: `https://${host}/nexperience/perfectomobile/wd/hub/fast`,

  /**
   * For perfecto Turbo Web follow the instructions at:
   * http://developers.perfectomobile.com/display/PD/Turbo+Web+Automation
   *
   * In addition change the seleniumAddress in this config file to be:
   * seleniumAddress: `https://${host}/nexperience/perfectomobile/wd/hub/fast`,
   *
   * and add your security token to the capabilities
   */

....
```

### Perfecto DigitalZoom reporting:

Perfecto Reporting is a multiple execution digital report, that enables quick navigation within your latest build execution. Get visibility of your test execution status and quickly identify potential problems with an aggregated report.
Hone-in and quickly explore your test results all within customized views, that include logical steps and synced artifacts. Distinguish between test methods within a long execution. Add personalized logical steps and tags according to your team and organization.

*Click [here](http://developers.perfectomobile.com/display/PD/Reporting) to read more about DigitalZoom Reporting.*
