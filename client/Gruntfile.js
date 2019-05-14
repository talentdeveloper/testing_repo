var path = require('path');

var port = 4000;

module.exports = function(grunt) {

    var TEMPLATES_LOCATION        = "./app/js/views/",       // don't forget the trailing /
        TEMPLATES_EXTENSION       = ".hbs",
        TEMPLATES_OUTPUT_LOCATION = TEMPLATES_LOCATION,       // don't forget the trailing /
        TEMPLATES_OUTPUT_FILENAME = "views.js";  // don't forget the .js

    grunt.initConfig({
        watch: {
            handlebars: {
                files: [TEMPLATES_LOCATION + '**/*' + TEMPLATES_EXTENSION],
                tasks: ['build'],
                options: {
                  interrupt: true,
                },
            },
            css: {
                files: 'app/css/*',
                tasks: ['build'],
                options: {
                  interrupt: true,
                },
            },
            js: {
                files: 'app/js/**',
                tasks: ['build'],
                options: {
                  interrupt: false,
                },
            }
        },
        handlebars: {
            compile: {
                src: TEMPLATES_LOCATION + '**/*' + TEMPLATES_EXTENSION,
                dest: TEMPLATES_OUTPUT_LOCATION + TEMPLATES_OUTPUT_FILENAME,
                options: {
                    amd: false,
                    namespace: "views"
                }
            }
        },
        concat: {
            options: {
              separator: ';',
            },
            dependants: {
              src: ['app/js/dependencies/*'],
              dest: 'app/js/dist/dependencies.js',
            },
            lib: {
              src: ['app/js/blklab/blklab.js', 'app/js/blklab/config.js', 'app/js/blklab/blklab_utils.js', 'app/js/blklab/blklab_model.js', 'app/js/blklab/blklab_view.js', 'app/js/blklab/blklab_controller.js', 'app/js/blklab/blklab_router.js', 'app/js/blklab/blklab.js', 'app/js/blklab/blklab_app.js'],
              dest: 'app/js/dist/blklab-v0.0.1.js',
            },
            dist: {
              src: ['app/js/views/views.js', 'app/js/client/home.js', 'app/js/client/app.js', 'app/js/client/industry.js', 'app/js/client/individual.js', 'app/js/client/admin.js', 'app/js/client/perspectives.js', 'app/js/client/users.js'],
              dest: 'app/js/dist/client-v0.0.1.js',
            },
        },
        uglify: {
            my_target: {
              files: {
                  'app/js/dist/dependencies.min.js': ['app/js/dist/dependencies.js'],
                  'app/js/dist/kubby-v0.0.1.min.js': ['app/js/dist/client-v0.0.1.js'],
                  'app/js/dist/blklab-v0.0.1.min.js': ['app/js/dist/blklab-v0.0.1.js']
              }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'app/css/client.min.css': ['app/css/normalize.css', 'app/css/pickaday.css', 'app/css/grid.css', 'app/css/main.css', 'app/css/mq.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('build', ['handlebars', 'concat', 'uglify', 'cssmin']);

};
