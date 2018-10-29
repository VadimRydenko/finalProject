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






