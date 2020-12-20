function operationsBetweenNumbers(number1,number2,operator){

    
    var answer = eval(number1 + operator + number2);
    // var answer = (number1 + operator + number2);
    // operator = "+","-","*","/","%";
    var even = 0; 
    
    

    if(operator == "+" || operator == "-" || operator == "*"){
        if(answer % 2 == 0){
        console.log(`${number1} ${operator} ${number2} = ${answer} - even`);
        }
        else{
            console.log(`${number1} ${operator} ${number2} = ${answer} - odd`);  
        }
    }
    if(operator == "/"){
        if(number2 == 0){
        console.log(`Cannot divide ${number1} by zero`);
        }else {   
        console.log(`${number1} ${operator} ${number2} = ${answer.toFixed(2)} `);
    }
}
    if(operator == "%"){
        if(number2 == 0){
        console.log(`Cannot divide ${number1} by zero`);
        }else {
        console.log(`${number1} ${operator} ${number2} = ${answer}`);
        
    
    }
   
}   
}
      // console.log(`${number1} ${operator} ${number2} = ${answer}`);
    


operationsBetweenNumbers(10,12,"+");
operationsBetweenNumbers(10,1,"-");
operationsBetweenNumbers(7,3,"*");
operationsBetweenNumbers(123,12,"/");
operationsBetweenNumbers(10,3,"%");
operationsBetweenNumbers(112,0,"/");
operationsBetweenNumbers(10,0,"%");