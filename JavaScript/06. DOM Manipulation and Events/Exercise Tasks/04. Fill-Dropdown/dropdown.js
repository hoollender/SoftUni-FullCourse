function addItem() {
    let textInputField = document.getElementById('newItemText');
    let valueInputField = document.getElementById('newItemValue');
    let menu = document.getElementById('menu');

    let option = document.createElement('option');
    option.textContent = textInputField.value;
    option.value = valueInputField.value;

    if (textInputField.value !== '' && valueInputField.value !== '') {
        menu.appendChild(option);
    }

    textInputField.value = '';
    valueInputField.value = '';
}