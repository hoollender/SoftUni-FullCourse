function paymentCalculator(people, group, day) {
    let totalPrice;
    let pricePerDay;
    switch (group) {
        case 'Students':
            if (day === 'Friday') {
                pricePerDay = 8.45;
            } else if (day === 'Saturday') {
                pricePerDay = 9.80;
            } else if (day === 'Sunday') {
                pricePerDay = 10.46;
            }
            break;
        case 'Business':
            if (day === 'Friday') {
                pricePerDay = 10.90;
            } else if (day === 'Saturday') {
                pricePerDay = 15.60;
            } else if (day === 'Sunday') {
                pricePerDay = 16;
            }
            break;
        case 'Regular':
            if (day === 'Friday') {
                pricePerDay = 15;
            } else if (day === 'Saturday') {
                pricePerDay = 20;
            } else if (day === 'Sunday') {
                pricePerDay = 22.50;
            }
            break;
    }
    totalPrice = people * pricePerDay;

    if (group === 'Students' && people >= 30) {
        totalPrice *= 0.85;
    }
    if (group === 'Business' && people >= 100) {
        totalPrice = totalPrice - (10 * pricePerDay);
    }
    if (group === 'Regular' && (people >= 10 && people <= 20)) {
        totalPrice *= 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
paymentCalculator(40, "Regular", "Saturday");