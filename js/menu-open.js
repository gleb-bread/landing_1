document.addEventListener("DOMContentLoaded", function () {
    let menuBtnOpen = document.getElementsByClassName('header__menu__btn')[0];
    let menu = document.getElementsByClassName('header')[0];
    let menuLogo = document.getElementsByClassName("header__menu__logo")[0];
    let menuList = document.getElementsByClassName("header__menu")[0];
    let menuBtnClose = document.getElementsByClassName("header__menu__btn-close")[0];
    menuBtnOpen.addEventListener("mousedown", function () {
        menu.style.background = "none";
        menuLogo.style.display = "none";
        menuBtnOpen.style.display = "none";
        menuList.style.width = document.documentElement.clientWidth * 0.5 + 'px';
        menuList.style.height = document.documentElement.clientHeight + 'px';
        menuList.style.display = "flex";
    });
    menuBtnClose.addEventListener("mousedown", function () {
        menu.style.background = "#FFF";
        menuLogo.style.display = "block";
        menuBtnOpen.style.display = "block";
        menuList.style.display = "none";
    });
});