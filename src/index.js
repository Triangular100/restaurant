import loadHeader from "./header.js";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";
import "./style.css";

function loadPage() {
    loadHeader();
    loadHome();
    bindNavEvents();
}

function bindNavEvents() {
    const content = document.getElementById("content");
    const homeButton = document.getElementById("home");
    const menuButton = document.getElementById("menu");
    const aboutButton = document.getElementById("about");

    homeButton.addEventListener("click", () => {
        homeButton.classList.add("active");
        menuButton.classList.remove("active");
        aboutButton.classList.remove("active");
        content.innerHTML = "";
        loadHome();
    });

    menuButton.addEventListener("click", () => {
        homeButton.classList.remove("active");
        menuButton.classList.add("active");
        aboutButton.classList.remove("active");
        content.innerHTML = "";
        loadMenu();
    });

    aboutButton.addEventListener("click", () => {
        homeButton.classList.remove("active");
        menuButton.classList.remove("active");
        aboutButton.classList.add("active");
        content.innerHTML = "";
        loadAbout();
    });
}

loadPage();