/*
Настройка проекта:
1- глобальная установка npm если не установлен:
    проверка на наличие глобального npm  npm -v,
    если есть то переходим на шаг 3
2 - npm install gulp-cli -g
3 - в корне проекта создаем папку gulp в которую установим локально gulp
4 - переходим в папку gulp, в консоли выполняем команду установки локального gulp: sudo npm install gulp -D
5 - копируем в папку gulp файлы gulpfile.js и package.json, если имеются от других проектов
6 - в консоли выполняем команду: sudo npm install эта команда подтянет все плагины из файла package.json
7 - ручками (если их нет) создаем в корне проекта папки dist, src и  src_from_git (скрипт для автоматизации еще не написал)
8 - запускаем команду в консоли: gulp c:proj , сокращенное от create-project, эта команда создаст директории
    внутри папок dist и src_from_git.
*/

const gulp            = require('gulp');
const sass            = require('gulp-ruby-sass');
const concat          = require('gulp-concat');
const prefixer        = require('gulp-autoprefixer');
const fs              = require('fs');
const sourcesmap      = require ('gulp-sourcemaps');
const pug             = require ('gulp-pug');

/*команда создает каталог директорий внутри проекта:
- distr этот каталог будет пушится в github.<name_project>
 -src_from_git в этот каталог будет клонироваться проект/файлы из github.<name_project>
 - src в этот будут копировать файлы из каталога src_from_git. И в этом каталоге будет идти разработка
 "сырого" проекта, который после отсутствия всех багов будет копироваться в директорию dist а от туда в github.<name_project>
*/

gulp.task('c:proj', () => {

    const folders = [
        '../dist/css',
        '../dist/css/css',
        '../dist/img',
        '../dist/img/content',
        '../dist/img/icons',
        '../dist/fonts',
        '../dist/js',
        '../dist/html',
        '../src_from_git/css',
        '../src_from_git/css/css',
        '../src_from_git/img',
        '../src_from_git/img/content',
        '../src_from_git/img/icon',
        '../src_from_git/fonts',
        '../src_from_git/js',
        '../src_from_git/html',
        '../src/css',
        '../src/css/css',
        '../src/img',
        '../src/img/content',
        '../src/img/icon',
        '../src/fonts',
        '../src/js',
        '../src/sass',
        '../src/html',
    ];

    folders.forEach(dir => {
        if(!fs.existsSync(dir))
            fs.mkdirSync(dir),
            console.log('📁  folder created:', dir);
    });
});
//##############################################################
gulp.task('proj', () => {
    gulp.src('../src_from_git/**/*.*')
        .pipe(gulp.dest('../src/*.*'))
});

//##############################################################
// //объединение файлов *.sass in style.sass
gulp.task('concat', function () {
   return gulp.src('../src/sass/css/*.css')
       .pipe(concat('style.css'))
       .pipe(gulp.dest('../css'))
});

gulp.task('watch', function () {
    gulp.watch('../src/sass/*.sass', ['sass']);
})

//команда для копирования стабильных-отбаженных файлов в продакшен
//нужно будет настроить для раздельной разработки версий dev от relis
gulp.task('relis', () =>
    gulp.src('../js/*.js')
        .pipe(gulp.dest('../distr'))
);
//запуск pug
gulp.task('pug', function buildHTML() {
  return gulp.src('../src/pug/practick.jade')
  .pipe(pug({
      pretty: true
    // Your options in here.
  }))
      .pipe(gulp.dest('../src/html/'))
});

//команда запуска препроцессора sass
//создает сss файл из sass файла
gulp.task('sass', function () {
    sass('../src/sass/*.sass')
    .on('error', sass.logError)
        .pipe(gulp.dest('../src/sass/css/'))
        .pipe(sourcesmap.init())
        .pipe(prefixer())
        .pipe(concat('style.css'))
        .pipe(prefixer())
//        .pipe(sourcesmap.write())
        .pipe(gulp.dest('../css'))
});

gulp.task('default',['watch']);
