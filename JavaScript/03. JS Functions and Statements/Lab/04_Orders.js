function calculatePrice(product, quantity) {
    let totalPrice = 0;
    let productSinglePrice = 0;
    switch (product) {
        case "coffee": productSinglePrice = 1.50; break;
        case "water": productSinglePrice = 1.00; break;
        case "coke": productSinglePrice = 1.40; break;
        case "snacks": productSinglePrice = 2.00; break;
    }
    totalPrice = productSinglePrice * quantity;
    console.log(totalPrice.toFixed(2));
}
calculatePrice("water", 5);
calculatePrice("coffee", 2);