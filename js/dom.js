const eyeIcon = document.querySelector('#eye-icon');
const passwordInput = document.querySelector('#fourth-input');

eyeIcon.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    eyeIcon.classList.toggle('bi-eye');
    eyeIcon.classList.toggle('bi-eye-slash');
});
