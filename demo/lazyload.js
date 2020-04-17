function lazyLoad() {
    let lazyImg = document.querySelectorAll('img[src][data-src]');
    let i = 0;
    let n = lazyImg.length
    let windowHeight = window.innerHeight;
    for (i; i < n; i++) {
        let boundingClientRect = lazyImg[i].getBoundingClientRect();
        if (lazyImg[i].hasAttribute("data-src") && boundingClientRect.top < windowHeight) {
            lazyImg[i].setAttribute("src", lazyImg[i].getAttribute("data-src"));
            lazyImg[i].removeAttribute("data-src");
        }
    }
}

document.addEventListener('scroll', lazyLoad);
window.addEventListener('load', lazyLoad);
window.addEventListener('resize', lazyLoad);