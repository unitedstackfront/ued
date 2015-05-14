// Karma configuration
//
// For all available config options and default values, see:
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function (config) {
  'use strict';

  config.set({
    autoWatch: true,
    basePath: '',
    browsers: [process.env.TRAVIS ? 'Firefox' : 'Chrome'],
    captureTimeout: 5000,
    // list of files to exclude
    exclude: [
      'app/js/main.js'
    ],
    files: [
      // loaded without require
      'app/lib/jquery/dist/jquery.js',
      'app/lib/jasmine-jquery/lib/jasmine-jquery.js',
      'app/lib/jasmine-flight/lib/jasmine-flight.js',
      // loaded with require
      { pattern: 'app/lib/**/*.js', included: false },
      { pattern: 'app/js/**/*.js', included: false },
      { pattern: 'test/spec/**/*.spec.js', included: false },
      { pattern: 'app/js/**/*.jsx', watched: false, included: false, served: true },
      // test config
      'test/test-main.js'
    ],
    frameworks: [
      'jasmine',
      'requirejs'
    ],
    reporters: [process.env.TRAVIS ? 'dots' : 'progress'],
    reportSlowerThan: 500,
    singleRun: false
  });
};
