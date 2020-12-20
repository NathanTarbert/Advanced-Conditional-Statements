function productOfNumbers(num1,num2,num3){

if(num1 == 0 || num2 == 0 || num3== 0){
    console.log("Zero");
}else{
    var wholeNumber = 0;
   
    if(num1 < 0) wholeNumber++;
    if(num2 < 0) wholeNumber++;
    if(num3 < 0) wholeNumber++;
    
    if(wholeNumber % 2 == 0){
        console.log("Positive");
    }else{
        console.log("Negative");
    }

    }
    }
 
productOfNumbers(2,3,-1);
productOfNumbers(-3,-4,5);