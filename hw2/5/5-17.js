var curry3 = function(func) {
  return function(a) {
    return function(b) {
      return function(c) {
        return func(a, b, c);
      };
    };
  };
};

var getMaxWith10 = curry3(Math.max)(10);
var getMax = getMaxWith10(8);
console.log(getMax(8,5)); // 10
console.log(getMaxWith10(25)(100)); // 25

var getMinWith10 = curry3(Math.min)(10);
var getMin = getMinWith10(8);
console.log(getMin(5)); // 8
console.log(getMinWith10(25)(100)); // 10