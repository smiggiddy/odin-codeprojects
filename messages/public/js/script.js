function usernameValidation(username) {
  const errors = [];
  if (username.length < 5) {
    errors.push("*username must be at least 5 characters");
  }

  if (username.includes(" ")) {
    errors.push("*username must not contain any spaces");
  }

  return errors;
}

function checkStringForNumber(str) {
  for (i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) return true;
  }
  return false;
}

function checkStringForChar(str) {
  return /[!#%^,\.]/.test(str);
}

function passwordValidation(password) {
  const errors = [];

  if (password.length < 8) {
    errors.push("*password must be at least 8 characters");
  }

  if (!checkStringForNumber(password)) {
    errors.push("*password must include a number.");
  }
  if (!checkStringForChar(password)) {
    errors.push("*password must include a special character. !#%^,.");
  }

  return errors;
}

function formValidator() {
  const username = document.querySelector('input[name="username"]');
  const password = document.querySelector('input[name="password"]');
  const passwordConfirmation = document.querySelector(
    'input[name="password-confirmation"]',
  );

  if (username && password && passwordConfirmation) {
    username.addEventListener("keyup", () => {
      let errors = usernameValidation(username.value);
      let errorDiv = username.nextElementSibling;
      errorDiv.textContent = "";

      if (errors.length > 0) {
        errors.forEach((err) => {
          const p = document.createElement("p");
          p.textContent = err;
          errorDiv.appendChild(p);
        });
      } else {
        errorDiv.textContent = "";
      }
    });

    password.addEventListener("keyup", (e) => {
      let errorDiv = password.nextElementSibling;
      errorDiv.textContent = "";
      let errors = passwordValidation(e.target.value);

      if (errors.length > 0) {
        errors.forEach((err) => {
          const p = document.createElement("p");
          p.textContent = err;
          errorDiv.appendChild(p);
        });
      } else {
        errorDiv.textContent = "";
      }
    });

    passwordConfirmation.addEventListener("keyup", (e) => {
      let error = "*passwords do not match!";
      let errorDiv = passwordConfirmation.nextSibling;

      if (password.value !== e.target.value) {
        errorDiv.textContent = error;
      } else {
        errorDiv.textContent = "";
      }
    });
  }
}

function navProfileHover() {
  const profile = document.querySelector(".nav__profile");
  if (profile) {
    const profileHover = document.querySelector(".nav__hover");
    profile.addEventListener("mouseleave", () => {
      profileHover.classList.add("hidden");
    });
    profile.addEventListener("mouseenter", () => {
      profileHover.classList.remove("hidden");
    });
  }
}

navProfileHover();
formValidator();
