export const headerModule = (() => {
    const listActive = document.querySelector('.header__list');
    const burger = document.querySelector('.burger');

    function headerMenu() {
        burger.classList.toggle('burger--click');
        listActive.classList.toggle('header__list--active');
    }

    function eventHandler() {
        burger.addEventListener('click', headerMenu);
    }

    const init = () => {
        eventHandler();
    }

    return {
        init,
    }
})();