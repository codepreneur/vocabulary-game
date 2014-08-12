exports.config = {
  allScriptsTimeout: 11000,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    'e2e/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:3000/home/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};