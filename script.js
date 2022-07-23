const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}


var MainImg = document.getElementById('MainImg')
var Smalling = document.getElementsByClassName('small-img')

Smalling[0].onclick = function(){
    MainImg.src = Smalling[0].src
}

Smalling[1].onclick = function(){
    MainImg.src = Smalling[1].src
}
Smalling[2].onclick = function(){
    MainImg.src = Smalling[2].src
}
Smalling[3].onclick = function(){
    MainImg.src = Smalling[3].src
}