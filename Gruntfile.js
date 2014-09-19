module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            options: {
                configFile: 'karma.conf.js',
                browsers: ['PhantomJS'],
                plugins: [
                    'karma-jasmine',
                    'karma-junit-reporter',
                    'karma-chrome-launcher',
                    'karma-firefox-launcher',
                    'karma-phantomjs-launcher',
                    'karma-ng-html2js-preprocessor'
                ],
                preprocessors: {
                    'app/**/*.html': ['ng-html2js']
                },
                ngHtml2JsPreprocessor: {
                    // strip this from the file path
                    stripPrefix: 'app/',

                    // prepend this to the
                    //prependPrefix: 'app/',

                    // Or define a custom transform function
                    //cacheIdFromPath: function(filepath) {
                    //    return filepath;
                    //},

                    // setting this option will create only a single module that contains templates
                    // from all the files, so you can load them all with module('templates')
                    moduleName: 'templates'
                }
            },
            run: {
                singleRun: true,
                autoWatch: false
            },
            watch: {
                singleRun: false,
                autoWatch: true
            },
            debug: {
                logLevel: 'DEBUG',
                singleRun: true,
                autoWatch: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('test', ['karma:run']);
    grunt.registerTask('test:watch', ['karma:watch']);
    grunt.registerTask('test:debug', ['karma:debug']);


};
