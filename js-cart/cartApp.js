// Create an HTML file called cart.html with a simple structure that includes a form to add items to the cart and a button to display the cart contents.
// Create a file called cartApp.js and link it to cart.html.
// In cartApp.js, write a script that does the following:
// Create a function called initializeCart that checks if there's a cart in localStorage; if not, it initializes an empty cart and stores it in localStorage.
function initializeCart() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart === null) {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}
// Create a function called addItem that takes an item object as a parameter, retrieves the cart from localStorage, adds the item to the cart, and then stores the updated cart back into localStorage.
function addItem(item) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
}
// Create a function called removeItem that takes an item id as a parameter, retrieves the cart from localStorage, removes the item with the given id from the cart, and then stores the updated cart back into localStorage.
function removeItem(id) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Create a function called displayCart that retrieves the cart from localStorage and logs the cart contents to the console.
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
}
// Create event listeners for the add item form and display cart button to call the respective function.


// Call the initializeCart function when the page loads
initializeCart();


// Added an event listener to the addItemForm
document.getElementById("addItemForm").addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Get the item name and price from the form inputs
    let itemName = document.getElementById("itemName").value;
    let itemPrice = parseFloat(document.getElementById("itemPrice").value);
  
    // Generate a random id for the new item
    let itemId = Date.now();
  
    // Create a new item object with the id, name, and price
    let newItem = {
      id: itemId,
      name: itemName,
      price: itemPrice
    };
  
    // Call the addItem function with the new item
    addItem(newItem);
  
    // Reset the form inputs
    document.getElementById("itemName").value = "";
    document.getElementById("itemPrice").value = "";
  });
  
  // Add an event listener to the displayCartButton
  document.getElementById("displayCartButton").addEventListener("click", function() {
    // Call the displayCart function
    displayCart();
  });