//Update the 'Apples' item to say 'Granny Smith Apples'
const appleUpdate = document.querySelectorAll('li');
appleUpdate[1].innerHTML = 'Granny Smith Apples';

//Remove 'Oat Milk' from the list
const oatUpdate = document.querySelectorAll('li');
oatUpdate[3].remove();

//Add an item 'Kombucha'
const kombuchaUpdate = document.createElement('li');
kombuchaUpdate.innerHTML = 'Kombucha';
list.appendChild(kombuchaUpdate);

//Clear the list and programmatically add items from the array ['protein bars', 'almonds', 'peanut butter']
const clearList = document.querySelector('ul');
clearList.innerHTML = '';

const newList = ['protein bars', 'almonds', 'peanut butter'];

for (let i = 0; i < newList.length; i++) {
    const newListItem = document.createElement('li');
    newListItem.innerHTML = newList[i];
    clearList.appendChild(newListItem);
}

//Add the class 'important' to the almonds item.

const almondsUpdate = document.getElementsByTagName('li')[1];
almondsUpdate.classList.add('important');
console.log(almondsUpdate);
