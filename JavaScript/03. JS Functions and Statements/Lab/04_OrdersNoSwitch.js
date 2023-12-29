function calculatePrice(product, quantity) {
    let productPrices = {
        coffee: 1.50,
        water: 1.00,
        coke: 1.40,
        snacks: 2.00,
    };
    const price = productPrices[product]
    const totalPrice = price * quantity;
    console.log(totalPrice.toFixed(2));
}
calculatePrice("water", 5);
calculatePrice("coffee", 2);