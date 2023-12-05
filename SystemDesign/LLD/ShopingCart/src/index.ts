// CartService.ts

interface CartItem {
    product_id: string;
    quantity: number;
    price: number;
}

class CartService {
    private cart: Map<string, CartItem[]> = new Map();

    addToCart(userId: string, productId: string, quantity: number, price: number): void {
        const userCart = this.cart.get(userId) || [];
        const existingItem = userCart.find(item => item.product_id === productId);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            userCart.push({ product_id: productId, quantity, price });
        }

        this.cart.set(userId, userCart);
    }

    removeFromCart(userId: string, productId: string): void {
        const userCart = this.cart.get(userId) || [];
        const updatedCart = userCart.filter(item => item.product_id !== productId);
        this.cart.set(userId, updatedCart);
    }

    updateQuantity(userId: string, productId: string, quantity: number): void {
        const userCart = this.cart.get(userId) || [];
        const updatedCart = userCart.map(item =>
            item.product_id === productId ? { ...item, quantity } : item
        );
        this.cart.set(userId, updatedCart);
    }

    getCart(userId: string): CartItem[] {
        return this.cart.get(userId) || [];
    }
}

// Example Usage
const cartService = new CartService();
cartService.addToCart("user123", "product1", 2, 10.99);
cartService.addToCart("user123", "product2", 1, 5.99);
console.log(cartService.getCart("user123"));
cartService.updateQuantity("user123", "product1", 5);
console.log(cartService.getCart("user123"));
cartService.removeFromCart("user123", "product2");
console.log(cartService.getCart("user123"));
