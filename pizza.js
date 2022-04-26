function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var s1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(s1);

var s2 = pizzaOven("hand tossed", "traditional", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(s2);

function crust(crustType){
    return crustType[Math.floor(Math.random()*crustType.length)];
}
function sauce(sauceType){
    return sauceType[Math.floor(Math.random()*sauceType.length)];
}
function cheese(cheeses){
    return cheeses[Math.floor(Math.random()*cheeses.length)];
}
function topping(toppings){
    return toppings[Math.floor(Math.random()*toppings.length)];
}

var pizzaRandom
    var crustType = ["deep dish", "hand tossed"];
    var sauceType = ["traditional", "marinara"];
    var cheeses = ["mozzarella", "feta"];
    var toppings = ["mushrooms", "olives", "onions", "pepperoni", "sausage"];

console.log(crust(crustType), sauce(sauceType), cheese(cheeses), topping(toppings));

console.log(crust(crustType), sauce(sauceType), cheese(cheeses), topping(toppings));

