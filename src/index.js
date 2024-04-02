import loadHeader from "./header.js";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";
import "./style.css";

function loadPage() {
    loadHeader();
    loadHome();
    bindEvents();
}

function bindEvents() {
    const content = document.getElementById("content");
    const homeButton = document.getElementById("home");
    const menuButton = document.getElementById("menu");
    const aboutButton = document.getElementById("about");
    bindHomeEvents(content, homeButton, menuButton, aboutButton);
    bindNavEvents(content, homeButton, menuButton, aboutButton);
}

function bindHomeEvents(content, homeButton, menuButton, aboutButton) {
    document.querySelector(".menu-button").addEventListener("click", () => {
        homeButton.classList.remove("active");
        menuButton.classList.add("active");
        aboutButton.classList.remove("active");
        content.innerHTML = "";
        loadMenu();
    });
}

function bindNavEvents(content, homeButton, menuButton, aboutButton) {
    homeButton.addEventListener("click", () => {
        homeButton.classList.add("active");
        menuButton.classList.remove("active");
        aboutButton.classList.remove("active");
        content.innerHTML = "";
        loadHome();
        bindHomeEvents(content, homeButton, menuButton, aboutButton);
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