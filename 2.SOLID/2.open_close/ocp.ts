interface IPaymentProcessor {
    processingPayment(amount: number): void
}

class PaymentProcessor {

    //Polymorphic means it can accept multiple type of instance payment
    paymentProcess: IPaymentProcessor;
    constructor(paymentProcessor: IPaymentProcessor) {
        this.paymentProcess = paymentProcessor;
    }
    processingPayment(amount: number) {
        this.paymentProcess.processingPayment(amount)
    }
}

class CreditCardPaymentProcessor implements IPaymentProcessor {
    processingPayment(amount: number): void {
        console.log(`Processing payment using credit card of`, amount)
    }
}

class PaypalPaymentProcessor implements IPaymentProcessor {
    processingPayment(amount: number): void {
        console.log('Processing payment using Paypal of ', amount)
    }
}

const creditCardProcessor = new CreditCardPaymentProcessor();

const paypalPaymentProcessor = new PaypalPaymentProcessor();

const paymentProcessor = new PaymentProcessor(paypalPaymentProcessor);
paymentProcessor.processingPayment(500)



// paymentProcessor.processingPayment()