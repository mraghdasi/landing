import utility from '../utility/vendor.js';
import chngStyles from './mediaQuery.js';

const collapseRadioButtons = utility.collapseRadioButtons;

const collapse = () =>{
  if (collapseRadioButtons && collapseRadioButtons.length) {
    collapseRadioButtons.forEach((collapseRadioButton) => {
      collapseRadioButton.addEventListener('click', (e) => {
  
        const unCheckedRadioButtons = e.path[2].querySelectorAll('input');
        const parent = e.target.parentElement;
        const collapseLabel = parent.querySelector('label');
  
        parent.classList.add('collapse-section--border');
        parent.querySelector('.collapse-section__label__icon--arrow ellipse').setAttribute('fill', '#20C5BA');
        parent.querySelector('.collapse-section__label__icon--arrow path').setAttribute('stroke', '#fff');
        collapseLabel.style.borderBottom = 'none';
        chngStyles.changeStyle(undefined,collapseLabel, undefined, chngStyles.mediaQuery);
  
        unCheckedRadioButtons.forEach((unCheckedRadioButton) => {
          if (!unCheckedRadioButton.checked) {
            unCheckedRadioButton.parentElement.classList.remove('collapse-section--border');
            unCheckedRadioButton.parentElement.querySelector('.collapse-section__label__icon--arrow ellipse').setAttribute('fill', '#e7ecf4');
            unCheckedRadioButton.parentElement.querySelector('.collapse-section__label__icon--arrow path').setAttribute('stroke', '#9db0cb');
            unCheckedRadioButton.parentElement.querySelector('label').style.borderBottom = '1px solid #d8e1ef';
            if (parent.previousElementSibling) parent.previousElementSibling.querySelector('label').style.borderBottom = 'none';
  
            chngStyles.changeStyle(undefined,undefined, unCheckedRadioButton.parentElement.querySelector('label'), chngStyles.mediaQuery);
          }
        });
      });
    });
  }
}

export default collapse;