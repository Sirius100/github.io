const btn = document.querySelector('button');

btn.addEventListener('click', ret());

function ret(){
	var c = 1;
	console.log(c);
    return function() {
			c++;
	};
};
