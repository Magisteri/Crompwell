const body = document.querySelector('body');
const ham = document.querySelector('.ham');
const links = document.querySelector('#links');
const smNav = document.querySelector('.smNav');
const header = document.querySelector('#header');
const light = document.querySelector('.light');
const root = document.querySelector(':root');
var i = 0;
var l = 0;

function sizeCheck() {
    if (window.matchMedia("(max-width: 1080px)").matches) {
        links.style.height = "0";
        links.style.display = "none";
        i = 0;
    } else {
        links.style.height = "auto";
        links.style.display = "grid";
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

function switchTheme() {
    if (l == 0) {
        document.documentElement.style.setProperty('--bkgd', '#0A0A0A');
        document.documentElement.style.setProperty('--txt', 'white');
        document.documentElement.style.setProperty('--acc', '#333333');
        l += 1;
    } else {
        document.documentElement.style.setProperty('--bkgd', '#F7F7F7');
        document.documentElement.style.setProperty('--txt', '#0A0A0A');
        document.documentElement.style.setProperty('--acc', 'rgb(180, 180, 180)');
        l = 0;
    }
}

light.addEventListener('click', switchTheme);
window.addEventListener('resize', sizeCheck);
ham.addEventListener('click', openMenu);