import { Product } from './order';

export class Invoice {
    getInvoice(products: Product[], amount: number) {

        console.log(`
Invoice on ${new Date().toDateString()}`)
        products.forEach((item) => {
            console.log(`${item.name} : ${item.price}`)
        })
        // console.log(`Total Price : `, this.calculatePricing());
        console.log(`Total Price : `, amount);
    }
}