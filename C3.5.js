class ElectricAppliance {
  constructor() {
    this.isWork = false;
  }
  turnOn(){
    if (!this.isWork) {
      this.isWork = true;
      console.log("Прибор включен");
    } else {
      console.log("Прибор уже включен");
    }
  }
  turnOff(){
    if (this.isWork) {
      this.isWork = false;
      console.log("Прибор выключен");
    } else {
      console.log("Прибор уже выключен");
    }
  }
}
  
class Kettle extends ElectricAppliance{
  constructor(brand, size){
    super();
    this.brand = brand;
    this.size = size;
  }
  boilWater(){
    console.log('Вода вскипела');
  }
};

class Blender extends ElectricAppliance {
  constructor(brand, power) {
    super();
    this.brand = brand;
    this.power = power;
  }
  mix() {
    console.log('Содержимое перемешано')
  }
}

let electrolux = new Kettle('electrolux', 2.5);
let bork = new Blender('bork', 2400);

electrolux.turnOn();
bork.mix();
console.log(electrolux);
console.log(bork);