window.onload = function () {
    const items = document.querySelectorAll('.item-slayder');
    const karus = document.querySelectorAll('.karusel');
    const ob = 'Серега ты вызвал переменную go';
    const go = (function () {console.log(ob);} ());

    function ping(obj) {
        return obj;
    }

    function info_selector(css_style) {
        console.log('Серег вот информация из item:' + '\n');
        for(let i in css_style){
            console.log(css_style[i]);
        }
    }

    go;
    var test = ping(items);
    console.log(test);
    info_selector(items);

}