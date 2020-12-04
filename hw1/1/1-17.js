var copyObjectDeep = function(target) {
  var result = {};
  if (typeof target === 'object' && target !== null) {
    for (var prop in target) {
      result[prop] = copyObjectDeep(target[prop]);
    }
  } else {
    result = target;
  }
  return result;
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

var obj = {
  a: 1,
  b: {
    c: null,
    d: [1, 2],
  },
};
var obj2 = copyObjectDeep(obj);

obj2.a = 3;
obj2.b.c = 4;
obj.b.d[1] = 3;

printObjectDeep("obj", obj, 0);
printObjectDeep("obj2", obj2, 0);