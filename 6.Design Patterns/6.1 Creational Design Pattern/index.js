// 1. Creational Design Pattern
// 1.1 Singleton Pattern

//Using Class
class Singleton {
  static #instance = null;

  constructor(name) {
    if (Singleton.#instance != null) {
      return Singleton.#instance;
    }

    this.name = name;
    Singleton.#instance = this;
  }

  getName() {
    console.log("Instance name:", this.name);
  }
}

const single1 = new Singleton("First object");
const single2 = new Singleton("Second Object");

console.log(single1 === single2);
console.log(single1.getName());
console.log(single2.getName());

// Using IIFE

const instance = (function () {
  let instance = null;
  function createInstance() {
    return {
      data: "Single Instance created",
      getData: function () {
        return instance;
      },
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const iifeInstance1 = instance.getInstance();
const iifeInstance2 = instance.getInstance();

console.log(iifeInstance1 === iifeInstance2);

//1.2 Factory Design pattern

class Sedan {
  constructor(vehicleNumber) {
    this.vehicleNumber = vehicleNumber;
  }

  drive() {
    console.log("Driving Sedan", this.vehicleNumber);
  }
}

class SUV {
  constructor(vehicleNumber) {
    this.vehicleNumber = vehicleNumber;
  }

  drive() {
    console.log("Driving SUV", this.vehicleNumber);
  }
}

function VehicleFactory(carType, vehicleNumber) {
  if (carType === "SUV") {
    return new SUV(vehicleNumber);
  } else if (carType === "SEDAN") {
    return new Sedan(vehicleNumber);
  } else {
    throw "Please enter correct Car type";
  }
}

const carfact1 = VehicleFactory("SUV", "8656S");
const carfact2 = VehicleFactory("SEDAN", "6896SD");

console.log(carfact1.drive());
console.log(carfact2.drive());
