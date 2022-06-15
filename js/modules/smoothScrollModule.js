export const smoothScrollModule = (() => {
    const listActive = document.querySelector('.header__list');
    const burger = document.querySelector('.burger');
    const header = document.querySelector('.header');
    const links = document.querySelectorAll('.header__link, .header__logo, .hero__btn');
    const headerHeight = header.getBoundingClientRect().height;


    function listener() {
        for (const link of links) {
            link.addEventListener('click', clickHandler);
        }
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop - 240;

        listActive.classList.remove('header__list--active');
        burger.classList.remove('burger--click');

        console.log(headerHeight);

        scroll({
            top: offsetTop + headerHeight,
            behavior: 'smooth'
        });
    }

    const init = () => {
        listener();
    }

    return {
        init,
    }

})();