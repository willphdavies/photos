module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            options: {
                compress: {
                    drop_console: true,
                }
            },
            prod: {
                screwIE8: true,
                files: {
                    'dist/inline.bundle.js': ['dist/inline.bundle.js'],
                    'dist/main.bundle.js': ['dist/main.bundle.js'],
                    'dist/styles.bundle.js': ['dist/styles.bundle.js']
                },
                mangle: true,
            }
        },
        treeshake: {
            options: {
            },
            files: {
                'dist/inline.bundle.js': ['dist/inline.bundle.js'],
                'dist/main.bundle.js': ['dist/main.bundle.js'],
                'dist/styles.bundle.js': ['dist/styles.bundle.js']
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-treeshake');

    grunt.registerTask('default', ['treeshake','uglify']);

};