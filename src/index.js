import tabSections from './app/tabList.js';
import utility from './utility/vendor.js';
import mediaQuery from './app/mediaQuery.js';
import dropDown from './app/dropDown.js';
import submitButtonHandler from './app/form/submitButtonHandler.js';
import collapse from './app/collapse.js';
import extractFileInputName from './app/form/fileInputHandler.js';
import validateName from './app/form/nameValidation.js';
import validatePhone from './app/form/phoneValidation.js';
import validateEmail from './app/form/emailValidation.js';
import validateFile from './app/form/fileValidaion.js';
import showMessage from './app/form/showMessage.js';
import sendRequset from './app/form/sendRequest.js';

const cvInput = utility.cvInput,
  portfiloInput = utility.portfiloInput,
  dropdownListCloudTypes = utility.dropdownListCloudTypes,
  dropdownListCloudDegrees = utility.dropdownListCloudDegrees,
  form = utility.form,
  cvFileLabel = utility.cvFileLabel,
  portfiloFileLabel = utility.portfiloFileLabel,
  leftButton = utility.leftButton,
  rightButton = utility.rightButton,
  projectListTabs = utility.projectListTabs,
  meetingStructureTabs = utility.meetingStructureTabs,
  meetingStructureTabContents = utility.meetingStructureTabContents,
  projectListTabContents = utility.projectListTabContents,
  collapseLabels = utility.collapseLabels,
  mediaQry = mediaQuery.mediaQuery,
  nameInput = utility.nameInput,
  phoneInput = utility.phoneInput,
  emailInput = utility.emailInput,
  companyInput = utility.companyInput,
  loader = utility.loader,
  carouselWidth = utility.carouselWidth,
  maxX = utility.maxX,
  carousel = utility.carousel,
  dropdownCloudTypeInput = utility.dropdownCloudTypeInput,
  dropdownCloudDegreeInput = utility.dropdownCloudDegreeInput,
  cardMarginRight = utility.cardMarginRight;

let offset = utility.offset;

tabSections(projectListTabs, projectListTabContents, meetingStructureTabs, meetingStructureTabContents);
window.addEventListener('resize', mediaQuery.changeStyle.bind(null, collapseLabels, undefined, undefined, mediaQry));
dropDown();
collapse();

// ************************* form *********************************//

submitButtonHandler.inputsKeyupHandler(nameInput, phoneInput, emailInput, companyInput);

// cv Input Handler
cvInput.addEventListener('change', (e) => {
  extractFileInputName(e.path, cvInput.value);
  submitButtonHandler.enableSubmitBtn();
});

// portfilo Input Handler
portfiloInput.addEventListener('change', (e) => {
  extractFileInputName(e.path, portfiloInput.value);
  e.path[1].querySelector('.form__section__input-file-name').classList.add('form__section__input-file-name--color-aqua');
});

// cloud type drowDown value
dropdownListCloudTypes.forEach((dropdownListCloudType) => {
  dropdownListCloudType.addEventListener('click', (e) => {
    dropdownCloudTypeInput.value = e.target.innerText;
  });
});

// cloud degree drowDown value
dropdownListCloudDegrees.forEach((dropdownListCloudDegree) => {
  dropdownListCloudDegree.addEventListener('click', (e) => {
    dropdownCloudDegreeInput.value = e.target.innerText;
  });
});

// submit form
form.addEventListener('submit', (e) => {
  e.preventDefault();

  let messages = {
    name: '',
    phone: '',
    email: '',
    cvFile: '',
    portfiloFile: '',
    portfiloFileLabel: '',
  };

  // validateFile(cvInput.files[0]);
  let nameValidationResult = validateName(nameInput.value);
  let phoneValidationResult = validatePhone(phoneInput.value);
  let emailValidationResult = validateEmail(emailInput.value);
  let fileValidationResult = validateFile(cvInput.value && cvInput.files[0], portfiloInput.value && portfiloInput.files[0]);

  if (!nameValidationResult.isValid || !phoneValidationResult.isValid || !emailValidationResult.isValid || !fileValidationResult.cvIsValid || !fileValidationResult.portfiloIsValid) {
    messages.name = nameValidationResult.message;
    messages.phone = phoneValidationResult.message;
    messages.email = emailValidationResult.message;
    messages.cvFile = fileValidationResult.cvMessage;
    messages.portfiloFile = fileValidationResult.portfiloMessage;

    if (!fileValidationResult.cvIsValid) {
      cvInput.value = null;
      cvFileLabel.innerText = '';
    }
    if (!fileValidationResult.portfiloIsValid) {
      portfiloInput.value = null;
      portfiloFileLabel.innerText = '';
    }

    showMessage(messages);
  } else {
    loader.classList.add('display');
    sendRequset();
  }
});

/********** carousel *****************/

// Left
leftButton.addEventListener('click', () => {
  if (offset !== 0) {
    offset += carouselWidth + cardMarginRight;
    carousel.style.transform = `translateX(${offset}px)`;
  }
});

// Right
rightButton.addEventListener('click', () => {
  if (offset !== maxX) {
    offset -= carouselWidth + cardMarginRight;
    carousel.style.transform = `translateX(${offset}px)`;
  }
});
