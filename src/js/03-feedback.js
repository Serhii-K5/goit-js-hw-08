import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const localKey = 'feedback-form-state';

form.addEventListener('input', throttle(evt => {
    const storedValue = { email: email.value, message: message.value };
    localStorage.setItem(localKey, JSON.stringify(storedValue));
  }, 500)
);

form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log({ email: email.value, message: message.value });
  form.reset();
  localStorage.removeItem(localKey);
});

function fn(storedValue) {
  try {
    if (storedValue !== null) {
      const parseValue = JSON.parse(storedValue);
      email.value = parseValue.email;
      message.value = parseValue.message;
    }
  } catch (err) {
    console.error('Get state error: ', err.message);
  }
};

fn(localStorage.getItem(localKey));
