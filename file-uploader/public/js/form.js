const usernameCheck = async (username) => {
    if (username.length > 0) {
        let res = await fetch(`/auth/username?username=${username}`);
        const data = await res.json();
        // return true if username is available
        return data.results === false;
    }
};

const emailCheck = async (email) => {
    if (email.length > 0) {
        let res = await fetch(`/auth/email?email=${email}`);
        const data = await res.json();
        return data.results === false;
    }
};

const isDataValid = async (e, callback) => {
    let test = await callback(e.target.value);
    test
        ? (e.target.style.border = '3px green solid')
        : (e.target.style.border = 'red solid 3px');
};

const passwordValid = () => {
    const password = document.querySelector('#password');
    const passwordConfirmation = document.querySelector(
        '#password-confirmation',
    );

    const passwordConfirmationCheck = (value) => {
        return password.value === value;
    };

    const passwordValidityCheck = (password) => {
        if (!/\d/.test(password)) return false;
        if (!/[\!@#%\^&\*\(\)\_\+\-=\[\]{}\|;':",\.\/\<\>\~\`]/.test(password))
            return false;
        if (password.length < 8) return false;

        return true;
    };
    password.addEventListener('input', (e) =>
        isDataValid(e, passwordValidityCheck),
    );
    passwordConfirmation.addEventListener('input', (e) =>
        isDataValid(e, passwordConfirmationCheck),
    );
};

const usernameInput = document.querySelector("input[name='username']");
usernameInput.addEventListener('input', (e) => isDataValid(e, usernameCheck));

const emailInput = document.querySelector("input[name='email']");
emailInput.addEventListener('input', (e) => isDataValid(e, emailCheck));

passwordValid();
