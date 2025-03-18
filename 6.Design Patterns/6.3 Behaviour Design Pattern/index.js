// Behavioural Design pattern
// 1.1  Observer Design Pattern
// The Observer Design Pattern is a behavioral design pattern that defines a one-to-many dependency relationship between objects. In this pattern, when one object (the subject) changes its state, all its dependent objects (the observers) are notified and updated automatically.

class Subject {
  constructor() {
    this.observerList = [];
  }

  subscribe(observer) {
    this.observerList.push(observer);
  }

  unSubscribe(observer) {
    this.observerList = this.observerList.filter((item) => item != observer);
  }

  sendNotification(event) {
    this.observerList.forEach((observer) => {
      observer.update(event);
    });
  }
}

class Observer {
  name = "";
  constructor(observerName) {
    this.name = observerName;
  }

  update(notification) {
    console.log(`${this.name} observer sending update ${notification}`);
  }
}

const subject = new Subject();
const observer1 = new Observer("First Observer");
const observer2 = new Observer("Second Observer");
subject.subscribe(observer1);
subject.subscribe(observer2);
subject.sendNotification("Sell Started");
subject.sendNotification("Sell ending in 10mins");
