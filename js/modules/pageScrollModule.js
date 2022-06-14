export const pageScrollModule = (() => {
    const header = document.querySelector('.header');
    // const sticky = header.offsetTop;

    window.onscroll = function () {
        pageScroll();
    };

    function pageScroll() {
        let sticky = header.offsetTop;
        if (window.pageYOffset > sticky) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }

    const init = () => {
        pageScroll();
    }

    return {
        init,
    }
})();