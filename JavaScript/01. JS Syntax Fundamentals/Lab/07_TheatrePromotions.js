function calculateTicket(day, age) {
    let ticketPrice;
    switch (day) {
        case 'Weekday':
            if (0 <= age && age <= 18) {
                ticketPrice = 12;
                break;
            }
            if (18 < age && age <= 64) {
                ticketPrice = 18;
                break;
            }
            if (64 < age && age <= 122) {
                ticketPrice = 12;
                break;
            }
        case 'Weekend':

            if (0 <= age && age <= 18) {
                ticketPrice = 15;
                break;
            }
            if (18 < age && age <= 64) {
                ticketPrice = 20;
                break;
            }
            if (64 < age && age <= 122) {
                ticketPrice = 15;
                break;
            }
        case 'Holiday':

            if (0 <= age && age <= 18) {
                ticketPrice = 5;
                break;
            }
            if (18 < age && age <= 64) {
                ticketPrice = 12;
                break;
            }
            if (64 < age && age <= 122) {
                ticketPrice = 10;
                break;
            }
    }
    if (age < 0 || age > 122) {
        console.log('Error!');
    } else {
        console.log(`${ticketPrice}$`);
    }
}
calculateTicket('Weekday', 42);