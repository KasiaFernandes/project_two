module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'project_two.style.css': 'project_two.style.sass'
        }
      }
    },
    
    watch: {
    scripts: {
        files: ['*.sass'],
        tasks: ['sass'],
        options: {
            spawn: false,
        },
    }
},
      browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        '*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        }
  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');    
  grunt.loadNpmTasks('grunt-browser-sync');
    
  // Default task(s).
  grunt.registerTask('default', ['sass', 'browserSync', 'watch']);
};