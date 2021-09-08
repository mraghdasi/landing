const projectListTabs = document.querySelectorAll('[data-tab-target]');
const projectListTabContents = document.querySelectorAll('[data-tab-content]');
const collapseRadioButtons = document.querySelectorAll('input[name="rd"]');
const collapseLabels = document.querySelectorAll('.collapse-section__label');

const meetingStructureTabs = document.querySelectorAll('.meeting-structure__tab');
const meetingStructureTabContents = document.querySelectorAll('.meeting-structure__card');

const dropDownBoxs = document.querySelectorAll('.dropdown__filter');

//forms
const form = document.forms.form__signup;
const nameInput = document.querySelector('#form__signup__name');
const phoneInput = document.querySelector('#form__signup__phone');
const emailInput = document.querySelector('#form__signup__email');
const companyInput = document.querySelector('#form__signup__company');

const fileInputBoxs = document.querySelectorAll('.form__section-input-file');
const fileInputButtons = document.querySelectorAll('.form__section-input-file-btn');
const cvInput = document.querySelector('#form__signup__cv');
const cvFileLabel = document.querySelector('.form__section-input-file.cv .form__section__input-file-name');
const cvInputMessage = document.querySelector('.form__section-input-file.cv .form__section-input-file-msg');
const portfiloInput = document.querySelector('#form__signup__portfilo');
const portfiloFileLabel = document.querySelector('.form__section-input-file.portfilo .form__section__input-file-name');
const portfiloInputMessage = document.querySelector('.form__section-input-file.portfilo .form__section-input-file-msg');

const submitInput = document.querySelector('#form__signup__submit');
const dropdownCloudDegreeInput = document.querySelector('#form__signup__dropdown-value--cloud-degree');
const dropdownCloudTypeInput = document.querySelector('#form__signup__dropdown-value--cloud-type');
const dropdownListCloudTypes = document.querySelectorAll('.dropdown__select.cloud-type li');
const dropdownListCloudDegrees = document.querySelectorAll('.dropdown__select.cloud-degree li');

const formSuccessMessage = document.querySelector('.form__result-msg-success');
const formErrorMessage = document.querySelector('.form__result-msg-error');
const nameInputErrorMessage = document.querySelector('#form_signup__name-error-msg');
const phoneInputErrorMessage = document.querySelector('#form_signup__phone-error-msg');
const emailInputErrorMessage = document.querySelector('#form_signup__email-error-msg');
const allErrorMessages = document.querySelectorAll('.form_signup__error-msg');

// loader
const loader = document.querySelector('#form__section-footer-input-submit-loading');

// carousel
const carousel = document.querySelector("[data-target='carousel']");
const card = carousel.querySelector("[data-target='card']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");
const carouselWidth = carousel.offsetWidth;
const cardStyle = card.currentStyle || window.getComputedStyle(card);
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);
const cardCount = carousel.querySelectorAll("[data-target='card']").length;
let offset = 0;
const maxX = -((cardCount / 14) * carouselWidth + cardMarginRight * (cardCount / 14) - 94);

export default {
  carousel,
  maxX,
  allErrorMessages,
  dropdownCloudTypeInput,
  dropdownCloudDegreeInput,
  loader,
  projectListTabs,
  projectListTabContents,
  meetingStructureTabs,
  meetingStructureTabContents,
  collapseLabels,
  dropDownBoxs,
  nameInput,
  phoneInput,
  emailInput,
  companyInput,
  cvInput,
  portfiloInput,
  dropdownListCloudTypes,
  dropdownListCloudDegrees,
  form,
  leftButton,
  rightButton,
  collapseRadioButtons,
  submitInput,
  fileInputBoxs,
  fileInputButtons,
  cvFileLabel,
  portfiloFileLabel,
  cvInputMessage,
  portfiloInputMessage,
  nameInputErrorMessage,
  phoneInputErrorMessage,
  emailInputErrorMessage,
  formSuccessMessage,
  formErrorMessage,
  offset,
  carouselWidth,
  cardMarginRight,
};
