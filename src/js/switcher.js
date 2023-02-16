export const Switcher = function () {
    

    this.toggleMods()
}


Switcher.prototype.toggleMods = function () {
    this.blackSwitcher = document.querySelector('#black-switcher');
    console.log(this.blackSwitcher);
    this.whiteSwitcher = document.querySelector('#white-switcher');
    console.log(this.whiteSwitcher);
    this.html = document.querySelector('.html');
    console.log(this.html);
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