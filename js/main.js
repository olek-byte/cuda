// $(function () {

// });


let listActive = document.querySelector('.header__list');
let burger = document.querySelectorAll('.burger__line');

function f1() {


    for (i = 0; i < burger.length; i++) {
        burger[i].classList.toggle('burger--click');
    }
    listActive.classList.toggle('header__list--active');
}

document.querySelector('.header__burger').onclick = f1;



// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    myFunction()
};

// Get the header
var header = document.querySelector(".header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


const links = document.querySelectorAll(".header__link");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    //useful
    listActive.classList.toggle('header__list--active');
    for (i = 0; i < burger.length; i++) {
        burger[i].classList.toggle('burger--click');
    }
    //useful

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}