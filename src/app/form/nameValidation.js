import utility from '../../utility/vendor.js';
const nameInput = utility.nameInput;

// validate name
const validateName = (name) => {
  let isValid = !!(name.trim() !== '');
  let message = '';
  if (isValid) {
    nameInput.classList.remove('form__signup-input--error');
  } else {
    nameInput.classList.add('form__signup-input--error');
    message = 'نام و نام خانوادگی را وارد کنید';
  }
  return {
    isValid,
    message,
  };
};

export default validateName;