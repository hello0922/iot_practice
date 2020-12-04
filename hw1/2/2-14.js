var a = 1;
var outer = function() {
  var b = 2;
  var inner = function() {
    console.dir(inner);
    console.log(b);
  };
  inner();
};
outer();