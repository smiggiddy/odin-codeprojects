const name = document.querySelector('#name'),
      email = document.querySelector('#email'),
      password = document.querySelector('#password'),
      passwordConfirmation = document.querySelector('#password-confirmation')



passwordConfirmation.addEventListener('keyup', e => {
    if (password.value === e.target.value ) {
        console.log('they equal');
    } else {
        console.log('They don\'t equal');
    }
})
