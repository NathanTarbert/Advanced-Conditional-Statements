function sortedNumbers(num1,num2,num3){

    if(num1 == 1 && num2 == 2 && num3 == 3){
         console.log(`Ascending`);
    }else if(num1 == 3 && num2 == 2 && num3 == 1){
        console.log(`Descending`);
    }else{
        console.log(`Not sorted`);
    }

}
sortedNumbers(1,2,3);
sortedNumbers(3,1,2);
