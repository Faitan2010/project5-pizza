
export const MobileMenu = function () {
    this.animateHeader()
    this.changeBurger()
}



    MobileMenu.prototype.animateHeader = function() {
        this.headerMenu = document.querySelector('.header-info');
        this.headerOnMobile = document.querySelector('.header-on-mobile');
        this.html = document.querySelector('.html');
        if (window.innerWidth <= 768) {
            let prevScrollValue = window.scrollY;
            window.addEventListener('scroll', (e) => {
                if (prevScrollValue < window.scrollY) {

                    if (!headerMenu.classList.contains('header-animate')) {
                        headerMenu.classList.add('header-animate');
                        headerOnMobile.classList.add('active');
                        html.classList.add('active')
                    }
                } else {
            
                    if (headerMenu.classList.contains('header-animate')) {
                        headerMenu.classList.remove('header-animate');
                        headerOnMobile.classList.remove('active')
                        html.classList.remove('active')
                    }
                }
            
                prevScrollValue = window.scrollY;
            });
        }
    }

    MobileMenu.prototype.changeBurger = function() {
        this.menu = document.querySelector('.menu-icon');
        this.header = document.querySelector('.menu-header');

        this.menu.addEventListener('click', (e) => {
            this.header.classList.toggle('active');
        })
    }

  