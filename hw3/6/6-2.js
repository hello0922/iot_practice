var Constructor = function(name) {
  this.name = name;
};
Constructor.prototype.method1 = function() {return this.name};
Constructor.prototype.property1 = 'Constructor Prototype Property';
Constructor.prototype.property2 = 'This is Mingyu\'s custom property';

var instance = new Constructor('Instance');
console.dir(Constructor);
console.dir(instance);

console.dir(instance.method1());
console.dir(instance.property1);
console.dir(instance.property2);