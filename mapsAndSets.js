let fruitInventory = new Map();
//Create a map called fruitInventory with the following key-value pairs: 
//('apple', 10), ('banana', 20), ('orange', 30).
fruitInventory.set('apples', 10);
fruitInventory.set('banana', 20);
fruitInventory.set('orange', 30);
//Use the set method to update the inventory of 'apple' to 15.
fruitInventory.set('apples', 15);
//Use the get method to retrieve the inventory of 'banana' and store it in a variable called bananaInventory.
let bananaInventory = fruitInventory.get('banana');
//Create a set called uniqueColors with the following values: 'red', 'blue', 'green'.
let uniqueColors = new Set();
uniqueColors.add('red');
uniqueColors.add('blue');
uniqueColors.add('green');
//Use the add method to add the color 'yellow' to the uniqueColors set.
uniqueColors.add('yellow');
//Use the has method to check if the color 'blue' is in the uniqueColors set and store the result in a variable called hasBlue.
console.log(uniqueColors.has('blue'));
let hasBlue = uniqueColors.has('blue'); //stores the value of whether or not blue is in the set as the variable hasBlue
console.log(hasBlue); //prints the value of variable hasBlue