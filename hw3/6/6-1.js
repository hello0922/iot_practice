var Person = function(name) {
  this._name = name;
};
Person.prototype.getName = function() {
  return this._name;
};

var mgpark = new Person('Mingyu Park');
console.log(Person);
console.log(new Person('mgpark'));
console.log(mgpark);
console.log(mgpark.getName());
