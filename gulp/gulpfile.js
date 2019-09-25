const gulp            = require('gulp');
const sass            = require('gulp-ruby-sass');
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
    gulp.watch('../src/sass/*.sass', ['sass']);
    gulp.watch('../src/pug/*.pug', ['pug']);
    gulp.watch('../src/pug/template/*.pug', ['pug']);
    gulp.watch('../src/pug/template/section/*.pug', ['pug']);
//===================================================================    
//    gulp.watch('../html/index.html', ['BrowserSync']);
//    gulp.watch('../css/css.style', ['BrowserSync_css']);
//===================================================================    
});

//запуск шаблонизатора pug
gulp.task('pug', () =>  {
   return gulp.src('../src/pug/*.pug')
  .pipe(plumber())
  .pipe(pug({
    // Your options in here.
      pretty : true
  }))
  .pipe(gulp.dest('../src/html/'))
//  .pipe(gulp.dest('../index.html'))
  .pipe(plumber.stop())  
});




//команда запуска препроцессора sass
//создает сss файл из sass файла
gulp.task('sass',  () => {
    sass('../src/sass/*.sass')
    .on('error', sass.logError)
        .pipe(gulp.dest('../src/sass/css/'))
        .pipe(sourcemaps.init())
            .pipe(concat('style.css'))
            .pipe(prefixer())
            .pipe(sourcemaps.write('../src/sass/maps'))
            .pipe(gulp.dest('../css'))
});

gulp.task('default',['watch']);
