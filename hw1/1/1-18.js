var copyObjectViaJSON = function(target) {
  return JSON.parse(JSON.stringify(target));
};
var obj = {
  a: 1,
  b: {
    c: null,
    d: [1, 2],
    func1: function() {
      console.log(3);
    },
  },
  func2: function() {
    console.log(4);
  },
};

var printObjectDeep = function(prop_root, target, cnt)
{
  var space_str = "";
  for (i = 0; i < cnt; i++)
  {
    space_str = space_str + "  ";
  }
  if (typeof target === 'object' && target !== null) {
    console.log(space_str + prop_root + " : ");
    for (var prop in target) {
      printObjectDeep(prop, target[prop], cnt + 1);
    }
  } else {
    console.log(space_str + prop_root + " : " + target);
  }
}
var obj2 = copyObjectViaJSON(obj);

obj2.a = 3;
obj2.b.c = 4;
obj.b.d[1] = 3;

console.log("obj = " + JSON.stringify(obj));
console.log("obj2 = " + JSON.stringify(obj2));
// console.log(obj); // { a: 1. b: { c: null, d: [1, 3], func1: f() }, func2: f() }
// console.log(obj2); // { a: 3. b: { c: 4,    d: [1, 2] } }