var arr = [1, 2];
console.log(Array.prototype.toString.call(arr)); // 1,2
console.log(Object.prototype.toString.call(arr)); // [object Array]
console.log(arr.toString()); // 1,2

arr.toString = function() {
  return this.join('_');
};

console.log('arr.toString ', arr.toString()); // 1_2
console.log('arr.join ', arr.join('_'));
console.log('Array.prototype.toString.call ', Array.prototype.toString.call(arr)); // 1,2