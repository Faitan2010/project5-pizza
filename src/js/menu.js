import {MobileMenu} from "./mobile.js";
import {Anchors} from "./anchor.js";

export const Menu = function() {
    this.mobMenu = new MobileMenu();
    this.anchors = new Anchors();

    this.joinAnchorWithMobile()
}

    Menu.prototype.joinAnchorWithMobile = function() {
        this.anchors.anchorsInit();
        this.anchors.anchors.forEach((item) => {
            item.addEventListener('click', this.handleClicks.bind(this))
        })
    }



    Menu.prototype.handleClicks = function(e) {
        this.anchors.handleClick(e);
        setTimeout(() => {
            this.mobMenu.headerHandler()
        }, 300)
    }
