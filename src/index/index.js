import './index.scss';

const select = document.querySelector('.select');
const button = document.querySelector('.sidebar-menu__button_imd-main')

function close () {
    select.classList.remove ('open');
}
function open () {
    select.classList.add ('open');
}
function toggle () {
    if (select.classList.contains('open')){
        close ();
    }else {
        open ();
    }
}

button.onclick = toggle;


const mobileButton = document.querySelector('.sidebar-mobile-burger');
const sidebarMenu = document.querySelector('.main-content');

function closeSidebar () {
    sidebarMenu.classList.remove ('main-content-mobile-open');
}
function opeSidebarn () {
    sidebarMenu.classList.add ('main-content-mobile-open');
}
function mobileToggle () {
    if (sidebarMenu.classList.contains('main-content-mobile-open')){
        closeSidebar ();
    }else {
        opeSidebarn ();
    }
}

mobileButton.onclick = mobileToggle;
// document.addEventListener('swiped-left', closeSidebar());