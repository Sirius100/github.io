/*window.addEventListener('load', function()  {
	const item = document.querySelector('#menu');
	item.checked = false;
}, false);*/
 

function check (){
	const submenu = document.querySelector('.submenu');
	const item = document.querySelector('#menu');

		if (item.checked == false){ 	
			submenu.style.display = "flex";
			submenu.style.transition = 'all 1.5s linear .2s';
			submenu.style.transform = 'translateY(-5rem)';	
			submenu.style.opacity = "1";
		}
		else {
			submenu.style.transform = 'translateY(0rem)';
			submenu.style.opacity = "0";
		}
};

