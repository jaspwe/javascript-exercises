const sumAll = function(num1, num2) {
    let output = 0;
    if (num1 < 0){
        return "ERROR";
    }
    if (Number.isInteger(num1) == false){
        return "ERROR";
    }
    if (Number.isInteger(num2) == false){
        return "ERROR";
    }
    if (typeof num1 == "string"){
        return "ERROR";
    }
    if (typeof num2 == "string"){
        return "ERROR";
    }
    if (num1 > num2){
        let num = num1;
        num1 = num2;
        num2 = num;
    }
    
    for (let i = num1; i < num2 + 1; i++){
        output += i;
    }
    return output;
};

// Do not edit below this line
module.exports = sumAll;
