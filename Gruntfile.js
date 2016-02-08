module.exports = function(grunt) {

      //initial project configuration
      grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            //concatenates all the js files together
            concat: {
                  options: {
                        //defines a string ti put between each file in the concat'd output
                        separator: ','
                  },
                  dist: {
                        //source files to concatenate
                        src: ['./src/**/*.js'],
                        //the location of the resulting js file
                        dest: './dist/all.js'
                  }
            },
            //minifies all of the concatenated files
            uglify: {
                  options: {
                        //at the top of the output (file?)
                        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
                  },
                  dist: {
                        files: {
                              'dist/all.min.js': ['<%= concat.dist.dest %>']
                        }
                  }
            },
            //unit testing
            qunit: {
                  files: ['test/**/*.html']
            },
            //javascript hints/validation
            jshint: {
                  //defining the files to validate through js hint
                  files: ['gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
                  //configuring jshint, docs are on the website
                  options: {
                        //options that override jshint defaults go here
                        globals: {
                              jQuery: true,
                              console: true,
                              modue: true
                        }
                  }
            },
            //running `grunt watch` from terminal will execute these tasks
            watch: {
                  files: ['<%= jshint.files %>'],
                  tasks: ['jshint', 'qunit']
            }
      });

      grunt.loadNpmTasks('grunt-contrib-concat');
      grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.loadNpmTasks('grunt-contrib-jshint');
      grunt.loadNpmTasks('grunt-contrib-qunit');
      grunt.loadNpmTasks('grunt-contrib-watch');

      //task for testing
      grunt.registerTask('test', ['jshint', 'qunit']);

      //default task. runs when `grunt` is run from terminal
      grunt.registerTask('default', ['concat']);

};
