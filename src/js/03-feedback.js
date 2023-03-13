import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const localKey = 'feedback-form-state';

form.addEventListener(
  'input',
  throttle(evt => {
    const objectToSave = { email: email.value, message: message.value };
    localStorage.setItem(localKey, JSON.stringify(objectToSave));
  }, 500)
);

form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log({ email: email.value, message: message.value });
  form.reset();
  localStorage.removeItem(localKey);
});

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const storageData = load(localKey);
if (storageData) {
  email.value = storageData.email;
  message.value = storageData.message;
}
