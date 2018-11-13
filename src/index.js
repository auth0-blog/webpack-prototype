// src/index.js

import createBanner from "./banner.js";

import "./index.css";

import WebpackImg from "./webpack-logo.png";

const createElement = () => {
  const element = document.createElement("a");
  element.href = "https://webpack.academy/";
  element.classList = "webpack";
  element.target = "_blank";
  return element;
};

const createImage = image => {
  const imageElement = new Image();
  imageElement.src = image;
  imageElement.classList = "webpack-img";
  return imageElement;
};

const main = createElement();

document.body.appendChild(main);

main.appendChild(createBanner());
main.appendChild(createImage(WebpackImg));
