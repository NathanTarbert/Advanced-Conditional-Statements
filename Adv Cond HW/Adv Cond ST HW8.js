function journey(johnsBudget,season){

   var bulgariaSummer = (johnsBudget * 0.30);
   var bulgariaWinter = (johnsBudget * 0.70);
   var balkinsSummer = (johnsBudget * 0.40);
   var balkinsWinter = (johnsBudget * 0.80);
   var europeSeason = (johnsBudget * 0.90);
   var seasonPlace = "";
   var country = "";

    if(johnsBudget < 100 && season == "summer"){
        country = "Bulgaria";
        seasonPlace = "Camp";
    }   johnsNetBudget = bulgariaSummer;
        
    if(johnsBudget < 100 && season == "winter"){
        johnsNetBudget = bulgariaWinter;
        country = "Bulgaria";
        seasonPlace = "Hotel";
    }
    
    if((johnsBudget > 100) && (johnsNetBudget < 1000) && (season == "summer")){
        country = "Balkins";
        seasonPlace = "Camp";
        johnsNetBudget = balkinsSummer;
    
    }else if((johnsBudget > 100) && (johnsNetBudget < 1000) && (season == "winter")){
        johnsNetBudget = balkinsWinter;
        seasonPlace = "Hotel";
        country = "Balkins";
    }

    if((johnsBudget > 1000) && (season == "summer" || season == "winter")){
        country = "Europe";
        seasonPlace = "Hotel";
        johnsNetBudget = europeSeason;
    }
    
    console.log(`Somewhere in ${country}`);
    console.log(`${seasonPlace} - ${johnsNetBudget.toFixed(2)}`);
}


journey(50,"summer");
journey(75,"winter");
journey(312,"summer");
journey(678.53,"winter");
journey(1500,"summer");