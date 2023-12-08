class Cart_Item {
    productId: string;
    quatity: number;
    price: number;
    constructor(productId: string, quatity: number, price: number) {
        this.productId = productId;
        this.quatity = quatity;
        this.price = price;
    }
}

class Cart_Service {
    private cart : Map<String, Cart_Item[]> = new Map();

    addToCart(userId: string, productId: string, quatity: number, price: number) {
        let userCart = this.cart.get(userId) || [];
        if(userCart) {
            let existingProduct = userCart.find((item) => item.productId == productId);
            if(existingProduct) {
                existingProduct.quatity += quatity;
            } else {
                userCart.push(new Cart_Item(productId, quatity, price));
            }
            this.cart.set(userId, userCart);
        } else {
            this.cart.set(userId, [new Cart_Item(productId, quatity,price)]);
        }
    }

    removeFromCart(userId: string, productId: string, quatity: number) {
        let userCart = this.cart.get(userId) || [];
        if(userCart) {
            let index = userCart.findIndex((item) => item.productId == productId);
            if(index != -1) {
                const data = userCart[index];
                if(data.quatity > 0) {
                    userCart[index].quatity -= quatity;

                    if(userCart[index].quatity === 0) {
                        userCart.splice(index, 1);   
                    }
                } else {
                    userCart.splice(index, 1);   
                }
            }
            this.cart.set(userId, userCart)
        }
    }

    getCart(userId: string) {
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

