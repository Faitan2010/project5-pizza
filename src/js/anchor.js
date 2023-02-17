export const Anchors = function() {
    this.AnchorButton()
}

Anchors.prototype.AnchorButton = function() {
    this.anchors = [...document.querySelectorAll('a[href^="#"]')];
    console.log(this.anchors)
    for( let e of this.anchors ) {
        e.addEventListener('click', (e)=>{
            const target = e.target;
        const anchor = target.getAttribute('href').replace('#').slice(9);
        if (!anchor) {
            return
        }
        const section = document.getElementById(anchor)
        if (!section) {
            return
        }
        console.log(section);
        section.scrollTo({behavior: "smooth"})
    })
    }
}