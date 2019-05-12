const cards = document.querySelectorAll('.card');
for(let i = 0; i < cards.length; i++){
    const card = cards[i];
    card.addEventListener('mousemove', rotate);
    card.addEventListener('mouseout', stoprotate);
};

function  rotate(event) {
    const item = this.querySelector('.item');
    let Wbase = item.offsetWidth / 2 ;
    let Hbase = item.offsetHeight / 2;
    item.style.transform = 'rotateY('+((event.offsetX - Wbase) / 4)+'deg) rotateX('+ -
        ((event.offsetY - Hbase) / 4)+'deg)';

}

function stoprotate(event) {
    const item = this.querySelector('.item');
    item.style.transform = 'rotate(0)';
}