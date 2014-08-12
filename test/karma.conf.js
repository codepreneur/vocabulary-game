module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'public/bower_components/angular/angular.js',
      'public/bower_components/angular-route/angular-route.js',
      'public/bower_components/angular-mocks/angular-mocks.js',
      'public/bower_components/less/dist/less-1.6.1.js',
      'public/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'public/bower_components/angular-timer/dist/angular-timer.js',
      'public/bower_components/underscore/underscore.js',
      'test/lib/**/*.js',
      'public/js/**/*.js',
      'test/unit/**/*.spec.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};