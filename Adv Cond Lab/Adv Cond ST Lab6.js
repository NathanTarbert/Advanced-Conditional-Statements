function VacationExpenses(season,accomodationType,numDays){

    var hotelSpring = 30 * numDays * 0.80;
    var hotelSummer = 50 * numDays;
    var hotemAutumn = 20 * numDays * 0.70;
    var hotelWinter = 40 * numDays * 0.90;
    
    var campingSpring = 10 * numDays * 0.80;
    var campingSummer = 30 * numDays;
    var campingAutumn = 15 * numDays * 0.70;
    var campingWinter = 10 * numDays * 0.90;

    if(season == "Spring" && accomodationType == "Hotel"){
        console.log(hotelSpring.toFixed(2));
    }else if(season == "Summer" && accomodationType == "Hotel"){
        console.log(hotelSummer.toFixed(2));
    }else if(season == "Autumn" && accomodationType == "Hotel"){
        console.log(hotemAutumn.toFixed(2));
    }else if(season == "Winter" && accomodationType == "Hotel"){
        console.log(hotelWinter.toFixed(2));
        
    }else if(season == "Spring" && accomodationType == "Camping"){
        console.log(campingSpring.toFixed(2));
    }else if(season == "Summer" && accomodationType == "Camping"){
        console.log(campingSummer(2));
    }else if(season == "Autumn" && accomodationType == "Camping"){
        console.log(campingAutumn.toFixed(2));
    }else if(season == "Winter" && accomodationType == "Camping"){
        console.log(campingWinter.toFixed(2));
    }
}
    
  


VacationExpenses("Winter","Hotel",5);
