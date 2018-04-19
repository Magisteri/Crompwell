const body = document.querySelector('body');
const ham = document.querySelector('.ham');
const links = document.querySelector('#links');
const smNav = document.querySelector('.smNav');
const header = document.querySelector('#header');
var i = 0;

function sizeCheck() {
    if (window.matchMedia("(max-width: 1080px)").matches) {
        links.style.height = "0";
        links.style.display = "none";
        smNav.style.borderBottom = "1px solid white";
        i = 0;
    } else {
        links.style.height = "auto";
        links.style.display = "grid";
        smNav.style.borderBottom = "0";
    }
}

function check() {
    if (window.matchMedia("(max-width: 1080px)").matches) {
        smNav.style.borderBottom = "1px solid white";
    } else {
        header.style.borderBottom = "1px solid white";
    }
}

function openMenu() {
    if (window.matchMedia("(max-width: 1080px)").matches) {
        if (i == 0) {
            links.style.height = "auto";
            links.style.display = "block";
            i += 1;
        } else {
            links.style.height = "0";
            links.style.display = "none";
            i = 0;
        }
    }
}

window.addEventListener('resize', sizeCheck);
window.addEventListener('load', check);
ham.addEventListener('click', openMenu);