module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            main: {
                src: 'common-files/dev/js/*.js',
                dest: 'common-files/prod/js/scripts.js'
            }
        },
        uglify: {
            main: {
                files: {
                    'common-files/prod/js/scripts.min.js': '<%= concat.main.dest %>'
                }
            }
        },
        clean: ['<%= concat.main.dest %>'],
        recess: {
            common: {
                options: {
                    compile: true,
                    compress: true
                },
                files: {
                    'common-files/prod/css/common-styles.css': [
                        'common-files/dev/css/part-of-bootstrap.css',
                        'common-files/dev/css/icons.css',
                    ]
                }
            },
            articlesFiles: {
                options: {
                    compile: true,
                    compress: true
                },
                files: {
                    'articles/dummy/styles.css': 'articles/dummy/less/styles.less',
                    'articles/rating/styles.css': 'articles/rating/less/styles.less'
                }
            }
        },
        watch: {
            css: {
                files: [
                    '**/*.less',
                    'common-files/dev/js/*.js'
                ],
                tasks: ['default'],
                options: {
                    livereload: true,
                    debounceDelay: 250,
                    nospawn: true
                }
            }
        }
    });

    grunt.event.on('watch', function(action, filepath) {
        grunt.log.writeln(filepath + ' has ' + action);
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['concat', 'uglify', 'clean', 'recess']);
};