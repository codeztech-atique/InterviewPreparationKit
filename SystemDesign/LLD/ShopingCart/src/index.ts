class CartItem {
    productId: string;
    quantity: number;
    price: number;
    constructor(productId: string, quantity: number, price: number) {
        this.productId = productId;
        this.quantity = quantity;
        this.price = price;
    }
}

class Cart_Service {
    private cart: Map<string, CartItem[]> = new Map();

    addToCart(userId: string, productId: string, quantity: number, price:number) {
        let userCart = this.cart.get(userId) || [];
        if(userCart) {
            let existingProduct = userCart.find((item) => item.productId === productId);
            if(existingProduct) {
                existingProduct.quantity += quantity;
            } else {
                userCart.push(new CartItem(productId, quantity, price));
            }
            this.cart.set(userId, userCart);
        } else {
            this.cart.set(userId, [new CartItem(productId, quantity, price)]);
        }
    }

    removeFromCart(userId: string, productId: string, quantity: number) {
        let userCart = this.cart.get(userId) || [];
        let updateCart = userCart?.filter((item) => item.productId != productId);
        this.cart.set(userId, updateCart);
    }

    getCart(userId: string) {
        return this.cart.get(userId);
    }
}

const cartService = new Cart_Service();
cartService.addToCart("user123", "product1", 2, 10.99);
cartService.addToCart("user123", "product2", 1, 5.99);
console.log(cartService.getCart("user123"));

console.log(cartService.getCart("user123"));
cartService.removeFromCart("user123", "product2", 2);
console.log(cartService.getCart("user123"));
