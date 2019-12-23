import { fixScroll, onMouseMove } from './function.js';

const body = document.querySelector("body");


let width = window.innerWidth;
body.style.width = `${width}px`;

window.onresize = () => {
    width = window.innerWidth;
    body.style.width = `${width}px`;
    container.style.width = `${width}px`;
    slider.style.width = `${width}px`;
    console.log(width)
}

//create an event to check the pageY
body.onclick = () => {
    console.log(window.pageYOffset);
};

//create a container which nests the whole page but not the movil element which
// is displayed when the buttons are pressed
const container = document.createElement("div");
container.id = "container";
container.style.width = `${width}px`;
body.appendChild(container);

// apend a div to the body
const initialSession = document.createElement("div");
initialSession.id = "initial-session";
container.appendChild(initialSession);

// create a gallery and apend  it to the container 
const gallery = document.createElement("div");
gallery.id = "gallery";
container.appendChild(gallery);

//create a title and a p with the pageY
const title = document.createElement("h1");
title.innerHTML = "Create a Gallery from scratch in Vanilla. JS.";
initialSession.appendChild(title);
const subTitle = document.createElement("p");
subTitle.innerHTML = "we use pageYOffset, scrollTo() and other JS methods."
initialSession.appendChild(subTitle);

// create the slider - display none by dafault
const slider = document.createElement("div");
slider.id = "slider";
slider.style.width = `${width}px`;
// append it to the body, not to the container, should be always out
body.appendChild(slider);


//create the icon to close the slider
const close = document.createElement("div");
close.id = "close";
slider.appendChild(close);

// icon click area
const iconClickArea = document.createElement("div");
iconClickArea.id = "icon-click-area";
iconClickArea.onclick = () => fixScroll(0, []);
close.appendChild(iconClickArea);

// nest icon
const icon = document.createElement("div");
icon.id = "icon";
iconClickArea.appendChild(icon);


//create the main image container into the slider
const main = document.createElement("div");
main.id = "main";
slider.appendChild(main);

//create the arrow-cursor
const arrowCursor = document.createElement("div");
arrowCursor.id = "arrow-cursor";
slider.appendChild(arrowCursor);
main.onmousemove = (e) => onMouseMove(e, arrowCursor)



// this is our array of colors
var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

// create images which are into the gallery
for (let i = 0; i < colorArray.length; i++) {
    let div = document.createElement("div");
    div.className = "images";
    div.style.backgroundColor = colorArray[i];
    div.innerHTML = i;
    gallery.appendChild(div);
    //the index should be pass to set the src of the image
    div.onclick = () => fixScroll(i, colorArray);
}

//create the main image into the slider
const figure = document.createElement("figure");
figure.id = "figure";
main.appendChild(figure);

const img = document.createElement("img");
img.id = "img";
figure.appendChild(img);

const figcaption = document.createElement("figcaption");
figcaption.id = "fig-caption";
figcaption.innerHTML = "some description <br/> date of the picture"
figure.appendChild(figcaption);






