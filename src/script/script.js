// eslint-disable-next-line import/extensions
import info from "./local.js";

const HAMBURGER_MENU_ELEMENT =document.getElementById("btn-menu");
const IMG_SRC_ELEMENT =document.getElementById("imgSrc");
const NAV_CONTAINER_ELEMENT = document.querySelector(".nav__container");
const BODY_ELEMENT = document.querySelector("body");
// const HEROIMAGE_Text_ELEMENT = document.querySelector(".heroImage__text");

const hamburgerMenu = () => {
    const visibility = NAV_CONTAINER_ELEMENT.getAttribute("data-visible");
    if (visibility === "false") {
      NAV_CONTAINER_ELEMENT.setAttribute("data-visible", true);
      HAMBURGER_MENU_ELEMENT.setAttribute("aria-expanded", true);
      IMG_SRC_ELEMENT.src = "img/x.svg";
      BODY_ELEMENT.style.overflow = "hidden"; 
    } else {
      NAV_CONTAINER_ELEMENT.setAttribute("data-visible", false);
      HAMBURGER_MENU_ELEMENT.setAttribute("aria-expanded", false);
      IMG_SRC_ELEMENT.src = "img/menu.svg";
      BODY_ELEMENT.style.overflow = "auto";
    }
};
HAMBURGER_MENU_ELEMENT.addEventListener("click", hamburgerMenu);
  
function heroInfo(name, degination, description) {
  const potfolioers_name = document.getElementById("heroImage__text--name");
  const potfolioers_degination = document.getElementById("heroImage__text--degination");
  const potfolioers_description = document.getElementById("heroImage__text--intro");

  potfolioers_name.innerHTML = name;
  potfolioers_degination.innerHTML = degination;
  potfolioers_description.innerHTML = description;
}

heroInfo(info.name, info.degination, info.description);
