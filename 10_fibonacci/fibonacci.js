const fibonacci = function(num) {
    num = parseInt(num)
    if (num < 0){
        return "OOPS";
    }
    if (num == 0){
        return 0;
    }
    let array = [1, 1];
    for (let i = 2; i < num; i++)
        array.push(array[i-2] + array[i-1]);
    return array[array.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;
