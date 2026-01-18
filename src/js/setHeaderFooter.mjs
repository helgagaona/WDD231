import { parkInfoTemplate, footerTemplate } from "./templates.mjs";

function setHeaderInfo(data) {
  // insert data into the disclaimer section
  const disclaimer = document.querySelector(".disclaimer > a");
  disclaimer.href = data.url;
  disclaimer.innerHTML = data.fullName;
  // updated title of the site
  document.querySelector("head > title").textContent = data.fullName;
  // banner image
  document.querySelector(".hero-banner > img").src = data.images[0].url;

  document.querySelector(".hero-banner__content").innerHTML =
    parkInfoTemplate(data);
}

function setFooter(data) {
  const footerEl = document.querySelector("#park-footer");
  footerEl.insertAdjacentHTML("afterbegin", footerTemplate(data));
}

export default function setHeaderFooter(parkData) {
  setHeaderInfo(parkData);
  setFooter(parkData);
}