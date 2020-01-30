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

let glutenfreeburger = new menuItem("Gluten free Burger", "Patty made from chicken. Muenster cheese, tomatoes, onions and avocado.", 320, "Gluten and lactose free", "img/gluten-free-hamburger.jpg");

let baconburger = new menuItem("Bacon Nightmare Burger", "placeholder", 939, "Contains gluten and lactose", "placeholder");

let lettuceburger = new menuItem("Lettuce Burger", "placeholder", 188, "Gluten and lactose free", "placeholder");

let menu = [cheeseburger, mushroomburger, glutenfreeburger, baconburger, lettuceburger];

let burger;
let myElement = document.getElementById("myID");
for (burger in menu)
{
    let burgerItem = document.createElement("li");
    let burgerName = document.createTextNode(menu[burger].name);
    let burgerKcal = document.createTextNode(menu[burger].kcal);

    burgerItem.appendChild(burgerName);
    burgerItem.appendChild(burgerKcal);
    
    if (menu[burger].allergy.length > 0) {
	let burgerAllergy = document.createTextNode(menu[burger].allergy);
	burgerItem.appendChild(burgerAllergy);
    }

    myElement.appendChild(burgerItem);
}
