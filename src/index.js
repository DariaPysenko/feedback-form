import './sass/main.scss';
import throttle from 'lodash.throttle';
import { Notify } from 'notiflix/build/notiflix-notify-aio';



const STORAGE_KEY = 'feedback-msg';
const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));



populateTextarea()

function onFormSubmit(e) {
    e.preventDefault();
    if (refs.input.value ==="" || refs.textarea.value === "") {
    return  Notify.failure('Please, fill all the fields! Thanks');
   
  }

    Notify.info("Thank you for Feedback!");
    
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
    
    
}

function onFormInput(e) {
  
    const message = e.target.value.trim();
    localStorage.setItem(STORAGE_KEY,message)
}

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        console.log(savedMessage)
        refs.textarea.value = savedMessage;
    }
  
}

// refs.form.addEventListener('input',throttle(onFormInput, 500), e => {
//     formData[e.target.name] = e.target.value.trim();
//     console.log(formData);
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// })