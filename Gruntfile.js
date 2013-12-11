module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //Minify files with uglify
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },

    //Concatenate js with r.js RequireJS Optimizer
    requirejs: {
      compile: {
        options: {
          baseUrl: "./",
          mainConfigFile: "requirejs.conf.js",
          optimize: "uglify2",

          name: "app/js/angular-app/app",
          out: "app/js/optimized.js",
          wrap: {
            start: '(function(){\'use strict\';',
            end: '}).call(this);'
          }
        }
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-requirejs');


  // Default task(s).
  grunt.registerTask('default', ['requirejs']);

};