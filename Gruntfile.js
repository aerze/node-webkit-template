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
    grunt.registerTask('build', 'build all', function (platform, arch) {
        var buildString = 'Building final release for ';
        buildString += (platform === 'win')? 'Windows': '';
        buildString += (platform === 'osx')? 'OSX': '';
        buildString += (platform === 'linux')? 'linux': '';
        buildString += (arch === '64')? '_64': '';
        buildString += (arch === '32')? '_32': '';
        grunt.log.writeln(buildString);

        if (platform) {
            if (platform === 'linux') {
                
            }
        }
    });
};