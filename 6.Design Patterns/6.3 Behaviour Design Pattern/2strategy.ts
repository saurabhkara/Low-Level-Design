//Defines a family of algorithms, encapsulates each one, and makes them interchangeable. The client can choose the appropriate algorithm at runtime.


//  Define a Strategy Interface

interface PaymentStrategy {
    pay(amount: number): void;
}

// Create Concrete Strategies

class CreditCardPayment implements PaymentStrategy {
    constructor(private cardNumber: string) { }

    pay(amount: number): void {
        console.log(`Paid ₹${amount} using Credit Card: ${this.cardNumber}`);
    }
}

class PayPalPayment implements PaymentStrategy {
    constructor(private email: string) { }

    pay(amount: number): void {
        console.log(`Paid ₹${amount} using PayPal account: ${this.email}`);
    }
}

class UpiPayment implements PaymentStrategy {
    constructor(private upiId: string) { }

    pay(amount: number): void {
        console.log(`Paid ₹${amount} using UPI: ${this.upiId}`);
    }
}


// Create the Context

class PaymentContext {
    private strategy!: PaymentStrategy;

    // Set strategy dynamically
    setPaymentStrategy(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    checkout(amount: number) {
        if (!this.strategy) {
            console.log("Payment strategy not set!");
            return;
        }
        this.strategy.pay(amount);
    }
}


// Client code 

const paymentContext = new PaymentContext();

// Pay with Credit Card
paymentContext.setPaymentStrategy(new CreditCardPayment("1234-5678-9876"));
paymentContext.checkout(500);

// Pay with PayPal
paymentContext.setPaymentStrategy(new PayPalPayment("user@example.com"));
paymentContext.checkout(1200);

// Pay with UPI
paymentContext.setPaymentStrategy(new UpiPayment("user@upi"));
paymentContext.checkout(750);