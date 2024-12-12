document.getElementById('form');
const fullname_input = document.getElementById('fullName-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');

form.addEventListener('submit', (e) => {
  let errors = signUpErrors(
    fullname_input.value.trim(),
    email_input.value.trim(),
    password_input.value.trim()
  );

  if (errors.length > 0) {
    e.preventDefault(); 
  }
});

function signUpErrors(fullName, email, password) {
  let errors = [];

 
  clearError(fullname_input);
  clearError(email_input);
  clearError(password_input);

 
  if (fullName === '' || fullName == null) {
    setError(fullname_input, 'Full Name is required');
    errors.push('Full Name is required');
  }

 
  if (email === '' || email == null) {
    setError(email_input, 'Email is required');
    errors.push('Email is required');
  }

 
  if (password === '' || password == null) {
    setError(password_input, 'Password is required');
    errors.push('Password is required');
  } else if (password.length < 8) {
    setError(password_input, 'Password must have at least 8 characters');
    errors.push('Password must have at least 8 characters');
  }

  return errors; 
}


function setError(input, message) {
  const errorSpan = input.parentElement.querySelector('.error-message');
  errorSpan.innerText = message;
  errorSpan.style.visibility = 'visible';
}

function clearError(input) {
  const errorSpan = input.parentElement.querySelector('.error-message');
  errorSpan.innerText = '';
  errorSpan.style.visibility = 'hidden';
}


[fullname_input, email_input, password_input].forEach((input) => {
  input.addEventListener('input', () => {
    clearError(input);
  });
});


