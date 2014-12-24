
module.exports = function(grunt) {
	//load all grunt tasks	
	require('load-grunt-tasks')(grunt);

  	// Simple config to run jshint any time a file is added, changed or deleted
	grunt.initConfig({
	  	watch: {
	    	livereload: {
	      		// Here we watch the files the sass task will compile to
	      		// These files are sent to the live reload server after sass compiles to them
	      		options: { 
	      			livereload: true 
	      		},
	      		files: ['src/*.html'],
	    	}
	 	},
	  	connect: {
		    server: {
		      	options: {
		      		base : 'src',
		        	port: 8000,
		        	hostname: 'localhost',
		        	directory : 'src/*'
		        }
	      	}
	    }
	});

	grunt.registerTask('host', 'Start a custom static web server.', function() {
	  	grunt.log.writeln('Starting static web server in "localhost" on port 8000.');
	  	grunt.task.run(['connect', 'watch']);

	});

};




