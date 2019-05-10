window.onload = function () {
};
var a = 'hello';
var b = 15;
var b2 = 15.15;
var c = [];
var d = {};
var e = true;
var f = null;
var a2 = a;
a = 'hello!!!';


console.log('a' + ':' + a + ' ' +     typeof(a));
console.log('b' + ':' + b + ' ' +    typeof(b));
console.log('b2' + ':' + b2 + ' ' +  typeof(b2));
console.log('c' + ':' + c + ' ' +  typeof(c));
console.log('d' + ':' + d + ' ' +  typeof(d));
console.log('e' + ':' + e + ' ' +  typeof(e));
console.log('f' + ':' + f + ' ' +  typeof(f));
console.log('a2' + ':' + a2 + ' ' +  typeof(a2));

function f1(n) {
    if (n>5){return n;}
}
function f2() {
    var a = 1005;
    if (f1(4)){
        return console.log("all ok");}
    console.log("all don`t gud");
    console.log(this.a);
}
f2();

