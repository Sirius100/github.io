window.onload = function () {

    const div_content = document.getElementsByClassName('CONTENT-1')[0];
    const divgulp = document.querySelector('.CONTENT-1');//переменная выплывающего дива с текстом для галпа
    var div_gulp = divgulp;

//  анимация перемещения дива галпа
    function div_gulpAnimation() {
        if (div_gulp.className == 'CONTENT-1') {
            div_gulp.className = 'read-content';
        } else {
            div_gulp.className = 'CONTENT-1';
            }
    }
//функция для браузера firefox
    function formozila () {
        div_content.addEventListener("click", div_gulpAnimation);
    }
//функция для браузера IE5 и выше
    function explor() {
        div_content.attachEvent("onclick", div_gulpAnimation);
    }

    if (div_content.addEventListener){
        formozila();
    }else {
        explor();
    }
};
