function menuItem(name, desc, kcal, allergy, imgPath) {
    this.name = name;
    this.description = desc;
    this.kcal = kcal;
    this.allergy = allergy;
    this.imgPath = imgPath;

    this.getNameKcal = function() {
	return this.name + ' ' + this.kcal;
    };
}

let cheeseburger = new menuItem("Cheese Burger", "Two patties made from 100% beef. Two slices of american cheddar cheese. Roasted brioche bun.", 867, "Contains gluten and lactose", "img/cheeseburger.jpg");

let mushroomburger = new menuItem("Mushroom Burger", "Vegan. Two patties made from mushrooms. Red onions, spinach and cucumber. Potato bun.", 521, "Contains gluten", "img/vegan-mushroom.jpeg");

let glutenfreeburger = new menuItem("Gluten free Burger", "Patty made from chicken. Muenster cheese, tomatoes, onions and avocado.", 320, "", "img/gluten-free-hamburger.jpg");

let baconburger = new menuItem("Bacon Nightmare Burger", "Triple bacon, beef patty, lettuce, red onion, tomatoes and pickles", 939, "Contains gluten and lactose", "img/baconburger.jpg");

let lettuceburger = new menuItem("Lettuce Burger", "Lettuce bun, 180g beef patty, cheddar cheese, onion and a tomato slice. Low calories", 188, "", "img/lettuceburger.jpeg");


let menu = [cheeseburger, mushroomburger, glutenfreeburger, baconburger, lettuceburger];

let burgerGrid = document.getElementById("wrapper");

let burger;

for (burger in menu)
{
    let gridItem = document.createElement("div");
    
    let burgerNameContainer = document.createElement("h4");
    let burgerImgContainer = document.createElement("img");
    let burgerDescContainer = document.createElement("p");
    let burgerKcalContainer = document.createElement("p");
    
    
    let burgerName = document.createTextNode(menu[burger].name);
    let burgerDesc = document.createTextNode(menu[burger].description);
    let burgerKcal = document.createTextNode('Kcal: ' + menu[burger].kcal);

    
    burgerNameContainer.appendChild(burgerName);
    burgerDescContainer.appendChild(burgerDesc);
    burgerKcalContainer.appendChild(burgerKcal);
    
    
    burgerImgContainer.setAttribute("class", "burgerimg");
    burgerImgContainer.src = menu[burger].imgPath;
    
    gridItem.appendChild(burgerNameContainer);
    gridItem.appendChild(burgerImgContainer);
    gridItem.appendChild(burgerDescContainer);
    gridItem.appendChild(burgerKcalContainer);

    if (menu[burger].allergy.length > 0)
    {
	let burgerAllergyContainer = document.createElement("p");
	let burgerAllergy = document.createTextNode(menu[burger].allergy);
	burgerAllergyContainer.appendChild(burgerAllergy);
	gridItem.appendChild(burgerAllergyContainer);
    }
    
    burgerGrid.appendChild(gridItem);
}


