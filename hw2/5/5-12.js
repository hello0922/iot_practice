var createCar = function() {
  var fuel = Math.ceil(Math.random() * 10 + 10); // 연료(L)
  var power = Math.ceil(Math.random() * 3 + 2); // 연비(km / L)
  var moved = 0; // 총 이동거리
  var publicMembers = {
    get moved() {
      return moved;
    },
    run: function() {
      var km = Math.ceil(Math.random() * 6);
      var wasteFuel = km / power;
      if (fuel < wasteFuel) {
        console.log('이동불가');
        return;
      }
      fuel -= wasteFuel;
      moved += km;
      console.log(km + 'km 이동 (총 ' + moved + 'km). 남은 연료: ' + fuel);
    },
  };
  Object.freeze(publicMembers);
  return publicMembers;
};
var car = createCar();


console.log("fuel:" + car.fuel);
console.log("power:" + car.power);
car.run();
console.log("fuel:" + car.fuel);
console.log("power:" + car.power);

console.log("cheating! fuel=10000, power=10000");
car.fuel = 10000;
car.power = 10000;
console.log("fuel:" + car.fuel);
console.log("power:" + car.power);
car.run();