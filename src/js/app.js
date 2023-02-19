import { Anchors } from "./anchor.js";
import { Menu } from "./menu.js";
import { MobileMenu } from "./mobile.js";
import { Switcher } from "./switcher.js";

document.addEventListener("DOMContentLoaded", function(event) { 
    new Switcher();
    new MobileMenu();
    new Anchors();
    new Menu()
  });
