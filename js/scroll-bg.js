document.addEventListener("DOMContentLoaded", function () {
    let stollDif = -1;
    let linkBackground = document.getElementsByClassName('big__link__container')[0];
    let linkBackground1 = document.getElementsByClassName('big__link__container')[1];
    document.addEventListener("scroll", () => {
        let scroll = window.pageYOffset;
        if (scroll >= stollDif) {
            let backgroundPosY = Number(window.getComputedStyle(linkBackground).backgroundPositionY.split(',')[0].split('%')[0]);
            if (backgroundPosY < 100) {
                linkBackground.style.backgroundPositionY = backgroundPosY + 0.3 + "%";
                linkBackground1.style.backgroundPositionY = backgroundPosY + 0.3 + "%";
            }
        }
        else {
            let backgroundPosY = Number(window.getComputedStyle(linkBackground).backgroundPositionY.split(',')[0].split('%')[0]);
            if (backgroundPosY > 0) {
                linkBackground.style.backgroundPositionY = backgroundPosY - 0.3 + "%";
                linkBackground1.style.backgroundPositionY = backgroundPosY - 0.3 + "%";
            }
        }
        stollDif = window.pageYOffset;
    });
});