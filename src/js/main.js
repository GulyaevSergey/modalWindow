import {
    slider,
    modal,
    tabsParam,
    forms,
    changeModalState,
    timer,
} from "./modules/index";

window.addEventListener("DOMContentLoaded", () => {
    slider();
    const modalState = {};
    const deadline = "2024-04-02";

    changeModalState(modalState);
    modal();
    tabsParam({
        headerSelector: ".glazing_slider",
        tabSelector: ".glazing_block",
        contentSelector: ".glazing_content",
        activeClass: "active",
    });
    tabsParam({
        headerSelector: ".decoration_slider",
        tabSelector: ".no_click",
        contentSelector: ".decoration_content > div > div",
        activeClass: "after_click",
    });
    tabsParam({
        headerSelector: ".balcon_icons",
        tabSelector: ".balcon_icons_img",
        contentSelector: ".big_img > img",
        activeClass: "do_image_more",
        display: "inline-block",
    });
    forms(modalState);
    timer(".container1", deadline);
});
