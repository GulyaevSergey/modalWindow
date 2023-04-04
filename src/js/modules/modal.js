const modal = () => {
    function bindModal(
        triggerSelector,
        modalSelector,
        closeSelector,
        closeClickOverlay = true
    ) {
        const triggers = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const windows = document.querySelectorAll("[data-modal]");
        const scroll = calcScroll();

        const closeModal = () => {
            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        };

        triggers.forEach((trigger) => {
            trigger.addEventListener("click", (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                windows.forEach((window) => {
                    window.style.display = "none";
                });
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;

                close.focus();
            });
        });

        close.addEventListener("click", () => {
            windows.forEach((window) => {
                window.style.display = "none";
            });
            closeModal();
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach((window) => {
                    window.style.display = "none";
                });
                closeModal();
            }
        });

        window.addEventListener("keyup", (e) => {
            if (e.key === "Escape") {
                windows.forEach((window) => {
                    window.style.display = "none";
                });
                closeModal();
            }
        });
    }

    const showModalByTime = (selector, time) => {
        setTimeout(function () {
            document.querySelector(selector).style.display = "block";
            document.body.style.overflow = "hidden";
        }, time);
    };

    const calcScroll = () => {
        const div = document.createElement("div");
        div.style.width = "50px";
        div.style.height = "50px";
        div.style.overflowY = "scroll";
        div.style.visibility = "hidden";

        document.body.appendChild(div);
        const scrollWidth = div.offsetWidth - div.clientWidth;
        console.log(scrollWidth);
        div.remove();
        console.log(div);
        return scrollWidth;
    };

    bindModal(
        ".popup_engineer_btn",
        ".popup_engineer",
        ".popup_engineer .popup_close"
    );
    bindModal(".phone_link", ".popup", ".popup .popup_close");
    bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
    bindModal(
        ".popup_calc_button",
        ".popup_calc_profile",
        ".popup_calc_profile_close",
        false
    );
    bindModal(
        ".popup_calc_profile_button",
        ".popup_calc_end",
        ".popup_calc_end_close",
        false
    );

    showModalByTime(".popup", 60000);
};

export { modal };
