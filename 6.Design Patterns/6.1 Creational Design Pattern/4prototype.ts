//The Prototype design pattern is a creational pattern used to create new objects by copying an existing object (a prototype), rather than instantiating new ones from scratch (with new).

interface IPrototype {
    name: string;
    age: number;
    clone(): IPrototype
}

class Person implements IPrototype {
    name = ''
    constructor(name: string, public age: number, public address: { city: string, pincode: number }) {
        this.name = name;
        this.age = age;
    }

    clone(): IPrototype {

        return new Person(this.name, this.age, { ...this.address })
    }
}


const original = new Person('Saurabh', 25, { city: 'Kolkata', pincode: 140225 });

const person1 = original.clone();
person1.name = "Kumar";
person1.age = 27;
console.log(person1)



//Other example

interface IShape {
    clone(): IShape;
    draw(): void
}

class Circle implements IShape {
    constructor(public radius: number, public color: string) { }
    clone(): IShape {
        return new Circle(this.radius, this.color)
    }
    draw(): void {
        console.log('Drawing circle of radius length of:', this.radius)
    }
}

const originCirlce = new Circle(25, 'red')

const duplicateCircle = originCirlce.clone();




