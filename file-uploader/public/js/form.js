console.log('form stuff');

const usernameCheck = async (username) => {
    let res = await fetch(`/auth/username?username=${username}`);
    return await res.json();
};

const input = document.querySelector("input[name='username']");

input.addEventListener('input', async (e) => {
    let input = e.target.value;
    let test = await usernameCheck(input);
    test.results ? console.log('user exists') : console.log('user doesnt');
});
