document.addEventListener("DOMContentLoaded", function () {
    let inputFooterInput = document.getElementsByClassName('footer__news__mail__input')[0];
    let errorTextMailFooter = document.getElementsByClassName('footer__news__mail__error__text')[0];
    let errorElementMailFooter = document.getElementsByClassName('footer__news__mail__error')[0];
    let mailFooterErrorIcon = document.querySelector('.footer__news__mail__error__icon > img');
    let mailFooterSuccessIcon = document.querySelector('.footer__news__mail__error__icon > svg');
    let footerForm = document.getElementsByClassName('footer__form__send-mail')[0];
    let result = false;

    checkFooterMail = function () {
        let mail = inputFooterInput.value;
        let Mails = ['mail.ru', 'yandex.ru', 'yandex.com', 'gmail.com'];
        let count = 0;
        let result = false;
        for (let i = 0; i < mail.length; i++) {
            if (mail[i] == '@') {
                count++;
            }
        }
        if ((count == 1)) {
            for (let i = 0; i < Mails.length; i++) {
                if ((mail.split('@')[1] == Mails[i])) {
                    result = true;
                    break;
                }
            }
        }
        mailFooterSuccessIcon.style.display = 'none';
        mailFooterErrorIcon.style.display = 'block';
        errorElementMailFooter.style.visibility = 'visible';
        errorElementMailFooter.style.color = 'red';
        errorTextMailFooter.innerText = 'You have entered an incorrect email';
        if (result == true) {
            errorTextMailFooter.innerText = 'That\'s all right';
            mailFooterErrorIcon.style.display = 'none';
            mailFooterSuccessIcon.style.display = 'block';
            errorElementMailFooter.style.color = 'green';
            result = true;
        }
    }
    footerForm.onsubmit = function () {
        if (result == false) {
            event.preventDefault();
        }
    }

});