function convertToObject(jsonString) {
    const obj = JSON.parse(jsonString);

    for (const element of Object.entries(obj)) {
        const [key, value] = element;
        console.log(`${key}: ${value}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');