const gulp = require('gulp'),
      plumber = require('gulp-plumber'),
      pug = require('gulp-pug'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      watch = require('gulp-watch');       
      
const sassOptions = {
  outputStyle: 'expanded'
};

const pugOptions = {
  pretty: true
};

gulp.task('styles', () => {
  gulp.src('./src/scss/*.scss')
    .pipe(plumber())  
    .pipe(sass(sassOptions))
    .pipe(autoprefixer({version:['> 1%, last 2 versions, Firefox ESR, Opera 12.1']}))
    .pipe(gulp.dest('./public/css'))
});

gulp.task('pug', () => {
  gulp.src('./src/pug/*.pug')
    .pipe(plumber())  
    .pipe(pug(pugOptions))
    .pipe(gulp.dest('./public'))
});

gulp.task('default', () => {
  // gulp.watch(['dev/pug/**/*.pug','dev/sass/**/*.scss'], ['pug', 'styles'])
  watch('./src/scss/**/*.scss', () => gulp.start('styles'));
  watch('./src/pug/**/*.pug', () => gulp.start('pug'));
});
