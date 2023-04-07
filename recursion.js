// 1. Write a recursive function that takes in two parameters, one for the base number, and one for the exponent number,
 //i.e. how many times it will multiply the first number.
// 2. Since it is recursive, you must call the function within the function 
//and you must also have a base condition to avoid an infinite loop.
function recurse (a,b) {
    if (b === 0) {
    return 1;
    } else {
        return a * recurse(a, b-1 );
    }
}

//Console log the result and run the function on the following numbers:
console.log(recurse(2, 5));
console.log(recurse(7, 3));
console.log(recurse(12, 2));
console.log(recurse(9, 4));