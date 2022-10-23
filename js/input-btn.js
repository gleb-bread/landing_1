document.addEventListener("DOMContentLoaded", function () {
    let btns = document.querySelectorAll('input[type="button"]');
    let btnLight = document.querySelector('.hero__btn__light > a > input');
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.transitionDuration = ".3s";
        btns[i].style.transitionProperty = "box-shadow, background";
        btns[i].onmouseenter = () => {
            if (!(btnLight == btns[i])) {
                btns[i].style.background = "rgb(226, 201, 110)";
            }
        }
        btns[i].onmouseout = () => {
            if (!(btnLight == btns[i])) {
                btns[i].style.background = "linear-gradient(-180deg, rgb(226, 201, 110) 0%, rgb(177, 137, 48) 96%)";
            }
        }
        btns[i].onmousedown = () => {
            btns[i].style.boxShadow = "inset 0px 0px 20px 10px rgba(0,0,0,.6)";
        }
        btns[i].onmouseup = () => {
            btns[i].style.boxShadow = "none";
        }

    }
})