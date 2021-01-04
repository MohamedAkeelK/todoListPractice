
const addform = document.getElementById('addForm');
const listOfItems = document.getElementById('listOfItems');

addform.addEventListener('submit', addTodo);
listOfItems.addEventListener('click', deleteTodo);

function addTodo(e) {
    e.preventDefault();

    //select and get the value of the item to add
    const itemToAdd = document.getElementById('itemToAdd').value;
    //create a new li to store the itemToAdd
    const newListItem = document.createElement('li');
    //set the html equal to the itemToAdd
    newListItem.innerHTML = itemToAdd;
    //give new list item the same class
    newListItem.className = "indv-item";
    //append new list item to ul , listOfItems
    listOfItems.appendChild(newListItem);
}


function deleteTodo(e) {

}

