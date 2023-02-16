import { MobileMenu } from "./mobile.js";
import { Switcher } from "./switcher.js";

document.addEventListener("DOMContentLoaded", function(event) { 
    new Switcher();
    new MobileMenu()
  });
