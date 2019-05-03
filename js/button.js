window.onload = function () {
    var items = document.querySelectorAll('.butt', '.butt-2');

    function changecolor() {
        let changeitem = items;
        if (changeitem[0].className == 'butt'){
            changeitem[0].className = 'butt butt-2';
            changeitem[1].className = 'butt';
         } else{
            changeitem[0].className = 'butt';
            changeitem[1].className = 'butt butt-2';
        }
    }
    setInterval(changecolor, 1000);
}

