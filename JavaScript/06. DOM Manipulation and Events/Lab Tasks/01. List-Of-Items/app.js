function addItem() {
    let inputField = document.getElementById('newItemText');
    let newListItem = document.createElement('li');
    newListItem.textContent = inputField.value;

    let itemsList = document.getElementById('items');
    itemsList.appendChild(newListItem);
}