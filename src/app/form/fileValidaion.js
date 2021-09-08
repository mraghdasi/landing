import utility from '../../utility/vendor.js';
const cvInputMessage = utility.cvInputMessage,
  portfiloInputMessage = utility.portfiloInputMessage,
  portfiloFileLabel = utility.portfiloFileLabel,
  fileInputBoxs = utility.fileInputBoxs,
  fileInputButtons = utility.fileInputButtons;

// validate file
const validateFile = (cvFile, portfilo) => {
  let maxFileSize = 1024 * 1024,
    cvFileSize = cvFile?.size,
    cvFileType = cvFile?.type,
    cvMessage = 'حداکثر حجم مجاز فایل 1 مگابایت است',
    cvIsValid = true,
  portfiloFileSize = portfilo?.size, portfiloFileType = portfilo?.type, portfiloMessage = 'حداکثر حجم مجاز فایل 1 مگابایت است', portfiloIsValid = true;

  if (cvFileType !== 'application/pdf') {
    cvMessage = 'فرمت فایل نامعتبر است';
    cvIsValid = false;
  } else if (cvFileSize > maxFileSize) {
    cvMessage = 'فایل بزرگتر از حد مجاز است';
    cvIsValid = false;
  }

  if (portfilo && portfiloFileType !== 'application/pdf') {
    portfiloMessage = 'فرمت فایل نامعتبر است';
    portfiloIsValid = false;
  } else if (portfilo && portfiloFileSize > maxFileSize) {
    portfiloMessage = 'فایل بزرگتر از حد مجاز است';
    portfiloIsValid = false;
  }

  if (cvIsValid) {
    cvInputMessage.classList.remove('form_signup__error-msg');
    fileInputBoxs[0].classList.remove('form__section-input-file--deactive');
    fileInputButtons[0].classList.remove('form__section-input-file-btn--deactive');
  } else {
    cvInputMessage.classList.add('form_signup__error-msg');
    fileInputBoxs[0].classList.add('form__section-input-file--deactive');
    fileInputButtons[0].classList.add('form__section-input-file-btn--deactive');
  }

  if (portfiloIsValid) {
    portfiloInputMessage.classList.remove('form_signup__error-msg');
    fileInputBoxs[1].classList.remove('form__section-input-file--deactive');
    fileInputButtons[1].classList.remove('form__section-input-file-btn--deactive');
    portfiloFileLabel.classList.remove('form_signup__error-msg');
  } else {
    portfiloInputMessage.classList.add('form_signup__error-msg');
    fileInputBoxs[1].classList.add('form__section-input-file--deactive');
    fileInputButtons[1].classList.add('form__section-input-file-btn--deactive');
    portfiloFileLabel.classList.add('form_signup__error-msg');
  }

  return {
    cvMessage,
    cvIsValid,
    portfiloMessage,
    portfiloIsValid,
  };
};

export default validateFile;
