'use strict'
let gulp = require('gulp');
let sass = require('gulp-sass')
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');

//----------------- PATHS  ---------------------
let  paths = {
    styles: {
      src: 'scss/**/*.scss',
      dest: 'css/'
    }
  };



//----------------- GULP TASKS ---------------------
gulp.task('log', function (){
    console.log('geen hulp nodig');
    
});

gulp.task('sass', function (){
    return gulp.src(paths.styles.src) // worden hier gelezen -> dan pipeline in
    .pipe(sass().on('error', sass.logError)) // bij error voeg sass error uit
    .pipe(gulp.dest(paths.styles.dest)) // saves a normal version 
    .pipe(cleanCSS()) // minify version
    .pipe(rename({
        // basename: 'main',  // voor hernoeming van volledige file 
        suffix: '.min'
      }))
    .pipe(gulp.dest(paths.styles.dest)) // directory waar alles nartoe moet komen 
    
});

gulp.task('sass:watch', function (){ // laatste taak !
    gulp.watch(paths.styles.src,['sass']) // array van elementen
    
});