import { loginpage } from './components/login.js';
const login = document.querySelectorAll('.login');

login.forEach((btn) => {
    btn.addEventListener('click', () => {
        loginpage();
    });
})


