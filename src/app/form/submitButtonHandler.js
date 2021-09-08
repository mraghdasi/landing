import utility from '../../utility/vendor.js';

const submitInput = utility.submitInput

// enable submit button
const enableSubmitBtn = (e) => {
  const requireTextElements = Array.from(document.querySelectorAll('input.require'));
  const requireFileElement = Array.from(document.querySelectorAll('input.require-cv-file'));

  let isChooseFile = requireFileElement.every((fileItem) => {
    return !!fileItem.files.length;
  });

  let isFilledText = requireTextElements.every((textItem) => {
    return !!(textItem.value.trim() !== '');
  });

  if (isFilledText && isChooseFile) {
    submitInput.removeAttribute('disabled');
    submitInput.classList.add('form__signup__submit--active');
  } else {
    submitInput.classList.remove('form__signup__submit--active');
    submitInput.setAttribute('disabled', null);
  }
};

const preventSubmitHandler = (e) => {
  if (e?.key === 'Enter') e.preventDefault();
};

const inputsKeyupHandler = (...args) => {
  let requireInput = [...args.slice(0, 3)];
  requireInput.forEach((arg) => {
    arg.addEventListener('keyup', enableSubmitBtn);
  });

  // prevent submit with enter
  args.forEach((arg) => {
    arg.addEventListener('keypress', preventSubmitHandler);
  });
};

export default {
  inputsKeyupHandler,
  enableSubmitBtn,
  
};