import FacebookIcon from "./img/facebook-icon.svg";

export default function loadHome() {
    const content = document.getElementById("content");
    content.appendChild(createHome());
}

function createHome() {
    const home = document.createElement("div");
    home.id = "home";
    home.appendChild(createContent());
    home.appendChild(createImage());
    return home;
}

function createContent() {
    const homeContent = document.createElement("div");
    homeContent.classList.add("home-content");
    homeContent.appendChild(createDescription());
    homeContent.appendChild(createTitle());
    homeContent.appendChild(createMenuButton());
    homeContent.appendChild(createContact());
    return homeContent;
}

function createDescription() {
    const desc = document.createElement("p");
    desc.classList.add("description");
    desc.innerHTML = "Discover your taste";
    return desc;
}

function createTitle() {
    const title = document.createElement("p");
    title.classList.add("title");
    title.innerHTML = "Delta Dining";
    return title;
}

function createMenuButton() {
    const button = document.createElement("button");
    button.classList.add("menu-button");
    button.innerHTML = "Discover Menu";
    return button;
}

function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");
    contact.appendChild(createLine());
    contact.appendChild(createFacebookIcon());
    return contact;
}

function createLine() {
    const line = document.createElement("div");
    line.classList.add("line");
    return line;
}

function createFacebookIcon() {
    const link = document.createElement("a");
    link.href = "#";
    link.target = "_blank";

    const icon = new Image();
    icon.src = FacebookIcon;
    icon.classList.add("icon");

    link.appendChild(icon);
    return link;
}

function createImage() {
    const image = document.createElement("div");
    image.classList.add("image");
    return image;
}