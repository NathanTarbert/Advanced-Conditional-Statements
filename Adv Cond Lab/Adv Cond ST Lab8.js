

function operationsWithNums(realNum1, realNum2, operator) {
    var answer = eval(realNum1 + operator + realNum2);
    console.log(`${realNum1} ${operator} ${realNum2} = ${answer}`);
}

operationsWithNums(10,12,"+");