var car = {
  fuel: Math.ceil(Math.random() * 10 + 10), // 연료(L)
  power: Math.ceil(Math.random() * 3 + 2), // 연비(km/L)
  moved: 0, // 총 이동거리
  run: function() {
    var km = Math.ceil(Math.random() * 6);
    var wasteFuel = km / this.power;
    if (this.fuel < wasteFuel) {
      console.log('이동불가');
      return;
    }
    this.fuel -= wasteFuel;
    this.moved += km;
    console.log(km + 'km 이동 (총 ' + this.moved + 'km). 남은 연료: ' + this.fuel);
  },
};

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