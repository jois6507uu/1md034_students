/*
let orderButton = document.getElementById("orderbutton");


function makeOrder() {
    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let street = document.getElementById("street").value;
    let house = document.getElementById("house").value;
    let payment = document.getElementById("paymentmethod").value;
    let gender = document.getElementsByName("g");
    let genderId;
    for (let i = 0; i < gender.length; i++)
    {
	if (gender[i].checked)
	{
	    genderId = gender[i].id;
	}
    }
    
    let customerInformation = [name, email, street, house, payment, genderId];
    console.log(customerInformation);
    return customerInformation;
}
*/
// orderButton.addEventListener("click", makeOrder);

/*
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


*/
