import "./slider";
import modal from "./modules/modal";
import tabsParam from "./modules/tabs";
import forms from "./modules/forms";

window.addEventListener("DOMContentLoaded", () => {
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
    forms();
});
