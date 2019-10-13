/*
данный файл содержит реализацию анимации подсветки соответствующего раздела 
.tabs (пока всего два раздела в меню: GULP&WEBPACK) при наведении указателя на .CONTENT 
 */

const content = document.querySelectorAll(".CONTENT");

for (let i = 0; i < content.length; i++){
	const section_G_W = content[i];
	section_G_W.addEventListener('mouseover', illumination);
	section_G_W.addEventListener('mouseout', out_illumination);
};

function illumination(even) {
	let name = this.className.split(' ')[1];
	const g_w = document.querySelector('.' + name);
	g_w.className = name + " interactiv";
};

function out_illumination(even){
	let name = this.className.split(' ')[1];
	const g_w = document.querySelector('.' + name);
	g_w.className = name;	
}
