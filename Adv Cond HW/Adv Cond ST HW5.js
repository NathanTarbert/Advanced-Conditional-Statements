function newHouse(flowerType,numberOfFlowers,budget){

    
    if(flowerType == "Roses"){
     flowerPrice = numberOfFlowers * 5;
     if(numberOfFlowers > 80){
     flowerPrice = flowerPrice - (flowerPrice * 0.10);
     }else {}
     }else if(flowerType == "Dhalias"){
     flowerPrice = numberOfFlowers * 3.80;
      if(numberOfFlowers > 90){
     flowerPrice = flowerPrice - (flowerPrice * 0.15);
     }else{}
     }else if(flowerType == "Tulips"){
     flowerPrice = numberOfFlowers * 2.80;
     if(numberOfFlowers > 80){
     flowerPrice = flowerPrice - (flowerPrice * 0.15);
     }else{}
     }else if(flowerType == "Narcissus"){
     flowerPrice = numberOfFlowers * 3.0;
     if(numberOfFlowers < 120){
     flowerPrice = flowerPrice + (flowerPrice * 0.15);
     }else{}
     }else if(flowerType == "Gladious"){
     flowerPrice = numberOfFlowers * 2.50;
     if(numberOfFlowers < 80){
     flowerPrice = flowerPrice + (flowerPrice * 0.20);
    }else {}
}
    var enoughMoney =  budget - flowerPrice;
    var NotenoughMoney = flowerPrice - budget;

    if(flowerPrice < budget){

    console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flowerType} and ${enoughMoney.toFixed(2)} leva left.`);
   
    }else {

    console.log(`Not enough money, you need ${NotenoughMoney.toFixed(2)} leva more.`);
    } 
    
     
    }

// newHouse("Roses",55,250);
// newHouse("Tulips",88,260);
// newHouse("Narcissus",119,360);
newHouse("Dahlias",603,1002);
