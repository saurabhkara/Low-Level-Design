import { Product } from "./order"


export class CalculatePricing {

    calculatePricing(products: Product[]) {
        return products.reduce((total, item) => item.price + total, 0)
    }
}