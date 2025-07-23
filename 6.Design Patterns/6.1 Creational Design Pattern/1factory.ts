//The Factory Pattern is a creational design pattern that provides an interface for creating objects, but lets subclasses decide which class to instantiate.
// In simple terms: You call a function to get an object, without worrying about the actual class or constructor used.


interface INotification {
    send(message: string): void;
}


class EmailNotification implements INotification {
    send(message: string): void {
        console.log(`📧 Sending EMAIL: ${message}`);
    }
}

class SMSNotification implements INotification {
    send(message: string): void {
        console.log(`📱 Sending SMS: ${message}`);
    }
}

class PushNotification implements INotification {
    send(message: string): void {
        console.log(`🔔 Sending PUSH notification: ${message}`);
    }
}


class NotificationFactory {
    static createNotification(type: string): INotification {
        switch (type.toLowerCase()) {
            case "email":
                return new EmailNotification();
            case "sms":
                return new SMSNotification();
            case "push":
                return new PushNotification();
            default:
                throw new Error("Invalid notification type");
        }
    }
}


const type = "email"; // Could be dynamic input
const notification = NotificationFactory.createNotification(type);
notification.send("Hello from the Factory Pattern!");
