export const Switcher = function () {
    this.blackSwitcher = document.querySelector('#black-switcher');
    this.whiteSwitcher = document.querySelector('#white-switcher');

    this.setClickHandler(this.blackSwitcher);
    this.setClickHandler(this.whiteSwitcher);
}

Switcher.prototype.setClickHandler = function (elem) {
    if (!elem) {
        return;
    }

    elem.addEventListener('click', this.clickHandler);
}

Switcher.prototype.clickHandler = function (e) {
    document.documentElement.classList.toggle('dark');
}