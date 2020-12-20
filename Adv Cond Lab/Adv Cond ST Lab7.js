

function cinema(movieType, seatRows, SeatsPerRow) {
    var premereTicket = 12.00 * seatRows * SeatsPerRow;
    var normalTicket = 7.50 * seatRows * SeatsPerRow;
    var discountTicket = 5.00 * seatRows * SeatsPerRow;
   
    if (movieType == "Premiere") {
        console.log(premereTicket.toFixed(2));
    } else if (movieType == "Normal") {
        console.log(normalTicket.toFixed(2));
    } else if (movieType == "Discount") {
        console.log(discountTicket.toFixed(2));
    }
}

cinema("Normal",12,9);