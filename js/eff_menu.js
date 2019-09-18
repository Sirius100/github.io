/*window.addEventListener('load', function()  {
	const item = document.querySelector('#menu');
	console.log(item.checked);
	item.checked = true;
}, false);*/
 
const item = document.querySelector('#menu');
/**/item.checked = true;
console.log('item.checked загрузка сайта и = ', item.checked);



function check (){
	const submenu = document.querySelector('.submenu');
	const item = document.querySelector('#menu');

		if (item.checked != true){ 	
			console.log('item.checked вошел в секцию true и = ', item.checked);
			submenu.style.display = "flex";
			submenu.style.transition = 'all 1.5s linear .2s';
			submenu.style.transform = 'translateY(-5rem)';	
			submenu.style.opacity = "1";
			console.log('item.checked вышел из секции true и = ', item.checked);
		}
		else {
			console.log('item.checked вошел в секцию else и = ', item.checked);
			submenu.style.transform = 'translateY(0rem)';
			submenu.style.opacity = "0";
			console.log('item.checked вышел из секции else и = ', item.checked);
		}
};



