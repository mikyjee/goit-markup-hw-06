(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
        burgerBtn: document.querySelector("#toggleButton"),
        mobMenu: document.querySelector("#mob-menu"),
    };

    // Модальне вікно (Order Service)
    if (refs.openModalBtn && refs.closeModalBtn && refs.modal) {
        refs.openModalBtn.addEventListener("click", toggleModal);
        refs.closeModalBtn.addEventListener("click", toggleModal);
    }

    function toggleModal() {
        refs.modal.classList.toggle("is-open");
    }

    // Мобільне меню (бургер кнопка)
    if (refs.burgerBtn && refs.mobMenu) {
        refs.burgerBtn.addEventListener("click", () => {
            refs.mobMenu.classList.toggle("is-open-mob");
        });

        // Закриття моб. меню по хрестику
        const closeBtn = document.querySelector("#close-btn");
        if (closeBtn) {
            closeBtn.addEventListener("click", () => {
                refs.mobMenu.classList.remove("is-open-mob");
            });
        }
    }
})();