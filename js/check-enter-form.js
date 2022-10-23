document.addEventListener("DOMContentLoaded", function () {
    let inputName = document.getElementsByClassName('contact__form__name__input')[0];
    let inputMail = document.getElementsByClassName('contact__form__mail__input')[0];
    let footerMailInput = document.getElementsByClassName('footer__news__mail__input')[0];
    let errorName = document.getElementsByClassName('contact__form__name__error')[0];
    let errorMail = document.getElementsByClassName('contact__form__mail__error')[0];
    let footerErrorMail = document.getElementsByClassName('footer__news__mail__error')[0];
    inputName.onkeyup = () => {
        if (inputName.value == '') {
            errorName.style.visibility = "visible";
        } else {
            errorName.style.visibility = "hidden";
        }
    }
    inputMail.onkeyup = () => {
        if (inputMail.value == '') {
            errorMail.style.visibility = "visible";
        } else {
            errorMail.style.visibility = "hidden";
        }
    }
    footerMailInput.onkeyup = () => {
        if (footerMailInput.value == '') {
            footerErrorMail.style.visibility = "visible";
        } else {
            footerErrorMail.style.visibility = "hidden";
        }
    }
})