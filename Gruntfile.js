module.exports = function (grunt) {

  //tasks + grunt config
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    clean: {
      dest: ['dest/*']
    },

    assemble: {
      options: {
        layoutdir: './src/layouts/',
        layout: 'default.hbs',
        partials: ['./src/partials/*.hbs'],
        data: ['package.json', 'src/data/*.json'],
        flatten: true,
      },
      site: {
        files: [{
          cwd: './src/pages/',
          dest: './dest/',
          expand: true,
          src: '*.hbs'
        }]
      }
    }
  });

  //contrib
  grunt.loadNpmTasks('grunt-contrib-clean');

  //vendor  
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-newer');

  //local development task
  grunt.registerTask('dev', [
    'clean',
    'assemble'
  ]);
};