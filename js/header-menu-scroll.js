document.addEventListener("DOMContentLoaded", function () {
    let menu = document.getElementsByClassName('header')[0];
    let clientWidth = document.documentElement.clientWidth;
    document.addEventListener("scroll", () => {
        if (clientWidth >= 769) {
            if (window.pageYOffset >= 30) {
                menu.style.transitionDuration = ".3s";
                menu.style.transitionProperty = "background-color";
                menu.style.backgroundColor = "#FFF";
            }
            else {
                menu.style.background = "none";
            }
        }
    })
})