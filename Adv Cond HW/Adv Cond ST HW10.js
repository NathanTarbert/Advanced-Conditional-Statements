function HotelRoom(month,numDays){
    var studioCost = 0;
    var studioMayOct = 50 * numDays;
    var studioMayOctSevenNight = 50 * numDays * 0.95;
    var studioMayOctFourteenNight = 50 * numDays * 0.70;
    var studioJuneSept = 75.20 * numDays;
    var studioJuneSeptFourteenNight = 75.20 * numDays;
    var studioJulyAug = 20 * numDays;
   

    var aptCost = 0;
    var aptMayOct = 65 * numDays;
    var aptMayOctFourteenNight = 65 * numDays * 0.90;
    var aptJuneSept = 68.70 * numDays;
    var aptJuneSeptFourteenNight = 68.70 * numDays * 0.90;
    var aptJulyAug = 77 * numDays;
    var aptJulyAugFourteenNight = 77 * numDays * 0.90;
    

    if(month === "May" || "October" ){
        var studioCost = studioMayOct;
        var aptCost = aptMayOct;
    }else if(month === "June" || "September" ){
        var studioCost = studioJuneSept;
        var aptCost = aptJuneSept;
    }else if(month === "July" || "August"){
        var studioCost = studioJulyAug;
        var aptCost = aptJulyAug;
    }
    if("Studio" && numDays > 14 && month == "May" || "October"){
            var studioCost = studioMayOctFourteenNight;
        }else if("Studio" && numDays < 7 && month == "May" || "October"){
            var studioCost = studioMayOctSevenNight;
        }else if("Studio" && numDays > 14 && month == "June" || "Setpember"){
            var studioCost = studioJuneSeptFourteenNight;

           
        }
    if("Apartment" && numDays > 14 && month == "May" || "June"){
            var aptCost = aptMayOctFourteenNight;
        }else if("Apartment" && numDays > 14 && month == "June" || "September"){
            var aptCost = aptJuneSeptFourteenNight;
        }else if("Apartment" && numDays > 14 && month == "July" || "August"){
            var aptCost = aptJulyAugFourteenNight;
        }
        console.log(`Apartment: ${aptCost.toFixed(2)} lv.`);
        console.log(`Studio: ${studioCost.toFixed(2)} lv.`);
}

HotelRoom("May",15);
HotelRoom("June",14);
HotelRoom("August",20);