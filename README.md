# NodeJS + Protractor Desktop Web Code Sample

[![CircleCI](https://circleci.com/gh/PerfectoCode/SeleniumDesktopWebSample-NodeJS.svg?style=shield)](https://circleci.com/gh/PerfectoCode/SeleniumDesktopWebSample-NodeJS)

This code sample demonstrates how to use Perfecto Web Machines & Protractor in order to execute tests 
for your web applications on the cloud. 

### Getting Stated: 
- Clone or download the sample:<br/> `git clone https://github.com/PerfectoCode/SeleniumDesktopWebSample-NodeJS.git`
- Add your Perfecto Lab credentials within one of the conf.js files:
```JavaScript
...
token = process.env.token,
host = process.env.host;
... 
```
You may want to use env variable for your credentials as demonstrated.

Old school credentials may be used by replacing the security token with username and password (Not available for Turbo Web)
```JavaScript
...
user = process.env.user,
password = process.env.password;
...
```
:exclamation:Using old school credentials is not a best practice and is not recommended.

- Note:exclamation: the project include 2 different specs and 2 different conf.js files (Both using Turbo Web):
    - conf.js and spec.js for running Desktop Web tests without Perfecto DigitalZoom Reporting
    - reporting.conf.js and reporting.spec.js for running Desktop Web tests with Perfecto DigitalZoom Reporting.
    
- Run the project from your IDE or using command line for example `Protractor conf.js`

:exclamation:For Non Turbo Web replace:
```JavaScript
seleniumAddress: `https://${host}/nexperience/perfectomobile/wd/hub/fast`,
```
with:
```JavaScript
seleniumAddress: `https://${host}/nexperience/perfectomobile/wd/hub`,
```

### Web Capabilities: 

- To insure your tests run on Perfecto Web machines on the cloud use the capabilities as demonstrated in the code sample: <br/>
```JavaScript
//Capabilities to be passed to the webdriver instance.
capabilities: {
    platformName: 'Windows',
    platformVersion: '10',
    browserName: 'Chrome',
    browserVersion: 'latest',
    resolution: '1280x1024',
    securityToken: token;
},
```

- More capabilities are available, read more [here](http://developers.perfectomobile.com/display/PD/Supported+Platforms).

### Perfecto Turbo Web Automation:

Perfecto's Desktop Web environment introduces an accelerated interface to Web Browser automation with its new Turbo web interface. Using this new environment will allow you to connect quicker to the browser "device" you select for automating and testing your web application.

*Click [here](http://developers.perfectomobile.com/display/PD/Automating+Web-apps+with+Perfecto) to read more about Turbo Web Automation.*

### Perfecto DigitalZoom reporting:

Perfecto Reporting is a multiple execution digital report, that enables quick navigation within your latest build execution. Get visibility of your test execution status and quickly identify potential problems with an aggregated report.
Hone-in and quickly explore your test results all within customized views, that include logical steps and synced artifacts. Distinguish between test methods within a long execution. Add personalized logical steps and tags according to your team and organization.

*Click [here](http://developers.perfectomobile.com/display/PD/Reporting) to read more about DigitalZoom Reporting.*
