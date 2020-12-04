var outer = function() {
  var a = 1;
  var inner = function() {
    return ++a;
  };
  return inner;
};
var outer3 = function() {
  var a = 1;
  var inner = function() {
    return ++a;
  };
  return inner();
};
var outer2 = outer();

var outer4 = outer3();
console.log(outer2()); // 2
console.log(outer2()); // 3
console.log(outer4); // 2
console.log(outer4); // 3