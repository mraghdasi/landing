// drop box
import utility from '../utility/vendor.js';
let dropDownBoxs = utility.dropDownBoxs;

const dropDown = () => {
  if (dropDownBoxs && dropDownBoxs.length) {
    dropDownBoxs.forEach(function (dropDownClick) {
      dropDownClick.addEventListener('click', function (e) {
        this.classList.toggle('form__section-input-dropdown--border-radius');
        const selectedPlaceText = this.querySelector('li');
        const options = this.querySelectorAll('.dropdown__select li');
        options.forEach((option) => {
          option.addEventListener('click', () => {
            selectedPlaceText.innerText = option.textContent;
          });
        });
      });
    });
  }
};

export default dropDown;
