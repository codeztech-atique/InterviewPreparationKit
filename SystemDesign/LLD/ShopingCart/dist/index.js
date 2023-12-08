"use strict";
class Cart_Item {
    constructor(productId, quatity, price) {
        this.productId = productId;
        this.quatity = quatity;
        this.price = price;
    }
}
class Cart_Service {
    constructor() {
        this.cart = new Map();
    }
    addToCart(userId, productId, quatity, price) {
        let userCart = this.cart.get(userId) || [];
        if (userCart) {
            let existingProduct = userCart.find((item) => item.productId == productId);
            if (existingProduct) {
                existingProduct.quatity += quatity;
            }
            else {
                userCart.push(new Cart_Item(productId, quatity, price));
            }
            this.cart.set(userId, userCart);
        }
        else {
            this.cart.set(userId, [new Cart_Item(productId, quatity, price)]);
        }
    }
    removeFromCart(userId, productId, quatity) {
        let userCart = this.cart.get(userId) || [];
        if (userCart) {
            let index = userCart.findIndex((item) => item.productId == productId);
            if (index != -1) {
                const data = userCart[index];
                if (data.quatity > 0) {
                    userCart[index].quatity -= quatity;
                    if (userCart[index].quatity === 0) {
                        userCart.splice(index, 1);
                    }
                }
                else {
                    userCart.splice(index, 1);
                }
            }
            this.cart.set(userId, userCart);
        }
    }
    getCart(userId) {
        return this.cart.get(userId) || [];
    }
}
const cartService = new Cart_Service();
cartService.addToCart("atique1201", "PODM-1939", 2, 12);
cartService.addToCart("atique1201", "PODM-1929", 2, 11);
cartService.addToCart("atique1201", "PODM-1919", 2, 19);
const getCart = cartService.getCart("atique1201");
console.log("Your cart:", getCart);
const removeFromCart = cartService.removeFromCart("atique1201", "PODM-1919", 1);
console.log("After remove your cart:", getCart);
