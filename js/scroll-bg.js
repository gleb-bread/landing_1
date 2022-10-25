document.addEventListener("DOMContentLoaded", function () {
    let startScroll = 0;
    let linkBackground = document.getElementsByClassName('big__link__container')[0];
    let linkBackground1 = document.getElementsByClassName('big__link__container')[1];
    document.addEventListener("scroll", () => {
        let scroll = window.pageYOffset;
        if (scroll - startScroll > 0) {
            srcollingBackgroundUp(linkBackground);
            srcollingBackgroundUp(linkBackground1);
        } else {
            srcollingBackgroundDown(linkBackground);
            srcollingBackgroundDown(linkBackground1);
        }
        startScroll = window.pageYOffset;
    });

    function returnX(width) {
        return (width >= 1025) ? 0.4 : (width >= 768) ? 1 : (width >= 320) ? 2 : 0;
    }

    function srcollingBackgroundUp(elBackground) {
        let visibleHeight = document.documentElement.clientHeight;
        if (elBackground.getBoundingClientRect().top <= visibleHeight) {
            let coof = returnX(document.documentElement.clientWidth);
            let backgroundPosY = Number(window.getComputedStyle(elBackground).backgroundPositionY.split(',')[0].split('%')[0]);
            elBackground.style.backgroundPositionY = backgroundPosY + coof + "%";
            elBackground.style.backgroundPositionY = backgroundPosY + coof + "%";
        }
    }
    function srcollingBackgroundDown(elBackground) {
        if (elBackground.getBoundingClientRect().bottom + 50 >= 0) {
            let coof = returnX(document.documentElement.clientWidth);
            let backgroundPosY = Number(window.getComputedStyle(elBackground).backgroundPositionY.split(',')[0].split('%')[0]);
            elBackground.style.backgroundPositionY = backgroundPosY - coof + "%";
            elBackground.style.backgroundPositionY = backgroundPosY - coof + "%";
        }
    }
});