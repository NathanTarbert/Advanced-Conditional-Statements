function onTimeForTheExam(hourExamStarts,minuteExamStarts,hourArrived,minuteArrived){

    var minEarly = examTime - arriveTime;
    var hoursLate = 0;
    var totalMinutesLate = 0;
    var hoursEarly = 0;
    var totalMinutesEarly = 0;
    // var hours = 0;
    // var minutes = 0;
    var examTime = parseInt(minuteExamStarts) + (parseInt(hourExamStarts) * 60);
    var arriveTime = parseInt(minuteArrived) + (parseInt(hourArrived) * 60);
    var earlyTime = examTime - 30;
    var minLate = 0;
    
    
    
     if(arriveTime > examTime){
        minLate = arriveTime - examTime;
        console.log("Late");
    }else if((arriveTime > earlyTime) && (arriveTime < examTime)){
        var minLate = arriveTime - examTime;
        console.log("On time");
    }else if(arriveTime < earlyTime){
        minEarly = examTime - arriveTime;
        console.log("Early");
    }

    if((minEarly < 60) && (minEarly != 0)){
        console.log(`${minEarly} minutes before the start`);
    }else if(minEarly > 60){
            hoursEarly = Math.floor(minEarly / 60);
            totalMinutesEarly = minEarly - (hoursEarly * 60);
            if(totalMinutesEarly <= 9){
                console.log(`${hoursEarly}:0${totalMinutesEarly} hours before the start`);
            }else {
                console.log(`${hoursEarly}:${totalMinutesEarly} hours before the start`); 
            }
    }
    
    if((minLate < 60) && (minLate != 0)){
    console.log(`${minLate} minutes after the start`);
    }else if(minLate > 60){
        hoursLate = Math.floor(minLate / 60);
        totalMinutesLate = minLate - (hoursLate * 60);
        if(totalMinutesLate <= 9){
            console.log(`${hoursLate}:0${totalMinutesLate} hours after the start`);
        }else {
            console.log(`${hoursLate}:${totalMinutesLate} hours after the start`); 
        }
    }
    

}
// onTimeForTheExam(9,30,9,50);
// onTimeForTheExam(9,00,8,30);
onTimeForTheExam(18, 14, 4, 54);