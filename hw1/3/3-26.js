var funx = function(a, b, c, d) {
  console.log(this, a, b, c, d);
};
var bindFunc = funx.bind({ x: 1 }, 4, 5);
console.log(funx.name); // func
console.log(bindFunc.name); // bound func