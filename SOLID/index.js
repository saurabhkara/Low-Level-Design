//Single Responsibility Principle
// A class should have one, and only one, reason to change

class Invoice {
  constructor(customer, amount) {
    this.customer = customer;
    this.amount = amount;
  }

  print() {
    console.log(`Invoice for ${this.customer}: ${this.amount}`);
  }
}

class EmailSender {
  sendEmail(invoice) {
    console.log(
      `Sending email to ${invoice.customer} about their invoice of ${invoice.amount}`
    );
  }
}

// SRP adhered: Invoice only handles data related to the invoice, EmailSender only handles email logic.
const invoice = new Invoice("John Doe", 100);
const emailSender = new EmailSender();
emailSender.sendEmail(invoice);

//====================================================================================

// Open/Closed Principle

//Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.

class Shape {
  area() {
    throw new Error("Method 'area()' must be implemented.");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

// Using the classes without modifying them.
function calculateArea(shape) {
  return shape.area();
}

const rectangle = new Rectangle(5, 10);
const circle = new Circle(7);

console.log(calculateArea(rectangle));
console.log(calculateArea(circle));

// Liskov Substitution Principle(LSP)

//Objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program.

class Bird {
  fly() {
    console.log("Flying");
  }
}

class Sparrow extends Bird {
  fly() {
    console.log("Sparrow is flying");
  }
}

class Ostrich extends Bird {
  fly() {
    throw new Error("Ostriches can't fly!");
  }
}

// Using Liskov Substitution, we expect both sparrow and ostrich to be able to be treated as a Bird.
function makeBirdFly(bird) {
  bird.fly();
}

const sparrow = new Sparrow();
const ostrich = new Ostrich();

makeBirdFly(sparrow); // Sparrow is flying
makeBirdFly(ostrich); // Throws Error: Ostriches can't fly!

// Here, Ostrich violates the LSP because it cannot fly, breaking the expectation set by the Bird class. To adhere to LSP, Ostrich should not inherit from Bird if it doesn't follow the same behavior.

//====================================================================================
// Interface Segregation Principle(ISP)
//No client should be forced to depend on interfaces they don't use.

//The main idea behind ISP is to prevent the creation of "fat" or "bloated" interfaces that include methods that are not required by all clients.

class Printer {
  printDocument(document) {
    console.log(`Printing document: ${document}`);
  }
}

class Scanner {
  scanDocument(document) {
    console.log(`Scanning document: ${document}`);
  }
}

// Violating ISP by combining both Printer and Scanner functionalities into a single interface:
class MultifunctionPrinter extends Printer {
  scanDocument(document) {
    console.log(`Scanning document: ${document}`);
  }
}

// A better approach is to separate the concerns:
class PrintInterface {
  printDocument(document) {
    throw new Error("Method 'printDocument()' must be implemented.");
  }
}

class ScanInterface {
  scanDocument(document) {
    throw new Error("Method 'scanDocument()' must be implemented.");
  }
}

class PrinterNew extends PrintInterface {
  printDocument(document) {
    console.log(`Printing document: ${document}`);
  }
}

class ScannerNew extends ScanInterface {
  scanDocument(document) {
    console.log(`Scanning document: ${document}`);
  }
}

const printerNew = new PrinterNew();
printerNew.printDocument("Important File");

const scannerNew = new ScannerNew();
scannerNew.scanDocument("Important File");

//====================================================================================

// Dependency Inversion Principle(DIP)
//High-level modules should not depend on low-level modules. Both should depend on abstractions.

class Database {
  saveData(data) {
    console.log("Data saved:", data);
  }
}

class UserService {
  constructor(database) {
    this.database = database;
  }

  createUser(user) {
    this.database.saveData(user);
  }
}

// Violating DIP: UserService directly depends on Database (low-level module)
const database = new Database();
const userService = new UserService(database);
userService.createUser({ name: "John", age: 30 });

// Correcting DIP using abstraction:
class DatabaseInterface {
  saveData(data) {
    throw new Error("Method 'saveData()' must be implemented.");
  }
}

class UserServiceDIP {
  constructor(database) {
    this.database = database;
  }

  createUser(user) {
    this.database.saveData(user);
  }
}

class MongoDatabase extends DatabaseInterface {
  saveData(data) {
    console.log("Saving data to MongoDB:", data);
  }
}

const mongoDatabase = new MongoDatabase();
const userServiceDIP = new UserServiceDIP(mongoDatabase);
userServiceDIP.createUser({ name: "Jane", age: 25 });
