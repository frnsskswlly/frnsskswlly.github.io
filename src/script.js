const menu = document.querySelector('.menu');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', hide);

function show(){
    menu.style.transition = 'all 2s';
    menu.style.display = 'flex';
    menu.style.top = '0';
}

function hide(){
    menu.style.top = '-150%';
}
