const form = document.querySelector('.signup-form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');


const fnameHelper = document.querySelector('p.firstName');
const lnameHelper = document.querySelector('p.lastName');
const emailHelper = document.querySelector('p.email');
const passwordHelper = document.querySelector('ul.password-requirements');

const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.close-popup');


//RegEx test to allow input to container characters a to z in both lower and uppercase
//and allow the input to be between no less than 1 and no more than 30 characters
const nameRegexTest = /^[a-zA-Z]{1,30}$/;

//Regex Testing for email
//first section for name: essentially allows any character
//next requires @ symbol
//follwed by domain which also allows any character or symbol
//followed by . (dot) symbol
//followed by extension which allows any charcter or symbol but requires it to be bwtween 2-10 char
//followed by optional extention that follows same requirements as primary extention
const emailRegExTest = /^([a-zA-z\d\.-]+)@([a-zA-Z\d\.-]+)\.([a-z]{2,10})(\.[a-z]{2,10})?$/;

//Regest Testing for password that requires
//at least one lowercase letter, one Uppercase letter, one digit, one specioal character
//and be ATLEAST 8 characters
const passwordRegExTest = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;


firstName.addEventListener('keyup', e => {
    form.firstName.classList.remove('error');
    form.firstName.classList.remove('success');


    if (nameRegexTest.test(e.target.value)) {
        form.firstName.classList.remove('error');
        form.firstName.classList.add('success');
        fnameHelper.style.display = 'none';

    } else {

        if (!e.target.value) {
            fnameHelper.style.display = 'none';
        }

    if (e.target.value) {
        form.firstName.classList.remove('success');
        form.firstName.classList.add('error');
        fnameHelper.style.display = 'block';
        fnameHelper.textContent = 'Name cannot contain numbers or special characters';
    }
    
    }
})

lastName.addEventListener('keyup', e => {
    form.lastName.classList.remove('error');
    form.lastName.classList.remove('success');

    if (nameRegexTest.test(e.target.value)) {
        form.lastName.classList.remove('error');
        form.lastName.classList.add('success');
        lnameHelper.style.display = 'none';

    } else {

        if (!e.target.value) {
            lnameHelper.style.display = 'none';
        }

        if (e.target.value) {
            form.lastName.classList.remove('success');
            form.lastName.classList.add('error');
            lnameHelper.style.display = 'block';
            lnameHelper.textContent = 'Name cannot contain numbers or special characters';
        }
    }
});

email.addEventListener('keyup', e => {
    form.email.classList.remove('error');
    form.email.classList.remove('success');

    if (emailRegExTest.test(e.target.value)) {
        form.email.classList.remove('error');
        form.email.classList.add('success');
    } else {

        // if (!e.target.value) {
        //     emailHelper.style.display = 'none';
        // }

        if (e.target.value) {
            form.email.classList.remove('success');
            form.email.classList.add('error');
            // emailHelper.style.display = 'block';
            // emailHelper.textContent = 'Email must include your name, domain, and extension';
        }
    }
});

password.addEventListener('keyup', e => {
    form.password.classList.remove('error');
    form.password.classList.remove('success');

    if (passwordRegExTest.test(e.target.value)) {
        form.password.classList.remove('error');
        form.password.classList.add('success');
        passwordHelper.style.display = 'none';

    } else {

        if (!e.target.value) {
            passwordHelper.style.display = 'none';
        }

        if (e.target.value) {
            form.password.classList.remove('success');
            form.password.classList.add('error');
            passwordHelper.style.display = 'flex';
        }
    }
});


form.addEventListener('submit', e => {
    e.preventDefault();


    if (nameRegexTest.test(form.firstName.value) && nameRegexTest.test(form.lastName.value) && emailRegExTest.test(form.email.value) && passwordRegExTest.test(form.password.value)) {
        popup.style.display = 'block';
    };

});


close.addEventListener('click', () => {
    popup.style.display = 'block';

});

popup.addEventListener('click', e => {
    popup.style.display = 'none';

});
const showPwBtn = document.querySelector('#show-pw')
const showPwIcon = showPwBtn.querySelector('img')
const pwInput = document.querySelector('#password')

showPwBtn.addEventListener('click', () => {
    // password.type = password.type === 'password' 
    //     ? 'text' 
    //     : 'password'

        if (password.type === 'password') {
            password.type = 'text'
        } else {
            password.type = 'password';
        }

    // showPwIcon.src = showPwIcon.src.includes('open') 
    //     ? 'images/eye_closed.svg' 
    //     : 'images/eye_open.svg'
        if (showPwIcon.src.includes('open')) {
            showPwIcon.src = 'images/eye_closed.svg'; 
        } else {
            showPwIcon.src = 'images/eye_open.svg'; 
        }
})


























