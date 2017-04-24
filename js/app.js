/**
 * Selectors
 */
const iphoneImage = document.querySelector('.js-iphone-image');
const iphoneImageParent = iphoneImage.parentElement;

const mainImageDiv = document.querySelector('.main-image');
const navigationBar = document.querySelector('.navigation');

const hiddenTextNodes = document.querySelectorAll('.js-hidden-text');

// const windowHeight = document.documentElement.clientHeight

// console.dir(iphoneImageParent)
// console.log(windowWidth, windowHeight)
/**
 * Functions
 */

/**
 * Resizing IphoneImage
 */
function resizeIPhoneImageDesktop() {
    const spaceHeight = iphoneImageParent.offsetTop + iphoneImageParent.clientHeight;
    const iPhoneHeight = Math.min(spaceHeight*0.72, 874);
    iphoneImage.style.height = `${iPhoneHeight}px`;
    iphoneImage.style.width = 'auto';
}

function resizeIPhoneImage() {
    const windowWidth = document.documentElement.clientWidth

    if(windowWidth > 768) {
        resizeIPhoneImageDesktop();
    }

}

/**
 * Resizing NavigationBar height
 */
function resizeNavigationBarDesktop() {
    const mainImageHeight = mainImageDiv.clientHeight;
    navigationBar.style.height = `${Math.ceil(mainImageHeight * 14.75 / 100)}px`;
}

function resizeNavigationBar() {
    const mainImageHeight = mainImageDiv.clientHeight;
    const windowWidth = document.documentElement.clientWidth;

    if(windowWidth > 768) {
        resizeNavigationBarDesktop();
    }
}

/**
 * Animations
 */
function animateText() {
    hiddenTextNodes.forEach(node => {
        console.log(node);
        node.classList.add('js-show-text-box')});
  //console.log();
}



/**
 * Event listeners
 */

/**
 * Resizing iPhone image to fit the screen
 */
window.addEventListener('resize', resizeIPhoneImage);
document.addEventListener('DOMContentLoaded',  resizeIPhoneImage);

/**
 * Resize navigation bar
 */
window.addEventListener('resize', resizeNavigationBar);
document.addEventListener('DOMContentLoaded',  resizeNavigationBar);

/**
 * Animations
 */
document.addEventListener('DOMContentLoaded',  animateText);
//document.addEventListener('onmouseover', animateIcon)
