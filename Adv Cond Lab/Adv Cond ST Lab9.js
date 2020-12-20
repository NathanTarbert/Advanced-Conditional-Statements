function atm(balance, withdrawl, limit) {
    if (withdrawl > limit) {
        console.log(`The limit was exceeded.`);
    } else if (withdrawl > balance) {
        console.log(`Insufficient availility.`);
    } else {
        console.log(`The withdrawal was successful.`);
    }
}

atm(420,20,25);
atm(10,50,20);