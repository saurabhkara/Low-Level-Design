//SOLID Principle

### The SOLID principles are a set of five design principles in Object Oriented Programming language that help developers to write readable, maintainable, scalable and reusable code.

## S - Single Responsibility Principle(SRP)

- A Class should have only one reason to change, meaning it should have only one job or responsiblity.

## O - Open/Close Principle (OCP)

- Software entity(Classes, modules, functions) should be open for extension but closed for modification.
  Use interfaces or base classes to add functionality without changing existing code.

## L - Liskov Substitution Principle(LSP)

- Subtypes must be substitutable for their base types without breaking functionality.
- If S is a subtype of T, then objects of type T in a program may be replaced with objects of type S without altering any of the desirable properties of that program.

## I - Interface Segregation Priciple(ISP)

- Clients should not be forced to depend on methods they don’t use. Break large interfaces into smaller, more specific ones
- Clients should not be forced to depend on methods that they do not use.

## D - Dependency Inversion Priciple(DIP)

- High-level modules should not depend on low-level modules. Both should depend on the abstraction.Abstractions should not depend on details. Details should depend on abstractions.

//reference https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898
// https://blog.algomaster.io/p/solid-principles-explained-with-code

### Practice

- To run typescript file, there are multiple ways to run typescript file

### First way

1.  tsc fileName.ts
2.  node fileName.ts

### Second way

using ts-node, install it globally

- ts-node fileName.ts
