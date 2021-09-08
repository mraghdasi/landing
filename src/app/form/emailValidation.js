import utility from '../../utility/vendor.js';
const emailInput = utility.emailInput;


// validate email
const validateEmail = (email) => {
  const dictionary = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let isValid = dictionary.test(String(email).toLowerCase());
  let message = '';
  if (isValid) {
    emailInput.classList.remove('form__signup-input--error');
  } else {
    emailInput.classList.add('form__signup-input--error');
    message = 'فرمت ایمیل نا معتبر است';
  }
  return {
    isValid,
    message,
  };
};

export default validateEmail;