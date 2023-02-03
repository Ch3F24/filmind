let open = false;
let openBtn = document.getElementById('nav-open');
let closeBtn = document.getElementById('nav-close');
let nav = document.getElementById('navigation');
function toggleNav() {
    if(open) {
        nav.classList.remove('open');
        document.body.removeAttribute('style');
    } else {
        document.body.style.overflow = 'hidden';

        nav.classList.add('open');
    }
    open = !open
}

openBtn.addEventListener('click',toggleNav);
closeBtn.addEventListener('click',toggleNav);