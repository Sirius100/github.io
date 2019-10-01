/*блок реализует анимацию  меню  .submenu в секции .sub-1*/
const item = document.querySelector('#menu');
item.checked = true;


function check (){
	const submenu = document.querySelector('.submenu');
	const item = document.querySelector('#menu');
	
		if (item.checked != true){ 

			submenu.style.visibility = "visible";
			submenu.style.opacity = "1";
			submenu.style.transform = 'translateY(-3.7rem)';	
			
		}
		else {

			submenu.style.transform = 'translateY(0rem)';
			submenu.style.visibility = "hidden";
			submenu.style.opacity = "0";
		}
};
//------------------------------------------------


