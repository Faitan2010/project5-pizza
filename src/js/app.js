import { Anchors } from "./anchor.js";
import { Menu } from "./menu.js";
import { Switcher } from "./switcher.js";

document.addEventListener("DOMContentLoaded", function(event) { 
    new Switcher();
    new Anchors();
    new Menu()
  });
