//Object oriented progrramminng is paradigm that is based on Classes and Objects. It is used to structure a software program into simple, reusable pieces of code blueprints (usually called classes), which are used to create individual instances of objects.

//Class is bluerint of object.

//Object is instance of class.

//Inheritance: Class can inherit methods and properties from another class.

class Animal {
  name = "";
  constructor(name) {
    this.name = name;
  }
  print() {
    console.log(this.name);
  }
}

const animal = new Animal("Dog");
animal.print();

class Human extends Animal {
  humanName = "";
  constructor(name, humanName) {
    super(name);
    this.humanName = humanName;
  }
  print() {
    console.log(this.name, this.humanName);
  }
}

const humanObj = new Human("Human", "John");
humanObj.print();

//Abstraction: Hiding the complexity and only showing the essential features of the object.

class Car {
  constructor() {
    this.carName = "BMW";
  }
  print() {
    console.log("Car Name: ", this.carName);
  }
  start() {
    console.log("Car Started");
  }
  stop() {
    console.log("Car Stopped");
  }
}

const car = new Car();
car.print();
car.start();
car.stop();

// Encapsulation in JavaScript refers to the concept of bundling data (properties) and the methods (functions) that operate on the data into a single unit or class. It also involves controlling access to the data by restricting direct access to some of the object's components, using getters and setters. This helps protect the object's internal state and ensures that the data is only modified in a controlled manner.
class BankAccount {
  #balance; // Private variable

  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  withdraw(amount) {
    if (amount > 0 && this.#balance >= amount) {
      this.#balance -= amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

//Polymorphism: Ability to perform a single action in different ways.
// 1.Parameter based polymorphism
// 2.Inheritance based polymorphism

class Animal {
  constructor() {
    this.name = "Animal";
  }
  sound() {
    console.log("Animal Sound");
  }
}

class Dog extends Animal {
  constructor() {
    super();
    this.name = "Dog";
  }
  sound() {
    console.log("Dog Barks");
  }
}
