//The Singleton is a creational design pattern that ensures a class has only one instance, and provides a global point of access to that instance.

// You need a single shared resource like:
// Logging service
// Database connection
// Configuration manager
// Caching layer

class Singleton {
    private static instance: Singleton;

    private constructor() {
        console.log('Singleton instance has been created ')
    }

    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton()
        }
        return Singleton.instance
    }

    public logger(message: string) {
        console.log("Log:", message)
    }
}

const obj1 = Singleton.getInstance();
obj1.logger('hello there');

const obj2 = Singleton.getInstance();
obj1.logger("Hiiiiiii")

console.log(obj1 === obj2)