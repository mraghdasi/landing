import utility from '../../utility/vendor.js';

const fileInputBoxs = utility.fileInputBoxs,
  fileInputButtons = utility.fileInputButtons,
  form = utility.form,
  cvInput = utility.cvInput,
  cvFileLabel = utility.cvFileLabel,
  portfiloFileLabel = utility.portfiloFileLabel,
  allErrorMessages = utility.allErrorMessages,
  submitInput = utility.submitInput,
  portfiloInput = utility.portfiloInput;

// reset form
const resetForm = () => {
  fileInputBoxs.forEach((fileInputBox) => {
    fileInputBox.classList.remove('form__section-input-file--active');
  });

  fileInputButtons.forEach((fileInputButton) => {
    fileInputButton.classList.remove('form__section-input-file-btn--active');
  });

  allErrorMessages.forEach((allErrorMessage) => {
    allErrorMessage.innerText = '';
  });

  form.reset();
  cvInput.value = null;
  cvFileLabel.innerText = '';
  portfiloInput.value = null;
  portfiloFileLabel.innerText = 'اختیاری';
  submitInput.setAttribute('disabled', null);
  portfiloFileLabel.classList.remove('form__section__input-file-name--color-aqua');
};

export default resetForm;
