// First create a variable for the total amount of the bill (before the tip)
let billAmount = 1000;

//Create a function named 'calculateTip'
function calculateTip (amount) { // - Take in an amount as the argument, then later, when calling the function, use the variable (billAmount) from above
    return (amount * .2);        // It should multiply the bill variable by 20% of the total and return that value
}

//Create another function called 'getBillTotal' and it should do the following things:
function getBillTotal (amount) { // Take any amount as an argument
   let tip = calculateTip(billAmount); // call the 'calculateTip' function
    return amount + tip; // return the amount + the tip amount  
}
//Console log each function and state what it is returning
console.log("Tip: $" + calculateTip(billAmount));
console.log("Total: $" + getBillTotal(billAmount));
