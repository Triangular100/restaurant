import PortraitImg from "./img/portrait.jpg";
import FacebookIcon from "./img/facebook-icon.svg";

export default function loadAbout() {
    const content = document.getElementById("content");
    content.appendChild(createAbout());
}

function createAbout() {
    const about = document.createElement("div");
    about.id = "about";
    about.appendChild(createAboutSection());
    return about;
}

function createAboutSection() {
    const aboutS = document.createElement("div");
    aboutS.classList.add("about-section");
    aboutS.appendChild(createTitle());
    aboutS.appendChild(createSubTitle());
    aboutS.appendChild(createImage());
    aboutS.appendChild(createDescription());
    aboutS.appendChild(createContact());
    return aboutS;
}

function createTitle() {
    const title = document.createElement("p");
    title.innerHTML = "Welcome";
    title.classList.add("title");
    return title;
}

function createSubTitle() {
    const title = document.createElement("p");
    title.innerHTML = "About Us";
    title.classList.add("subtitle");
    return title;
}

function createImage() {
    const Img = new Image();
    Img.src = PortraitImg;
    Img.classList.add("image");
    return Img;
}

function createDescription() {
    const desc = document.createElement("p");
    desc.classList.add("description");
    desc.innerHTML = "Quis ipsam molestiae consequuntur. Aut mollitia corporis occaecati debitis tempora. Fuga voluptatem iure quo tempore. Non possimus labore laboriosam doloremque. Totam ratione sapiente sunt. Provident reprehenderit sed est error vel esse. Consequatur iusto ratione sunt ducimus voluptates. Impedit alias ducimus sunt quia expedita. Qui ut id dolor. Repellat aspernatur maxime delectus. Vel sit itaque qui et id quas magnam dolor. Minima nihil illo sit vel est cupiditate eligendi et.";
    return desc;
}

function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");
    contact.appendChild(createFacebookIcon());
    return contact;
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