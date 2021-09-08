// media query 
const mediaQuery = window.matchMedia('(max-width: 850px)');
const changeStyle = (elements, element1, element2, mediaQuery) => {
  if (mediaQuery.matches) {
    if (elements?.length) {
      elements.forEach((item) => {
        if(!item.parentElement.querySelector('input').checked){
          item.style.backgroundColor = '#E7ECF4';
        }
      });
    }

    if (element1) element1.style.backgroundColor = 'transparent';
    if (element2) element2.style.backgroundColor = '#E7ECF4';
  } else  {
    if (elements?.length) {
      elements.forEach((item) => {
        item.style.backgroundColor = 'transparent';
      });
    }
  }
};

export default {
  mediaQuery,
  changeStyle
}