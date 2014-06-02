module.exports = function(grunt) {
  grunt.initConfig({
    clean: ['dist/'],
    browserify: {
      'dist/filer-dialogs.js': ['src/index.js']
    },
    rework: {
      'dist/style.css': ['style.css'],
      options: {
        vendors: ['-moz-', '-webkit-']
      }
    },
    copy: {
      images: {
        src: 'img/**',
        dest: 'dist/',
        expand: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-rework');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['clean', 'browserify', 'rework', 'copy']);
};
