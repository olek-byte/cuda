export const validationFormModule = (() => {
    const inputText = document.querySelector('input[type="text"]');
    const inputEmail = document.querySelector('input[type="email"]');
    const textarea = document.querySelector('.form__textarea');
    const form = document.getElementById('form');

    const validateForm = () => {
        validateInput(inputText);
        validateInput(textarea);
        validateEmail();
        return validateInput(inputText) && validateEmail() && validateInput(textarea);
    }

    function eventListener() {
        form.addEventListener('submit', e => {
            e.preventDefault();

            if (validateForm()) {
                console.log('submit');
                form.submit();
            }
        })
    }

    function validateEmail() {
        let emailError = document.getElementById('email-error');
        let email = document.getElementById('contact-email').value;
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!email.length) {
            emailError.innerHTML = '*This field is required, please fill it.';
            inputEmail.classList.add('error');
            return false;
        } else if (!email.match(validRegex)) {
            emailError.innerHTML = '*incorrect email.';
            inputEmail.classList.add('error');
            return false;
        } else if (email.match(validRegex)) {
            inputEmail.classList.remove('error');
            emailError.innerHTML = '';
            return true;
        } else {
            return true;
        }
    }

    function validateInput(validationElement) {
        const errorElement = validationElement.nextElementSibling;

        if (!validationElement.value.length) {
            errorElement.innerHTML = '*This field is required, please fill it.';
            validationElement.classList.add('error');
            return false;
        }

        validationElement.classList.remove('error');
        errorElement.innerHTML = '';
        return true;
    }

    const init = () => {
        eventListener();
    }

    return {
        init,
    }

})();