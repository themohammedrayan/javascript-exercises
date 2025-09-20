const add = function(a,b) {
  return a + b;
	
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(list) {
	let result = 0;
  for(i=0;i<list.length;i++) {
    result = add(result,list[i])
  }
  return result;
};

const multiply = function(list) {
  let result = 1;
  for(i=0;i<list.length;i++) {
    result = result*list[i];
  }
  return result;
};

const power = function(a,b) {
  return a ** b
	
};

const factorial = function(a) {
  let result = 1
  for(i=1;i<=a;i++) {
    result = result*i
    }
  return result;
	
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

