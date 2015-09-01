'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nw-builder');

    grunt.initConfig({

        // Setup node-webkit task
        nwjs: {
            options: {
                platforms: ['win', 'linux', 'osx'],
                buildDir: './builds',
                version: 'v0.12.3'
            },
            src: ['./src/**/*']
        },

        // Setup watcher to run node-webkit task
        watch: {
            main: {
                files: ['./src/**'],
                tasks: ['nwjs']
            }
        }
    });

    // Set default grunt task
    grunt.registerTask('default', 'nwjs');
};