function Sub2_Div_Animation (htmlcomponent, cssclass, addclasscss)  {
    const content = document.getElementsByClassName(htmlcomponent)[0];
    const selector = document.querySelector(cssclass);
    newstyle : (function() {
        if (selector.className == cssclass){
            selector.className = addclasscss;
        }else {selector.className = cssclass};
    });
    playanimation: (function () {
         content.addEventListener("click", this.newstyle);
    });
}
window.onload = function () {

    const div_content = document.getElementsByClassName('CONTENT-1')[0];
    const divgulp = document.querySelector('.CONTENT-1');//переменная выплывающего дива с текстом для галпа

//  анимация перемещения дива галпа
    function div_gulpAnimation() {
        if (divgulp.className == 'CONTENT-1') {
            divgulp.className = 'read-content';
        } else {
            divgulp.className = 'CONTENT-1';
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
