"use strict";
class CartItem {
    constructor(productId, quantity, price) {
        this.productId = productId;
        this.quantity = quantity;
        this.price = price;
    }
}
class Cart_Service {
    constructor() {
        this.cart = new Map();
    }
    addToCart(userId, productId, quantity, price) {
        let userCart = this.cart.get(userId) || [];
        if (userCart) {
            let existingProduct = userCart.find((item) => item.productId === productId);
            if (existingProduct) {
                existingProduct.quantity += quantity;
            }
            else {
                userCart.push(new CartItem(productId, quantity, price));
            }
            this.cart.set(userId, userCart);
        }
        else {
            this.cart.set(userId, [new CartItem(productId, quantity, price)]);
        }
    }
    removeFromCart(userId, productId, quantity) {
        let userCart = this.cart.get(userId) || [];
        let updateCart = userCart?.filter((item) => item.productId != productId);
        this.cart.set(userId, updateCart);
    }
    getCart(userId) {
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
