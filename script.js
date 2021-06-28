//code for hamburger menu and links to function when clicked and scrolled
const ham_menu = document.querySelector('.head .navbar .navlink .menu');
const mobile_menu = document.querySelector('.head .navbar .navlink ul');
const menu_item = document.querySelectorAll('.head .navbar .navlink ul li a');
const head = document.querySelector('.head.container');

ham_menu.addEventListener('click', () => {
	ham_menu.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

//gives menu color if scrolled down page and makes it transparent if not
document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		head.style.backgroundColor = 'black';
	} else {
		head.style.backgroundColor = 'transparent';
	}
});

//returns list of links and adds thems to menu when clicked
menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		ham_menu.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});