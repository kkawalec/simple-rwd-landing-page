/**
 * Selectors
 */
const iphoneImage = document.querySelector('.js-iphone-image');
const iphoneImageParent = iphoneImage.parentElement;

/**
 * Functions
 */
function resizeIPhoneImage() {
    const spaceHeight = iphoneImageParent.offsetTop + iphoneImageParent.clientHeight
    console.dir(iphoneImage)
    const iPhoneHeight = Math.min(spaceHeight*0.72, 874);
    iphoneImage.style.height = `${iPhoneHeight}px`;
    iphoneImage.style.width = 'auto'
}

/**
 * Event listeners
 */

/**
 * Resizing iPhone image to fit the screen
 */
window.addEventListener('resize', resizeIPhoneImage);
document.addEventListener('DOMContentLoaded',  resizeIPhoneImage);
