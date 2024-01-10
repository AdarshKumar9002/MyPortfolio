const HAMBURGER_MENU_ELEMENT =document.getElementById("btn-menu");
const IMG_SRC_ELEMENT =document.getElementById("imgSrc");
const NAV_CONTAINER_ELEMENT = document.querySelector(".nav__container");
const body = document.querySelector("body");

const hamburgerMenu = () => {
    const visibility = NAV_CONTAINER_ELEMENT.getAttribute("data-visible");
    if (visibility === "false") {
      NAV_CONTAINER_ELEMENT.setAttribute("data-visible", true);
      HAMBURGER_MENU_ELEMENT.setAttribute("aria-expanded", true);
      IMG_SRC_ELEMENT.src = "img/x.svg";
      body.style.overflow = "hidden"; 
    } else {
      NAV_CONTAINER_ELEMENT.setAttribute("data-visible", false);
      HAMBURGER_MENU_ELEMENT.setAttribute("aria-expanded", false);
      IMG_SRC_ELEMENT.src = "img/menu.svg";
      body.style.overflow = "auto";
    }
};
HAMBURGER_MENU_ELEMENT.addEventListener("click", hamburgerMenu);
  
