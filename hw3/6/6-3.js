var arr = [1, 2];
Array.prototype.constructor === Array; // true
arr.__proto__.constructor === Array; // true
arr.constructor === Array; // true

var arr2 = new arr.constructor(3, 4);
console.log(arr2); // [3, 4]

console.log('Array.prototype.constructor === Array;  ', Array.prototype.constructor === Array);
console.log('arr.__proto__.constructor === Array;  ', arr.__proto__.constructor === Array);
console.log('arr.constructor === Array;  ', arr.constructor === Array);