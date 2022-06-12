export const formValidationModule = (() => {
  const form = document.querySelector('.form__contacts');
  const inputsCollection = form.querySelectorAll('input[type="text"], input[type="email"]');
  const textAreaCollection = form.querySelectorAll('textarea');
  const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const EMPTY_INPUT_ERROR_TEXT = 'This field is required';
  const INVALID_EMAIL_ADDRESS_TEXT = 'Invalid email address';
  const HIDE_CLASS = 'hide';

  const isRequired = ((element) => {
    return element.hasAttribute('required');
  });

  const validateFormElements = ((collection) => {
    const errors = [];
    collection.forEach((currentInput) => {
      if (!isRequired(currentInput)) {
        return;
      }

      if (!currentInput.value.length) {
        currentInput.nextElementSibling.textContent = EMPTY_INPUT_ERROR_TEXT;
        currentInput.nextElementSibling.classList.remove(HIDE_CLASS);
        errors.push(EMPTY_INPUT_ERROR_TEXT);
        return;
      }

      if (currentInput.getAttribute('type') === 'email' &&
        !currentInput.value.match(EMAIL_REGEX)) {
        currentInput.nextElementSibling.textContent = INVALID_EMAIL_ADDRESS_TEXT;
        currentInput.nextElementSibling.classList.remove(HIDE_CLASS);
        errors.push(INVALID_EMAIL_ADDRESS_TEXT);
      }
    });
    return errors;
  });

  const eventsHandler = (() => {

    inputsCollection.forEach((element) => {
      element.addEventListener('keyup', () => {
        element.nextElementSibling.classList.add(HIDE_CLASS);
      })
    });

    textAreaCollection.forEach((element) => {
      element.addEventListener('keyup', () => {
        element.nextElementSibling.classList.add(HIDE_CLASS);
      })
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let hasInvalidInputs = [];

      hasInvalidInputs.push(...validateFormElements(inputsCollection));
      hasInvalidInputs.push(...validateFormElements(textAreaCollection));

      if (!hasInvalidInputs.length) {
        form.submit();
      }
    });
  });

  const init = () => {
    eventsHandler();
  }

  return {
    init,
  }
})();
