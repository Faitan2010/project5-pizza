
export const MobileMenu = function () {
    this.headerMenu = document.querySelector('.header-info');
    this.headerOnMobile = document.querySelector('.header-on-mobile');
    this.menu = document.querySelector('.menu-icon');
    this.header = document.querySelector('.menu-header');
    this.prevScrollValue = window.scrollY;



    this.animateHeader()
    this.changeBurger()
}

    MobileMenu.prototype.animateHeaderHandler = function() {
        if (this.prevScrollValue < window.scrollY) {

            if (!this.headerMenu.classList.contains('header-animate')) {
                this.headerMenu.classList.add('header-animate');
                this.headerOnMobile.classList.add('active');
                document.documentElement.classList.add('active')
            }
        } else {
    
            if (this.headerMenu.classList.contains('header-animate')) {
                this.headerMenu.classList.remove('header-animate');
                this.headerOnMobile.classList.remove('active')
                document.documentElement.classList.remove('active')
            }
        }
    
        this.prevScrollValue = window.scrollY;
    }


    MobileMenu.prototype.animateHeader = function() {
        if (window.innerWidth <= 768) {
            window.addEventListener('scroll', this.animateHeaderHandler.bind(this))
        }
    }

    MobileMenu.prototype.changeBurger = function() {
        this.menu.addEventListener('click', this.headerHandler.bind(this))
    }

    MobileMenu.prototype.headerHandler = function() {
        this.header.classList.toggle('active');
        document.body.classList.toggle('overflow-hidden')
    }

  