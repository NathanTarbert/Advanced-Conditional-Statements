function summerOutfit(temp,timeOFDay){

    if((timeOFDay == "Morning") && (temp < 18)){
        console.log(`It's ${temp} degrees, get your Sweatshirt and Sneakers.`);
    }else if((timeOFDay == "Morning") && (temp <= 24)){
        console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`);
    }else if((timeOFDay == "Morning") && (temp > 25)){
        console.log(`It's ${temp} degrees, get your T-Shirt and Sandals.`);
    }else if((timeOFDay == "Afternoon") && (temp < 18)){
        console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`);
    }else if((timeOFDay == "Afternoon") && (temp < 24)){
        console.log(`It's ${temp} degrees, get your T-Shirt and Sandals.`);
    }else if((timeOFDay == "Afternoon") && (temp > 25)){
        console.log(`It's ${temp} degrees, get your Swimsuit and Barefoot.`);
    }else if((timeOFDay == "Evening") && (temp < 18)){
        console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`);
    }else if((timeOFDay == "Evening") && (temp < 24)){
        console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`);
    }else if((timeOFDay == "Evening") && (temp > 25)){
        console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`);    
}
}
summerOutfit(16,"Morning");
summerOutfit(22,"Afternoon");
summerOutfit(28,"Evening");