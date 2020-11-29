var a = 10;
console.log('a = ', a);
var b = a;
console.log('b = ', b);
var obj1 = { c: 10, d: 'ddd' };
console.log('obj1.c = ', obj1.c);
console.log('obj1.d = ', obj1.d);
var obj2 = obj1;
console.log('obj2.c = ', obj2.c);
console.log('obj2.d = ', obj2.d);


console.log('===== after change =====');
b = 15;
console.log('a = ', a);
console.log('b = ', b);

obj2.c = 20;
console.log('obj1.c = ', obj1.c);
console.log('obj1.d = ', obj1.d);
console.log('obj2.c = ', obj2.c);
console.log('obj2.d = ', obj2.d);