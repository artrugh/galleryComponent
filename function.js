// set global variables

let windowPageY = 0;
let fix = false;

export const fixScroll = (i, colorArray) => {
    // set the state of fix
    fix = !fix;

    if (fix) {
        // store the window.pageYOffset
        windowPageY = window.pageYOffset;

        //set the background color from the array
        figure.style.backgroundColor = colorArray[i];

        //store the index out of the function
        let index = i;

        // add the event to the main
        main.onclick = (e) => {
            //check the window width
            const middle = window.innerWidth / 2;
            // check the index to avoid undefined results
            if (index === 0) {
                index += 1;
            } else if (index === colorArray.length) {
                index -= 1;
            } else {
                e.pageX > middle ? index += 1 :
                    index -= 1;
            }
            //finally set the background of the div
            figure.style.backgroundColor = colorArray[index];
        }

    }

    // set the display of the slider
    slider.style.display = fix ? "block" : "none";
    // set the class, position, top and opacity the  of the container
    // container.className = fix ? "fixed" : "static";
    container.style.position = fix ? "fixed" : "static";
    container.style.top = fix ? `-${windowPageY}px` : "0px";
    container.style.opacity = fix ? 0.1 : 1;

    //set the overflow of the whole page when the slider is display
    const body = document.querySelector("body");
    body.style.overflow = fix ? "hidden" : null;

    // finally set the scroll to mantain it stable
    window.scrollTo({
        top: windowPageY,
        left: 100,
        behavior: 'auto'
    });
}

// set the onMouseMove function
// pass the cursor as an argument
export const onMouseMove = (e, arrowCursor) => {

    // store the middle point of the screen
    const middle = window.innerWidth / 2;

    // set the cursor none
    e.target.style.cursor = "none",
        // block the arrow
        arrowCursor.style.display = "block";
    // set the positon of the arrow, following the cursor, but 10 px more for the clickevent
    // if not, we just gonna beeing chicking this element
    arrowCursor.style.top = `${e.pageY + 10}px`;
    arrowCursor.style.left = `${e.pageX + 10}px`;

    // rotate the arrow depending on the middle point of the screen
    if (e.pageX > middle) {
        arrowCursor.style.transform = "rotate(180deg)"
    } else {
        arrowCursor.style.transform = "rotate(0deg)"

    }
    // set a timer to turn on the cursor and hidde the arrow after 1,5 second
    setTimeout(() => {
        e.target.style.cursor = "auto";
        arrowCursor.style.display = "none";
    }, 1500)
};


