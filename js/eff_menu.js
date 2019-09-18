/*window.addEventListener('load', function()  {
	const item = document.querySelector('#menu');
	console.log(item.checked);
	item.checked = true;
}, false);*/
 
const item = document.querySelector('#menu');
item.checked = true;


function check (){
	const submenu = document.querySelector('.submenu');
	const item = document.querySelector('#menu');
	
		if (item.checked != true){ 

			submenu.style.visibility = "visible";
			submenu.style.opacity = "1";
			submenu.style.transform = 'translateY(-3.5rem)';	
			
		}
		else {

			submenu.style.transform = 'translateY(0rem)';
			submenu.style.visibility = "hidden";
			submenu.style.opacity = "0";
		}
};



