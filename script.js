const form = document.querySelector('form');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

const checkValidity = (input) => {
  if (input.validity.valueMissing || input.validity.patternMismatch) {
    input.parentElement.classList.add('has-error');
    input.classList.add('input-error');
  } else {
    input.parentElement.classList.remove('has-error');
    input.classList.remove('input-error');
  }
};

firstNameInput.addEventListener('invalid', () => {
  checkValidity(firstNameInput);
});

lastNameInput.addEventListener('invalid', () => {
  checkValidity(lastNameInput);
});

emailInput.addEventListener('invalid', () => {
  console.log('emailInput invalid');
  checkValidity(emailInput);
});

passwordInput.addEventListener('invalid', () => {
  console.log('passwordInput invalid');
  checkValidity(passwordInput);
});

/* Input events */

firstNameInput.addEventListener('input', () => {
  checkValidity(firstNameInput);
});

lastNameInput.addEventListener('input', () => {
  checkValidity(lastNameInput);
});

emailInput.addEventListener('input', () => {
  checkValidity(emailInput);
});

passwordInput.addEventListener('input', () => {
  checkValidity(passwordInput);
});

