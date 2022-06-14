export const validationFormModule = (() => {

    const inputText = document.querySelector('input[type="text"]');
    const inputEmail = document.querySelector('input[type="email"]');
    const textarea = document.querySelector('.textarea');
    const form = document.getElementById('form');

    const validateForm = () => {
        return validateInput(inputText) && validateEmail() && validateInput(textarea);
    }

    function eventListener() {
        form.addEventListener('submit', e => {
            e.preventDefault();
            validateForm();

            if (validateForm()) {
                console.log('submit');
                form.submit();
            }
        })
    }

    const inputFunction = () => {
        inputText.addEventListener('keyup', validateInput);
        inputEmail.addEventListener('keyup', validateEmail);
        textarea.addEventListener('keyup', validateInput);
    }


    function validateEmail() {
        let emailError = document.getElementById('email-error');
        let email = document.getElementById('contact-email').value;
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!email.length) {
            emailError.innerHTML = '*This field is required, please fill it.';
            inputEmail.classList.add("_error");
            return false;
        } else if (!email.match(validRegex)) {
            emailError.innerHTML = '*incorrect email.';
            inputEmail.classList.add("_error");
            console.log("Error 404");
            return false;
        } else if (email.match(validRegex)) {
            console.log("Good!");
            inputEmail.classList.remove("_error");
            emailError.innerHTML = '';
            return true;
        } else {
            return true;
        }

    }

    function validateInput(validationElement) {
        console.log(validationElement);
        const errorElement = validationElement.nextElementSibling;
        // console.log(errorElement);

        if (!validationElement.value.length) {
            errorElement.innerHTML = '*This field is required, please fill it.';
            validationElement.classList.add("_error");
            return false;
        }

        validationElement.classList.remove("_error");
        return true;
    }

    const init = () => {
        eventListener();
    }

    return {
        init,
    }

})();