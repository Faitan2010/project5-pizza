export const Switcher = function () {
    

    this.toggleMods()
}


Switcher.prototype.toggleMods = function () {
    this.blackSwitcher = document.querySelector('#black-switcher');
    this.whiteSwitcher = document.querySelector('#white-switcher');
    this.html = document.querySelector('.html');
    const _this = this;
    
        if (_this.blackSwitcher) {
            _this.blackSwitcher.addEventListener('click', (e) => {
            _this.html.classList.toggle('dark')
            })
        }
        if(_this.whiteSwitcher) {
            _this.whiteSwitcher.addEventListener('click', (e) => {
                _this.html.classList.toggle('dark')
            })
        }
}