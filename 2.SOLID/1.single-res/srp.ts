//Single Responsibility Principle

import { Invoice } from "./Invoice";
import { Product, Order } from "./order";
import { PaymentProcessor } from "./PaymentProcessor";
import { CalculatePricing } from "./pricingCalculator";


const order = new Order()

const product1 = new Product('1', 'Phone', 10000);
const product2 = new Product('2', 'Iphone', 50000)
order.addProducts(product1);
order.addProducts(product2);

const calculatePrice = new CalculatePricing();
const totalAmount = calculatePrice.calculatePricing(order.getAllProducts())

const invoice = new Invoice();
invoice.getInvoice(order.getAllProducts(), totalAmount);

const paymentProcessor = new PaymentProcessor();
paymentProcessor.processPayment(totalAmount)