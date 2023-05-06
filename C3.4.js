function ElectricAppliance(){
  this.isWork = false;
}

ElectricAppliance.prototype.turnOn = function() {
  if (!this.isWork) {
    this.isWork = true;
    console.log("Прибор включен");
  } else {
    console.log("Прибор уже включен");
  }
};

ElectricAppliance.prototype.turnOff = function(){
  if (this.isWork) {
    this.isWork = false;
    console.log("Прибор выключен")
  } else {
    console.log("Прибор уже выключен")
  }
};

function Kettle(brand, size) {
  ElectricAppliance.call(this);
  this.brand = brand;
  this.size = size;
}

Kettle.prototype.boilWater = function(){
  console.log('Вода вскипела')
};

Kettle.prototype = new ElectricAppliance();

function Blender(brand, size) {
  ElectricAppliance.call(this);
  this.brand = brand;
  this.size = size;
}

Blender.prototype.mix = function(){
  console.log('Содержимое перемешано')
};

Blender.prototype = new ElectricAppliance();

let electrolux = new Kettle('electrolux', 2.5);
let bork = new Blender('bork', 2400);

electrolux.turnOn();
bork.mix();
console.log(electrolux);
console.log(bork);