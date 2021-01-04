//select the form and list items(ul)
const addform = document.getElementById('addForm');
const listOfItems = document.getElementById('listOfItems');
const filter = document.getElementById('filter');

//event listeners
addform.addEventListener('submit', addTodo);
listOfItems.addEventListener('click', deleteTodo);
listOfItems.addEventListener('click', checkTodo);
filter.addEventListener('keyup', filterTodo);

//add todo function
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
    // create delete button
    const deleteBtn = document.createElement('button');
    //set the text content and classname
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";
    
    //create check button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = "Completed";
    completeBtn.className = "check";

    //append button to newListItem
    newListItem.appendChild(completeBtn)
    newListItem.appendChild(deleteBtn);

    //append new list item to ul , the listOfItems
    listOfItems.appendChild(newListItem);
}

//delete todo function
function deleteTodo(e) {

    if(e.target.classList.contains('delete-btn')) {
        //gets the li element(parent of the btn) when delete button is clicked
        let li = e.target.parentElement;
        //remove the li element
        listOfItems.removeChild(li);
    }

}

//check off Todo function
function checkTodo(e) {
    if(e.target.classList.contains('check')) {
        let li = e.target.parentElement;
        li.style.textDecorationLine = "line-through";
        li.style.color = "green";
    }
}

//filter Todos function
function filterTodo(e) {
    let userInput = e.target.value.toLowerCase();
    let items = listOfItems.getElementsByTagName('li');

    Array.from(items).forEach(function(item) {

        let listItem = item.firstChild.textContent;

       if(listItem.toLowerCase().indexOf(userInput) != -1) {
           item.style.display = "block";
       } else {
           item.style.display = "none";
       }
    });
}


