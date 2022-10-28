let formSubmit = document.getElementsByClassName('contact__form__action')[0];
let inputName = document.getElementsByClassName('contact__form__name__input')[0];
let inputMail = document.getElementsByClassName('contact__form__mail__input')[0];
let inputText = document.getElementsByClassName('contact__form__text')[0];
let submitForm = document.getElementsByClassName('contact__form__action')[0];
let errorTextName = document.getElementsByClassName('contact__form__name__error__text')[0];
let errorTextMail = document.getElementsByClassName('contact__form__mail__error__text')[0];
let errorElementName = document.getElementsByClassName('contact__form__name__error')[0];
let errorElementMail = document.getElementsByClassName('contact__form__mail__error')[0];
let mailErorIcon = document.querySelector('.contact__form__mail__error__icon > img');
let nameErorIcon = document.querySelector('.contact__form__name__error__icon > img');
let mailSuccessIcon = document.querySelector('.contact__form__mail__error__icon > svg');
let nameSuccessIcon = document.querySelector('.contact__form__name__error__icon > svg');
let resultOfInputs = [false, false];


var connect = angular.module('sendform', []);
connect.controller('app', function ($scope) {
    $scope.convertNameInput = function () {
        let name = $scope.username.split(' ').join('');
        if ($scope.username != "" || $scope.username != '') {
            name = name.toLowerCase();
            name = name.replace(/[^a-z\s]/gi, "");
            if (name[0] == /[^a-z\s]/gi) {
                name = name.replace(name[0], name[0].toUpperCase());
            }
            errorTextName.innerText = 'That\'s all right';
            nameErorIcon.style.display = 'none';
            nameSuccessIcon.style.display = 'block';
            errorElementName.style.color = 'green';
            resultOfInputs[0] = true;
            if (name.length < 3) {
                errorTextName.innerText = 'Please use only latinic, min.lenght 4';
                errorElementName.style.visibility = 'visible';
                nameSuccessIcon.style.display = 'none';
                nameErorIcon.style.display = 'block';
                errorElementName.style.color = 'red';
                resultOfInputs[0] = false;
            }

            inputName.value = name;
        }
    }

    submitForm.onsubmit = (event) => {
        for (let i = 0; i < resultOfInputs.length; i++) {
            if (resultOfInputs[i] == false) {
                event.preventDefault();
                break;
            }
        }
    }

    $scope.checkMail = function () {
        let mail = $scope.usermail;
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
        mailSuccessIcon.style.display = 'none';
        mailErorIcon.style.display = 'block';
        errorElementMail.style.visibility = 'visible';
        errorElementMail.style.color = 'red';
        errorTextMail.innerText = 'You have entered an incorrect email';
        resultOfInputs[1] = false;
        if (result == true) {
            errorTextMail.innerText = 'That\'s all right';
            mailErorIcon.style.display = 'none';
            mailSuccessIcon.style.display = 'block';
            errorElementMail.style.color = 'green';
            resultOfInputs[1] = true;
        }
    }
})
