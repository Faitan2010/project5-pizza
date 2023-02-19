export const Anchors = function () {
    this.header = document.querySelector('.header');
    this.headerHeight = this.header ? this.header.offsetHeight : 0;
    this.anchors = [...document.querySelectorAll('a[href^="#"]')];

    this.anchorsInit();
}

Anchors.prototype.handleClick = function (e) {
    e.preventDefault();

    this.target = e.target;
    this.anchor = this.target.getAttribute('href').replace('#', '');

    if (!this.anchor) {
        return
    }

    this.section = document.getElementById(this.anchor);

    if (!this.section) {
        return
    }

    this.sectionTop = this.section.getBoundingClientRect().top;
    this.offset = this.sectionTop + window.scrollY - this.headerHeight;

    window.scrollTo({
        top: this.offset,
        left: 0,
        behavior: "smooth"
    })
}

Anchors.prototype.anchorsInit = function () {
    for (let item of this.anchors) {
        item.addEventListener('click', this.handleClick.bind(this));
    }
}