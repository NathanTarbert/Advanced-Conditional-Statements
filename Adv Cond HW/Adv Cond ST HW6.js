
function fishingBoat(groupBudget,season,numberOfFisherman){

    let boatPrice = 0;
    let discountPrice = 0;
    let extraDiscount = 0;
    let neededBudget = 0;
    let springBoatPrice = 3000;
    let summerFallBoatPrice = 4200;
    let winterBoatPrice = 2600;

        if(season == "Spring"){
            boatPrice = springBoatPrice;
        }
        if(season == "Summer" || season == "Autumn"){
            boatPrice = summerFallBoatPrice;
        }
        if(season == "Winter"){
            boatPrice = winterBoatPrice;
        }

        if(numberOfFisherman <= 6){
            discountPrice = boatPrice - (boatPrice * 0.10);
        }
        else if((numberOfFisherman > 6) && (numberOfFisherman < 12)){
        discountPrice = boatPrice - (boatPrice * 0.15);
        }
        else if(numberOfFisherman >= 12){
            discountPrice = boatPrice - (boatPrice * 0.25);
        }
        //Apply the discount to the boatPrice
        // boatPrice -= discountPrice;
        //see if the extra discount applies for even groups over 6 people, except during the fall.
        if((season != "Autumn") && (numberOfFisherman % 2 == 0)){
            extraDiscount = discountPrice * 0.05;
            discountPrice = discountPrice - extraDiscount;
        }
        //compare the budget and boatPrice
        if(groupBudget <= discountPrice){
            let remainingBudget = discountPrice - groupBudget;
        
        console.log(`Not enout money! You need ${remainingBudget.toFixed(2)} leva`);
    }
        else if(groupBudget > discountPrice){
            let neededBudget = groupBudget - discountPrice;
       
        console.log(`Yes! You have ${neededBudget.toFixed(2)} leva left`);
    }
    }
    

// fishingBoat(3000,"Summer",11);
// fishingBoat(3600,"Autumn",6);
fishingBoat(2000,"Winter",13);