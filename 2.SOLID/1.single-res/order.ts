export class Product {
    name: string;
    id: string;
    price: number;

    constructor(id: string, name: string, price: number) {
        this.name = name;
        this.id = id;
        this.price = price;
    }
}

export class Order {
    products: Product[] = [];

    addProducts(item: Product) {
        this.products.push(item)
    }

    getProduct(id: string) {
        return this.products.find(item => item.id === id)
    }

    getAllProducts() {
        return this.products
    }

    removeProduct(id: string) {
        return this.products = this.products.filter(item => item.id !== id)
    }
}