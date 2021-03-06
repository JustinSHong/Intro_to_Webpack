import _ from "lodash";
import "./style.css";
import Icon from "./icon.jpg";
import Data from "./data.xml";

function component() {
    let element = document.createElement("div");

    // Lodash
    element.innerHTML = _.join(["Hello", "webpack"], " ");
    element.classList.add("hello");

    // add the image to existing div
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log(Data);

    return element;
}

document.body.appendChild(component());
