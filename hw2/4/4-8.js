var obj1 = {
  name: 'obj1',
  func: function() {
    var self = this;
    return function() {
      console.log(this);
      console.log(self);
    };
  },
};
var callback = obj1.func();
setTimeout(callback, 1000);