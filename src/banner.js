// src/banner.js

import _ from "lodash";

import "./banner.css";

const createBanner = () => {
  const link = document.createElement("span");
  link.innerHTML = _.join(["Learn", "Webpack", "Today"], " ");
  link.classList = "banner";
  return link;
};

export default createBanner;
