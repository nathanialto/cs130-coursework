/**
 * 
 * -------------------------------------
 * DOM Manipulation / Traversal Activity
 * -------------------------------------
 * 
 * 1. Create and attach an event handler (function) to each ".image" 
 * element so that when the ".image" element is clicked, the corresponding 
 * image loads in the .featured image element.
 * 
 * 2. Create event handlers for the next and previous buttons. The next button should
 *    show the next image in the thumbnail list. The previous should show the previous.
 * 
 * 3. If you get to the end, start at the beginning. 
 * 
 * 4. If you get to the beginning, loop around to the end.
 * 
 * 
 */

const images = [
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
];

const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
            <li class="card">
                <div class="image" 
                    style="background-image:url('${image}')"
                    data-index="${idx}"></div>
            </li>`;
    });
};

initScreen();

//currentIndex as a global variable:
let currentIndex = 0;

const currentImage = document.querySelector(".featured_image");

// create event handler:
const showImage = (ev) => {
    // elem is the target of the current event
    const elem = ev.currentTarget;
    // currentIndex is the parsed integer from the 
    // data set letting us know which image it is
    currentIndex = parseInt(elem.dataset.index);
    // img is the current image selected
    const img = images[currentIndex];
    console.log("currentIndex:", currentIndex);
    //console dictates chosen image
    console.log(elem.style.backgroundImage);
    //that image is selected and replaces the featured image's current 
    // background image
    currentImage.style.backgroundImage = `url('${img}')`;
    // your job: set the .featured_image's backgroundImage to the
    // element that was just clicked.
};

const showNext = (ev) => {
    if (currentIndex <= 6) {
        currentIndex += 1;
    }
    else {
        currentIndex = 0};
    console.log("currentIndex:", currentIndex);
    const img = images[currentIndex];
    currentImage.style.backgroundImage = `url('${img}')`
};

const showPrev = (ev) => {
    
    if (currentIndex >= 1) {
        currentIndex -= 1;
    }
    else {
        currentIndex = 7};
    console.log("currentIndex:", currentIndex);
    const img = images[currentIndex];
    currentImage.style.backgroundImage = `url('${img}')`

    // update .featured_image
};

// attach event handler to all of the image tags 
// (after initScreen() has been invoked).

// first get all of the image elements from the DOM:
const imageElements = document.querySelectorAll('.image');

// then loop through each one and attach an event handler
// to each element's click event:
for (const elem of imageElements) {
    elem.onclick = showImage;
}

document.querySelector('.next').onclick = showNext;
document.querySelector('.prev').onclick = showPrev;
currentImage.onclick = showNext;


