import DenverImg from './img/denver.jpg';

const menu = [
    {
        name: "Omelets",
        items: [
            {
                title: "Denver",
                ingredients: ["eggs", "ham", "onions", "green peppers", "Jack and Cheddar cheese"],
                price: 15.99,
                image: DenverImg
            },
            {
                title: "Spicy Poblano",
                ingredients: ["eggs", "poblano peppers", "red bell peppers", "onions", "shredded beef", "Jack and Cheddar cheese", "avocado", "Poblano cream", "Serrano peppers"],
                price: 15.49,
                image: DenverImg
            },
            {
                title: "Big Steak",
                ingredients: ["eggs", "steak", "hash browns", "green peppers", "onions", "mushrooms", "tomatoes", "Cheddar cheese"],
                price: 15.49,
                image: DenverImg
            }
        ]
    },
    {
        name: "Sides",
        items: [
            {
                title: "Fruit Medley",
                ingredients: ["apple", "melon", "pineapple", "mango", "grapes"],
                price: 7.49,
                image: DenverImg
            },
            {
                title: "Fruit and Yogurt",
                ingredients: ["vanilla yogurt", "bananas", "strawberries", "granola"],
                price: 9.99,
                image: DenverImg
            },
            {
                title: "Cinammon Roll",
                ingredients: ["cinnamon roll", "powdered sugar", "cinammon", "cream cheese icing"],
                price: 5.99,
                image: DenverImg
            }
        ]
    },
    {
        name: "Drinks",
        items: [
            {
                title: "Coffee",
                price: 3.69,
            },
            {
                title: "Strawberry Lemonade",
                price: 4.99,
            },
            {
                title: "Fountain Drink",
                price: 3.99
            },
            {
                title: "Orange Juice",
                price: 4.99,
            },
            {
                title: "Horchata",
                price: 4.99,
            }
        ]
    }
];

export default function loadMenu() {
    const content = document.getElementById("content");
    content.appendChild(createMenu());
}

function createMenu() {
    const menu = document.createElement("div");
    menu.id = "menu";
    menu.appendChild(createMenuHeader());
    menu.appendChild(createMenuCategories());
    return menu;
}

function createMenuHeader() {
    const menuHeader = document.createElement("div");
    menuHeader.classList.add("menu-header");
    menuHeader.appendChild(createMenuDescription());
    menuHeader.appendChild(createMenuTitle());
    return menuHeader;
}

function createMenuDescription() {
    const desc = document.createElement("p");
    desc.classList.add("description");
    desc.innerHTML = "Discover";
    return desc;
}

function createMenuTitle() {
    const title = document.createElement("p");
    title.classList.add("title");
    title.innerHTML = "Menu";
    return title;
}

function createMenuCategories() {
    const menuCategories = document.createElement("div");
    menuCategories.classList.add("categories");
    for (let category of menu) {
        menuCategories.appendChild(createMenuCategory(category));
    }
    return menuCategories;
}

function createMenuCategory(category) {
    const menuCategory = document.createElement("div");
    menuCategory.classList.add("category");
    menuCategory.appendChild(createMenuCategoryTitle(category.name));
    menuCategory.appendChild(createMenuCategoryItems(category.items));
    return menuCategory;
}

function createMenuCategoryTitle(title) {
    const titleEle = document.createElement("p");
    titleEle.classList.add("title");
    titleEle.innerHTML = title;
    return titleEle;
}

function createMenuCategoryItems(items) {
    const itemsElement = document.createElement("div");
    itemsElement.classList.add("items");
    for (let item of items) {
        itemsElement.appendChild(createMenuItem(item));
    }
    return itemsElement;
}

function createMenuItem(item) {
    const itemElement = document.createElement("div");
    itemElement.classList.add("item");

    if (Object.hasOwn(item, "image")) {
        itemElement.appendChild(createItemImage(item.image));
    }
    itemElement.appendChild(createItemTitle(item.title));
    itemElement.appendChild(createItemLine());
    itemElement.appendChild(createItemPrice(item.price));
    if (Object.hasOwn(item, "ingredients")) {
        itemElement.appendChild(createItemIngredients(item.ingredients));
    }

    return itemElement;
}

function createItemImage(img) {
    const image = new Image();
    image.src = img;
    image.classList.add("item-image");
    return image;
}

function createItemTitle(t) {
    const title = document.createElement("p");
    title.classList.add("item-title");
    title.innerHTML = t;
    return title;
}

function createItemLine() {
    const line = document.createElement("div");
    line.classList.add("item-line");
    return line;
}

function createItemIngredients(ing) {
    const ingredients = document.createElement("p");
    ingredients.classList.add("item-ingredients");
    let text = ing[0];
    for (let i = 1; i < ing.length; i++) {
        text = text + (", " + ing[i]);
    }
    ingredients.innerHTML = text;
    return ingredients;
}

function createItemPrice(pri) {
    const price = document.createElement("p");
    price.classList.add("item-price");
    price.innerHTML = pri;
    return price;
}