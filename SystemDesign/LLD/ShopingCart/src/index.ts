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
            let existingItem = userCart.find((item) => item.productId == productId);
            if(existingItem) {
                existingItem.quatity += quatity;
            } else {
                userCart.push(new Cart_Item(productId, quatity, price));
            }
            this.cart.set(userId, userCart);
        } else {
            this.cart.set(userId, [new Cart_Item(productId, quatity, price)]);
        }
    }

    removeFromCart(userId: string, productId: string, quatity: number) {
        let userCart = this.cart.get(userId) || [];
        if(userCart) {
            let index = userCart.findIndex((item) => item.productId === productId);
            if(index) {
                let data = userCart[index];
                if(data.quatity <= 0) {
                    userCart.splice(index, 1);
                } else {
                    data.quatity -= quatity;
                    if(data.quatity <= 0) {
                        userCart.splice(index, 1);
                    }
                }
                this.cart.set(userId, userCart);
            } else {
                console.log("Product id is there in the cart.")
            }
        }
    }

    getCart(userId: string) {
        return this.cart.get(userId) || [];
    }
}

const cartService = new Cart_Service();
cartService.addToCart("atique1201", "PD-123", 2, 22);
cartService.addToCart("atique1201", "PD-124", 2, 22);
cartService.addToCart("atique1201", "PD-125", 2, 22);

console.log("Get Cart:", cartService.getCart("atique1201"));

cartService.removeFromCart("atique1201", "PD-125", 2);

console.log("Get Cart after remove:", cartService.getCart("atique1201"));