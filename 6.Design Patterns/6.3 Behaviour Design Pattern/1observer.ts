//The Observer pattern is a behavioral design pattern where an object (subject) maintains a list of dependents (observers) and notifies them automatically of any state changes, usually by calling one of their methods.


interface Observer {
    update(message: string): void;
}


interface Subject {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notifyObservers(message: string): void;
}


class NewsAgency implements Subject {
    private observers: Observer[] = [];

    subscribe(observer: Observer): void {
        this.observers.push(observer);
    }

    unsubscribe(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(message: string): void {
        for (const observer of this.observers) {
            observer.update(message);
        }
    }

    publishNews(news: string): void {
        console.log(`📰 News Published: ${news}`);
        this.notifyObservers(news);
    }
}



class EmailSubscriber implements Observer {
    constructor(private email: string) { }

    update(message: string): void {
        console.log(`📧 Email to ${this.email}: ${message}`);
    }
}

class MobileSubscriber implements Observer {
    constructor(private number: string) { }

    update(message: string): void {
        console.log(`📱 SMS to ${this.number}: ${message}`);
    }
}


const agency = new NewsAgency();

const emailUser = new EmailSubscriber("john@example.com");
const smsUser = new MobileSubscriber("9876543210");

agency.subscribe(emailUser);
agency.subscribe(smsUser);

agency.publishNews("New TypeScript 5.5 Released!");
