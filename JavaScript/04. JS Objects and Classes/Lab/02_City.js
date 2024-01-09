function getObjectData(obj) {
    for (const entry of Object.entries(obj)) {
        const [key, value] = entry;
        console.log(`${key} -> ${value}`);
    }

}
getObjectData({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)