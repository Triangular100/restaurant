export default function loadHeader() {
    const header = document.getElementById("header");
    header.appendChild(createNav());
}

function createNav() {
    const nav = document.createElement("nav");
    const homeButton = createNavButton("home", "Home");
    homeButton.classList.add("active");
    nav.appendChild(homeButton);
    nav.appendChild(createNavButton("menu", "Menu"));
    nav.appendChild(createNavButton("about", "About"));
    return nav;
}

function createNavButton(id, innerHTML) {
    const option = document.createElement("button");
    option.id = id;
    option.innerHTML = innerHTML;
    return option;
}