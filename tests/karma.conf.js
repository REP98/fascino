// Karma configuration
// Generated on Fri Apr 22 2022 18:33:19 GMT-0400 (hora de Venezuela)
const path = require('path')
const { babel } = require('@rollup/plugin-babel')
const istanbul = require('rollup-plugin-istanbul')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const replace = require('@rollup/plugin-replace')

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    
    // frameworks to use
    // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
    frameworks: ['jasmine'],
    
    // list of files / patterns to load in the browser
    files: [
      { pattern: '**/*.test.js', watched: false }
    ],
    
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://www.npmjs.com/search?q=keywords:karma-reporter
    reporters: ['dots', 'kjhtml'],

    // web server port
    port: 9876,

    plugins: [
      'karma-jasmine',
      'karma-jasmine-html-reporter',
      "karma-firefox-launcher",
      "karma-phantomjs-launcher",
      "karma-rollup-preprocessor"
    ],

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_ERROR,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
    browsers: [],//['FirefoxDeveloper'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser instances should be started simultaneously
    concurrency: Infinity,
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://www.npmjs.com/search?q=keywords:karma-preprocessor
    preprocessors: {
      '**/*.test.js': ['rollup']
    },

    rollupPreprocessor: {
      plugins: [
       /* replace({
          'process.env.NODE_ENV': '"dev"',
          preventAssignment: true
        }),*/
        babel({
          // Only transpile our source code
         // exclude: '../node_modules/**',
          // Inline the required helpers in each file
          babelHelpers: 'inline'
        }),
        istanbul(), 
      /*  */
     // nodeResolve() 
      ],
      output: {
        format: 'iife',
        name: 'fascinoTest',
        sourcemap: 'inline'
      }
    }
  })
}