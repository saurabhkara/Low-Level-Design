// The Decorator pattern is a structural design pattern that allows you to add new behavior or responsibilities to objects dynamically without modifying their original structure or class.

interface Coffee {
    cost(): number;
    description(): string;
}

// Concrete Component
class SimpleCoffee implements Coffee {
    cost(): number {
        return 5;
    }
    description(): string {
        return 'Simple Coffee'
    }
}

//Abstract Decorator
class CoffeeDecorator implements Coffee {
    constructor(private coffee: Coffee) { }

    cost(): number {
        return this.coffee.cost()
    }

    description(): string {
        return this.coffee.description()
    }
}


// Concrete Decorators

class MilkDecorator extends CoffeeDecorator {

    cost(): number {
        return super.cost() + 2;
    }

    description(): string {
        return super.description() + " with Milk"
    }
}

class SugarDecorator extends CoffeeDecorator {
    cost(): number {
        return super.cost() + 3;
    }

    description(): string {
        return super.description() + " with Sugar"
    }
}


const coffee = new SimpleCoffee();
console.log(coffee.description());

const milkCoffee = new MilkDecorator(coffee)
console.log("Description : ", milkCoffee.description());


const sugarCoffee = new SugarDecorator(milkCoffee);
console.log("Description : ", sugarCoffee.description())