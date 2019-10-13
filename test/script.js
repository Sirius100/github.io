const btn = document.querySelectorAll('button');

for (var i = 0; i < btn.length; i++){
	btn[i].addEventListener('click', reet);	
};

var a = 0;
var score = "global";


function reet() {
	var a = 0;
	return () => {
		a++;
		console.log(a);
	}
};


// let d = reet();
// for (var i = 0; i < 100; i++){
// 	d();
// }

function accum(a){
	return {
		get count() {
			console.log("Записал значение счетчика = ", a);
			return a++;},

		set count(m){
			if (m >= a){
				a = m;
			}
			else{
				throw Error ("Значение счетчика уменьшать нельзя");
			}
		}
	};
};

var c = accum(500);
c.count;
c.count = 505;
c.count;
c.count = 507;
c.count;
c.count = 513;
c.count;
c.count = 518;