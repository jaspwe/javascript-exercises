const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  if (array.length == 0){
    return 0;
  }
	return array.reduce((total, current) => {
    return total + current;
  })
};

const multiply = function(array) {
  return array.reduce((total, current) => {
    return total * current;
  })
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
  let output = 1;
  for (i = num; i > 0; i--){
    output = output * i;
  }
  return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
