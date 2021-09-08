import utility from '../../utility/vendor.js';

const nameInputErrorMessage = utility.nameInputErrorMessage,
 phoneInputErrorMessage = utility.phoneInputErrorMessage,
 emailInputErrorMessage = utility.emailInputErrorMessage,
 cvInputMessage = utility.cvInputMessage,
 portfiloInputMessage = utility.portfiloInputMessage,
 portfiloInput = utility.portfiloInput,
 portfiloFileLabel = utility.portfiloFileLabel;

// show message
const showMessage = (message) => {
  nameInputErrorMessage.innerText = message.name;
  phoneInputErrorMessage.innerText = message.phone;
  emailInputErrorMessage.innerText = message.email;
  cvInputMessage.innerText = message.cvFile;
  portfiloInputMessage.innerText = message.portfiloFile;
  portfiloFileLabel.innerText = portfiloInput.value ? message.portfiloFileLabel : 'اختیاری';
};

export default showMessage;