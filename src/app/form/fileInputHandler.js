import utility from '../../utility/vendor.js';

// active input file Box
const activeFileInputBox = (thisElement, inputFileBoxClassName, inputFileBtnClassName) => {
  const inputFileBox = thisElement.length && thisElement[1];
  const inputFileBtn = thisElement.length && thisElement[1].querySelector('.form__section-input-file-btn');

  inputFileBox.classList.add(inputFileBoxClassName);
  inputFileBtn.classList.add(inputFileBtnClassName);
};

// extract input file name
const extractFileInputName = (thisElement, value) => {
  const inputFileNameLabel = thisElement[1].querySelector('.form__section__input-file-name');
  let filename = null;
  if (value) {
    let startIndex = value.indexOf('\\') >= 0 ? value.lastIndexOf('\\') : value.lastIndexOf('/');
    filename = value.substring(startIndex);
    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
      filename = filename.substring(1);
    }
  }

  if (filename) {
    utility.fileInputBoxs[0].classList.remove('form__section-input-file--deactive');
    utility.fileInputButtons[0].classList.remove('form__section-input-file-btn--deactive');
    activeFileInputBox(thisElement, 'form__section-input-file--active', 'form__section-input-file-btn--active');
    inputFileNameLabel.innerText = filename;
  } else {
    inputFileNameLabel.innerText = 'فایل باید حاوی نام باشد';
  }
};

export default extractFileInputName;