var copyObjectViaJSON = function(target) {
  return JSON.parse(JSON.stringify(target));
};

var obj1 = {
  name: 'obj1',
  func: function() {
    return function() {
      console.log(obj1.name);
    };
  },
};

var obj3 = {
  name: 'obj3',
  func: function() {
    var self = this;
    return function() {
      console.log(self.name);
    };
  },
};

var obj2 = copyObjectViaJSON(obj1);
obj2.name = "obj2";
obj2.func = obj1.func;

var obj4 = copyObjectViaJSON(obj3);
obj4.name = "obj4";
obj4.func = obj3.func;

console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);

setTimeout(obj1.func(), 1000);
setTimeout(obj2.func(), 1000);
setTimeout(obj3.func(), 1000);
setTimeout(obj4.func(), 1000);