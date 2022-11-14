const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    var scrollPos = window.scrollY;
    if(scrollPos > 250){
        header.style.backgroundColor = "#29323c";
    } else{
        header.style.backgroundColor = 'transparent';
    }
})