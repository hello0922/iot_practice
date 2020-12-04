Array.prototype.map = function(callback, thisArg) {
  var mappedArr = [];
  for (var i = 0; i < this.length; i++) {
    var mappedValue = callback.call(thisArg || window, this[i], i, this);
    mappedArr[i] = mappedValue;
  }
  return mappedArr;
};

var test = [11,22,33];
var test_func = test.map(function (value, index) {
  console.log (this, value, index);
  return value + 11;
});

var test_func2 = test.map(function (value, index) {
  console.log (this, value, index);
  return value + 22;
}, {x:1});

console.log(test_func);
console.log(test_func2);