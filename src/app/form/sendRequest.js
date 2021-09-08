import utility from '../../utility/vendor.js';
import resetForm from './resetForm.js';

const formSuccessMessage = utility.formSuccessMessage,
formErrorMessage = utility.formErrorMessage,
loader = utility.loader,
form = utility.form;

const sendRequset = () => {
  let object = {
    rows: [
      {
        cells: [],
      },
    ],
  };

  let formData = new FormData(form);
  for (var pair of formData.entries()) {
    object.rows[0].cells.push({
      column: pair[0],
      value: pair[1],
    });
  }

  let myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer 2117bc9a-d74b-425b-bb22-f2d4dfabd835');
  myHeaders.append('Content-Type', 'application/json');

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(object),
  };

  fetch('https://coda.io/apis/v1/docs/ah9tBJlDzo/tables/grid-Jdw1cT7VOd/rows', requestOptions)
    .then((response) => {
      if (response.status === 202) {
        formSuccessMessage.innerText = 'پیام شما با موفقیت ارسال شد';
      } else {
        formErrorMessage.innerText = 'خطایی رخ داده است، لطفا مجدد تلاش کنید';
      }
      resetForm();
      loader.classList.remove('display');
      return response.text();
    })
    .then((result) => console.log(JSON.parse(result)))
    .catch((error) => console.log('error', error));
}

export default sendRequset;