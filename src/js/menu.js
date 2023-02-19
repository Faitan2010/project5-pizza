import {MobileMenu} from "./mobile.js";
import {Anchors} from "./anchor.js";

export const Menu = function() {
    this.mobMenu = new MobileMenu();
    this.anchors = new Anchors();

    this.joinAnchorWithMobile()
}

    Menu.prototype.joinAnchorWithMobile = function() {
        if(this.mobMenu.header.classList.contains('active')) {
            this.anchors.anchorsInit();
            this.anchors.anchors.forEach((item) => {
                item.addEventListener('click', this.handleClicks.bind(this))
            })
        }
    }



    Menu.prototype.handleClicks = function() {
        document.body.classList.toggle('overflow-hidden');
        this.mobMenu.header.classList.toggle('active');
        this.anchors.handleClick();
    }
