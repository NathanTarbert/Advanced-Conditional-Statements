function cinema(movieType,numRows,columnsInHall) {
    var premereTicket = 12.00 * numRows * columnsInHall;
    var normalTicket = 7.50 * numRows * columnsInHall;
    var discountTicket = 5.00 * numRows * columnsInHall;
    if (movieType == "Premiere") {
        console.log(`${premereTicket.toFixed(2)} leva`);
    } else if (movieType == "Normal") {
        console.log(`${normalTicket.toFixed(2)} leva`);
    } else if (movieType == "Discount") {
        console.log(`${discountTicket.toFixed(2)} leva`);
    }
}

cinema("Premiere",10,12);
cinema("Normal",21,13);
cinema("Discount",12,30);