var a = 10;
var b = a;
var obj1 = { c: 10, d: 'ddd' };
var obj2 = obj1;

console.log('a = ', a);
console.log('b = ', b);
console.log('obj1.c = ', obj1.c);
console.log('obj1.d = ', obj1.d);
console.log('obj2.c = ', obj2.c);
console.log('obj2.d = ', obj2.d);

b = 15;
obj2 = { c: 20, d: 'ddd' };

console.log('===== after change =====')

console.log('a = ', a);
console.log('b = ', b);
console.log('obj1.c = ', obj1.c);
console.log('obj1.d = ', obj1.d);
console.log('obj2.c = ', obj2.c);
console.log('obj2.d = ', obj2.d);