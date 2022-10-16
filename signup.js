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


const patternName = /^[a-zA-Z]{1,30}$/;
const emailPattern = /^([a-zA-z\d\.-]+)@([a-zA-Z\d\.-]+)\.([a-z]{2,10})(\.[a-z]{2,10})?$/;
const passwordPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;


firstName.addEventListener('keyup', e => {
    form.firstName.classList.remove('error');
    form.firstName.classList.remove('success');


    if (patternName.test(e.target.value)) {
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

    if (patternName.test(e.target.value)) {
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

    if (emailPattern.test(e.target.value)) {
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

    if (passwordPattern.test(e.target.value)) {
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


    if (patternName.test(form.firstName.value) && patternName.test(form.lastName.value) && emailPattern.test(form.email.value) && passwordPattern.test(form.password.value)) {
        popup.style.display = 'block';
    };

});




close.addEventListener('click', () => {
    popup.style.display = 'block';

});

popup.addEventListener('click', e => {
    popup.style.display = 'none';

});