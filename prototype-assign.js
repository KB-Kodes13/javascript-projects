function Person (firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.favoriteColor = favoriteColor;
        this.favoriteNumber = favoriteNumber;
        this.favoriteFoods = favoriteFoods;
}

//Add a function on the Person.prototype called fullName that returns the firstName and lastName 
//property of an object created by the Person constructor concatenated together.
Person.prototype.fullName = function () {
        console.log(this.firstName, this.lastName);
}

let person1 = new Person('Kelan' , 'Blash', 'clear', 13 , ['pizza', 'wings', 'Crumbl Cookies']);
// console.log (person1.fullName);
person1.fullName();


//Overwrite the toString method from the Object prototype by creating a toString method for Person. The toString method should return a string in the following format:
Person.prototype.toString = function () {
    console.log (this.firstName, this.lastName + 'Favorite Color: ' + this.favoriteColor +  'Favorite Number: ' + this.favoriteNumber )
}
    
//Add a property on the Person object called family which is an empty array.

Person.prototype.family = [];

// Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family array.
// To make sure that the object you are adding is an object constructed from the Person constructor - take a look at the instanceofoperator.
// Make sure that your family array does not include duplicates!
// This method should return the length of the family array.

Person.prototype.addToFamily = function (person) {
   if (person instanceof Person && !this.family.includes(person)) {
    this.family.push(person);

    return this.family.length;

   }
}
   const person2 = new Person ('Tatyana', 'Phelps', 'blue', 7, ['sushi', 'stir fry'])
   const person3 = new Person ('Mary', 'Blash', 'green', 1, ['steak', 'pasta'])

   person2.addToFamily(person2);
   person3.addToFamily(person3);

   console.log ('Family Array:', person2.family);
   console.log ('Family Length:', person2.addToFamily(person1));


