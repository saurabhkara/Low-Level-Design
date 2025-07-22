//Liskov Susbtitution principle

//Example 1
class BaseBird {
    makeSound() { }
}

class Bird extends BaseBird {

    makeSound() {
        console.log("Birds make sound");
    }
    fly() {
        console.log("Birds can fly")
    }
}


class Sparrow extends Bird {
    makeSound(): void {
        console.log("Sparrow is making sound")
    }

    fly() {
        console.log("Sparrow can fly")
    }
}


class Pengiun extends BaseBird {
    makeSound(): void {
        console.log("Penguin can make sound")
    }
}


function makeBirdFly(bird: Bird) {
    bird.fly()
}

makeBirdFly(new Bird());
makeBirdFly(new Sparrow());
// makeBirdFly(new Pengiun()); // Cannot be used because penguine cannot fly

