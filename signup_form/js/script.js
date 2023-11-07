const name = document.querySelector('#name'),
      email = document.querySelector('#email'),
      password = document.querySelector('#password'),
      passwordConfirmation = document.querySelector('#password-confirmation'),
      formInputs = document.querySelectorAll('.form-input')

password.addEventListener('keyup', e => {
    let error = '*Password must be at least 8 characters!';
    let errorDiv = password.nextElementSibling;

    if (password.value.length < 8) {
        password.style.borderColor = "#EF6262";
        errorDiv.textContent = error;
    } else {
        password.style.borderColor = "";
        errorDiv.textContent = "";
    }
})

passwordConfirmation.addEventListener('keyup', e => {
    let error = '*Passwords do not match!';
    let errorDiv = passwordConfirmation.nextElementSibling;

    if (password.value !== e.target.value ) {
        passwordConfirmation.style.borderColor = "#EF6262";
        errorDiv.textContent = error;
    } else {
        passwordConfirmation.style.borderColor = "";
        errorDiv.textContent = "";
    }
});
