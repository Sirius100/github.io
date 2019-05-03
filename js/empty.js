window.onload = function () {


    // var items = document.querySelectorAll('.item-slayder', '.item-1', '.item-2', '.item-3');
    var items = document.querySelectorAll('.item-slayder');
    var kar = document.querySelectorAll('.slayder');
    // nextSlide();
    // bord();
    f();
    function nextSlide() {
        setTimeout(function () {
            oneline();
        }, 2000);
        setTimeout(function () {
            twoline();
        }, 2000);
    }

    function oneline() {
        let item = 'item-';
        let count = 0;
        for (let i = 1; i < 4; i++) {
            setTimeout(function () {
                items[count].className = item + i + ' ' + 'borders item-slayder';
                if (count >= 1) {
                    items[count - 1].className = item + (i - 1) + ' ' + 'item-slayder';
                }
                count++;
            }, 4000);

        }
    }

    function twoline() {
        let item = 'item-';
        let count = 3;
        for (let i = 1; i < 4; i++) {
            items[count].className = item + i + ' ' + 'borders item-slayder';
            if (count == 3) {
                items[count - 1].className = item + 3 + ' ' + 'item-slayder';
            }
            else {
                items[count - 1].className = item + (i - 1) + ' ' + 'item-slayder';
            }
            count++;
        }
    }

    function bord() {
        let tr = 1;
        setTimeout(function () {
            while (tr == true){
                for(let i = 0; i < 2; i++){
                    kar[i].className = 'slayder borders';
                }
            }
        }, 3000);
    }
    
    function f() {
        let stroka = 'hello Serg';
        let cickle = [1,2,3,4,56,78,9,8,8];
        for(let i = 0; i < cickle.length; i++){
            console.log(stroka);
        }
    }
}

