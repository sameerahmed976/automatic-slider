import { getElement } from "./src/getElement.js";

const imageContainer = getElement(".image");
export const data = [
  "./src/images/procat1.jpg",

  "./src/images/procat2.jpg",

  "./src/images/procat3.jpg",
];
const delay = 3000;
let i = 0;

const changeImages = () => {
  imageContainer.src = `${data[i]}`;

  if (i < data.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout(changeImages, delay);
};

// changeImages();
window.addEventListener("load", changeImages);
