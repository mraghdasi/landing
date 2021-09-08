import utility from '../../utility/vendor.js';
const phoneInput = utility.phoneInput;

// validate phone
const validatePhone = (phone) => {
  const dictionary = /^09\d{9}$/;
  let isValid = dictionary.test(String(phone).toLowerCase());
  let message = '';
  if (isValid) {
    phoneInput.classList.remove('form__signup-input--error');
  } else {
    phoneInput.classList.add('form__signup-input--error');
    message = 'فرمت شماره تلفن نامعتبر است';
  }
  return {
    isValid,
    message,
  };
};

export default validatePhone;