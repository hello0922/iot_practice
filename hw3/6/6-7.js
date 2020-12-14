var arr = [1, 2, 4, 10];
// arr.hasOwnProperty(2); // true

console.log(arr);
console.log("1 ", arr.hasOwnProperty(1));
console.log("2 ", arr.hasOwnProperty(2));
console.log("3 ", arr.hasOwnProperty(3));
console.log("4 ", arr.hasOwnProperty(4));
arr.push(3);
console.log("4 after push(3) ", arr.hasOwnProperty(4));