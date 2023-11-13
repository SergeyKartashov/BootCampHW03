document.addEventListener("DOMContentLoaded", function () {
    // Мобильное меню
    const headerMobileButton = document.querySelector(".header__mobile-button");
    const mobuleMenu = document.querySelector(".mobile-menu");
    const headerBurgerIcon = document.querySelector(".header__burger-icon");
    const headerCloseIcon = document.querySelector(".header__close-icon");
    const body = document.querySelector("body");

    const classVisible = "visible"
    const classHidden = "hidden"

    function doClose() {
        // Обработка при закрытии мобильного меню
        mobuleMenu.classList.remove(classVisible);
        headerBurgerIcon.classList.add(classVisible);
        headerCloseIcon.classList.remove(classVisible);
        body.classList.remove(classHidden);
    }

    function doShow() {
        // обработка при открытии мобильного меню
        mobuleMenu.classList.add(classVisible);
        headerBurgerIcon.classList.remove(classVisible);
        headerCloseIcon.classList.add(classVisible);
        body.classList.add(classHidden);
    }

    headerMobileButton.addEventListener("click", function () {
        // Собитие click элемента mobile-button в заголовке макета
        if (mobuleMenu.classList.contains(classVisible)) {
            doClose();
        }
        else {
            doShow();
        }
    })
})