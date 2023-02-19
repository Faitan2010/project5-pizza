import {MobileMenu} from "./mobile.js";
import {Anchors} from "./anchor.js";

function Menu() {
    const mobMenu = new MobileMenu();
    const anchors = new Anchors();

    anchors.header.addEventListener('scroll', mobMenu.animateHeader);
}