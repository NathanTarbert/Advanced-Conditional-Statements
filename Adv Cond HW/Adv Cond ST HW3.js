// ● Calculate the weekends in Sofia (48 minus the weekends in his hometown). Calculate the number of
// weekends in Sofia : multiply the weekends in Sofia by (3.0 / 4). Notice that a fractional division is necessary
// (3.0 / 4), not an integer one (3 / 4).
// ● Calculate the number of games in the hometown. They are exactly as much as the trips to the hometown .
// ● Calculate the number of games during holidays . They equal the number of holidays multiplied by (2.0 / 3).
// ● Sum all games. You will get a decimal number. Do not round yet .
// ● If the year is leap add 15% to the total number of games .
// ● Finally, round to the smaller integer by using Math.Truncate(result) .




function volleyball(yearType,numHolidays,numWeekendsHome){


            //34.5
    let weekendsINSofia = (48 - numWeekendsHome) * 0.75;
    let holidaysInSofia = numHolidays * (2.0 / 3);
    let totalGames = weekendsINSofia + holidaysInSofia + numWeekendsHome;

    if(yearType == "leap"){
    let leapGames = ((totalGames * 0.15) + totalGames);
    
        console.log(Math.floor(leapGames));
    }    
    else if(yearType == "normal"){
            console.log(Math.floor(totalGames));
        }
    }



volleyball("leap",5,2);
volleyball("normal",3,2);
volleyball("leap",2,3);
volleyball("normal",11,6);
volleyball("leap",0,1);
volleyball("normal",6,13);