function convertToJSON(name, lastName, hairColor) {
    const person = { name, lastName, hairColor };
    const objectAsJson = JSON.stringify(person);
    console.log(objectAsJson);
    // let person = {};
    // person.name = name;
    // person.lastName = lastName;
    // person.hairColor = hairColor;
    // console.log(JSON.stringify(person));

}
convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');