const btnAdd = document.querySelector('.btn-add');
const overlayModal= document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const modalForm = document.querySelector('.wrapper-add');


btnAdd.addEventListener('click', () => {
    overlayModal.classList.add('visible');
});

overlayModal.addEventListener('click', ()=>{
    overlayModal.classList.remove('visible');
});

btnClose.addEventListener('click', ()=> {
    overlayModal.classList.remove('visible');
});
modalForm.addEventListener('click', event => {
    event.stopImmediatePropagation();
});


