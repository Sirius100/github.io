const gulp            = require('gulp');
const sass            = require('gulp-ruby-sass');
const master_sass     = require('gulp-ruby-sass');
const concat          = require('gulp-concat');
const prefixer        = require('gulp-autoprefixer');
const pug             = require('gulp-pug');
const plumber         = require('gulp-plumber');
const sourcemaps      = require('gulp-sourcemaps');
//=====================================================================
//const BrowserSync     = require('browser-sync').create();
//const BrowserSync_css     = require('browser-sync').create();
//=====================================================================


//объединение файлов *.sass in style.sass
gulp.task('concat',  () => {
   return gulp.src('../src/sass/css/*.css')
       .pipe(concat('style.css'))
       .pipe(gulp.dest('../css'))
});

gulp.task('watch', () => {
    gulp.watch('../src/sass/*.sass', ['master_sass']);
    gulp.watch('../src/sass/**/*.sass', ['sass']);
    gulp.watch('../src/pug/**/*.pug', ['pug']);
//===================================================================    
//    gulp.watch('../html/index.html', ['BrowserSync']);
//    gulp.watch('../css/css.style', ['BrowserSync_css']);
//===================================================================    
});

//запуск шаблонизатора pug
gulp.task('pug', () =>  {
  console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*');
  console.log('Start Pug');
  console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*');
   return gulp.src('../src/pug/*.pug')
  .pipe(plumber())
  .pipe(pug({
    // Your options in here.
      pretty : true
  }))
  .pipe(gulp.dest('../src/html/'))
  .pipe(gulp.dest('.././index'))
  .pipe(plumber.stop())  
});


gulp.task('sass', () => {
  console.log('Start Sourcemap!!!');
  console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*');
  console.log('Start Sass!!!');
  console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*');
  return sass(['../src/sass/**/*.sass'])
    .on('error', sass.logError)
    .pipe(sourcemaps.init({loadMaps : true}))
    .pipe(gulp.dest('../src/sass/css/'))
    .pipe(concat('style.css'))
    .pipe(prefixer())
    .pipe(sourcemaps.write('../src/sass/maps/'))
  .pipe(gulp.dest('../css'));
});

gulp.task('master_sass', () => {
  console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*');
  console.log('Start Master Sass!!!');
  console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*');
  gulp.src('../src/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(prefixer())
    .pipe(gulp.dest('../css'));
});
gulp.task('default',['watch']);
