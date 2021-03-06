'use strict';

const designBlockElem = document.querySelector('.design-block');
const modalElem = document.querySelector('.modal');

const openModal = () => {

  modalElem.classList.remove('hidden');
  disabledScroll();

};

const closeModal = () => {

  modalElem.classList.add('hidden');
  enabledScroll();
  
};

designBlockElem.addEventListener('click', event => {
  
  const target = event.target;

  if (target.matches('.more')) {
    openModal();
  }

});

modalElem.addEventListener('click', (event) => {
  
  const target = event.target;

  if (target.classList.contains('overlay') ||
      target.classList.contains('modal__close')) {
    closeModal();
  }

})