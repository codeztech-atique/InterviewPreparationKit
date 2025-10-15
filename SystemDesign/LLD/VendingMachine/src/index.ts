// Requirements -

// 1. Manange Inventory
// 2. Customer Selection
// 3. Customer Payment
// 4. Dispence product

// {
//     "UD-232323": { type: 'beverage', name: "lays",  stock: 21, price: 323},
//     "FD-234532": { type: 'snakes', name: "kurkure",  stock: 33, price: 323}
// }


enum ProductType {
    BEVERAGE = "beverage",
    SNACKS = "snacks"
}

enum CardType {
    CREDIT_CARD = "credit_card",
    UPI = "upi",
    DEBIT_CARD = "debit_card"
}

interface Inventory {
    add(type: ProductType, productId: string, name: string, stock: number, price: number) : boolean;
    remove(product: string, stock: number) : boolean
}

class VendingMachineInventory implements Inventory {
    inventory: Map<string, any>;
    constructor(inventory: Map<string, any>) {
        this.inventory = inventory;
    }


    add(type: ProductType, productId: string, name: string, stock: number, price: number) {
        if(this.inventory.has(productId)) {
            this.inventory.get(productId).stock += stock; 
        } else {
            this.inventory.set(productId, {type, name, stock, price});
        }
        return true;
    }

    remove(productId: string, stock: number) {
        if(this.inventory.has(productId)) {
            this.inventory.get(productId).stock -= stock;
            return true;
        } else {
            return false;
        }
    }
}

interface CustomerSelection {
    selection(type: ProductType, stock: number) : boolean;
}

interface Payment {
    makePayment(type: CardType, attribute: any, quatity: number, amount: number) : boolean
}

interface ValidatePayment {
    validateCreditCard(cardNo: number, expires: Date, cvv: number) : boolean
    validateUPI(id: string) : boolean
    validateDebitCard(cardNo: number, expires: Date, cvv: number): boolean
}

class ValidatePaymentSystem implements ValidatePayment {
    validateCreditCard(cardNo: number, expires: Date, cvv: number) {
        if(cardNo.toString().length == 16 && expires.getTime() > new Date().getTime() && cvv.toString().length == 3) {
            return true;
        } else {
            return false;
        }
    }

    validateUPI(id: string) {
        if(id.includes("okaxis") || id.includes("okicic") || id.includes("okhdfc")) {
            return true;
        } else {
            return false;
        }
    }

    validateDebitCard(cardNo: number, expires: Date, cvv: number) {
         if(cardNo.toString().length == 16 && expires.getTime() < new Date().getTime() && cvv.toString().length == 3) {
            return true;
        } else {
            return false;
        }
    }
}

class Customer implements CustomerSelection, Payment {
    vendingMachine: VendingMachineInventory;
    validatePayment: ValidatePaymentSystem;
    constructor(vendingMachine: any, validatePayment: any) {
        this.vendingMachine = vendingMachine;
        this.validatePayment = validatePayment;
    }

    selection(type: ProductType, quantity: number) {
        let allProducts = Object.keys(this.vendingMachine.inventory);
        let productId = "";
        for(let n of allProducts) {
            if(n.startsWith(type)) {
                productId = n;
            }
        }

        if(productId) {
            let updateInventory = this.vendingMachine.inventory.get(productId);
            if(updateInventory.stock >= quantity) {
                updateInventory.stock = updateInventory.stock - quantity;
                this.vendingMachine.inventory.set(productId, updateInventory);
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    makePayment(type: CardType, attribute: any, quatity: number, amount: number) {
        if(type == CardType.CREDIT_CARD) {
            if(this.validatePayment.validateCreditCard(attribute.cardNo, attribute.expires, attribute.cvv)) {
                return true;
            } else {
                return false;
            }
        } else if(type == CardType.DEBIT_CARD) {
            if(this.validatePayment.validateDebitCard(attribute.cardNo, attribute.expires, attribute.cvv)) {
                return true;
            } else {
                return false;
            }
        } else if(type == CardType.UPI) {
            if(this.validatePayment.validateUPI(attribute.upiId)) {
                return true;
            } else {
                return false;
            }
        }

        return false;
    }
}

class VendingMachine {
  private vendingMachineInventory: VendingMachineInventory;
  private validator: ValidatePaymentSystem;

  private selectedProductId: string | null = null;
  private selectedQuantity: number = 0;
  private isPaid: boolean = false;

  constructor(
    vendingMachineInventory?: VendingMachineInventory,
    validator: ValidatePaymentSystem = new ValidatePaymentSystem()
  ) {
    // Your VendingMachineInventory requires a Map in its ctor in your code,
    // so default to a fresh Map if none is provided.
    this.vendingMachineInventory =
      vendingMachineInventory ?? new VendingMachineInventory(new Map<string, any>());
    this.validator = validator;
  }

  // ----- Inventory helpers -----
  addProduct(
    type: ProductType,
    productId: string,
    name: string,
    stock: number,
    price: number
  ): boolean {
    return this.vendingMachineInventory.add(type, productId, name, stock, price);
  }

  // Increase stock by +stock (uses your remove() with a negative to increment)
  restock(productId: string, stock: number): boolean {
    return this.vendingMachineInventory.remove(productId, -stock);
  }

  // Decrease stock by stock
  reduceStock(productId: string, stock: number): boolean {
    return this.vendingMachineInventory.remove(productId, stock);
  }

  getInventory(): Map<string, any> {
    return this.vendingMachineInventory.inventory;
  }

  // ----- Selection flow -----
  select(productId: string, quantity: number): boolean {
    const item = this.vendingMachineInventory.inventory.get(productId);
    if (!item) return false;
    if (quantity <= 0) return false;
    if (item.stock < quantity) return false;

    this.selectedProductId = productId;
    this.selectedQuantity = quantity;
    this.isPaid = false; // reset paid state on new selection
    return true;
  }

  getPayableAmount(): number {
    if (!this.selectedProductId) return 0;
    const item = this.vendingMachineInventory.inventory.get(this.selectedProductId);
    if (!item) return 0;
    return item.price * this.selectedQuantity;
  }

  // ----- Payment flow -----
  pay(type: CardType, attributes: any): boolean {
    if (!this.selectedProductId || this.selectedQuantity <= 0) return false;

    let valid = false;
    if (type === CardType.CREDIT_CARD) {
      valid = this.validator.validateCreditCard(
        attributes.cardNo,
        attributes.expires,
        attributes.cvv
      );
    } else if (type === CardType.DEBIT_CARD) {
      valid = this.validator.validateDebitCard(
        attributes.cardNo,
        attributes.expires,
        attributes.cvv
      );
    } else if (type === CardType.UPI) {
      valid = this.validator.validateUPI(attributes.upiId);
    }

    this.isPaid = !!valid;
    return this.isPaid;
  }

  // ----- Dispense (finalize) -----
  dispense(): { productId: string; name: string; quantity: number; total: number } | null {
    if (!this.selectedProductId || !this.isPaid) return null;

    const item = this.vendingMachineInventory.inventory.get(this.selectedProductId);
    if (!item) return null;
    if (item.stock < this.selectedQuantity) return null; // safety

    // reduce stock and return receipt
    item.stock -= this.selectedQuantity;
    this.vendingMachineInventory.inventory.set(this.selectedProductId, item);

    const receipt = {
      productId: this.selectedProductId,
      name: item.name,
      quantity: this.selectedQuantity,
      total: item.price * this.selectedQuantity,
    };

    this.reset();
    return receipt;
  }

  cancelSelection(): void {
    this.reset();
  }

  // ----- internal -----
  private reset(): void {
    this.selectedProductId = null;
    this.selectedQuantity = 0;
    this.isPaid = false;
  }
}


// 1) Spin up machine (empty inventory by default)
const vm = new VendingMachine();

// 2) Add products
vm.addProduct(ProductType.SNACKS, "FD-234532", "Kurkure", 10, 30);
vm.addProduct(ProductType.BEVERAGE, "UD-232323", "Pepsi", 15, 50);

console.log("Inventory after add:", vm.getInventory());

// 3) Select item (e.g., 2 Pepsi)
const selected = vm.select("UD-232323", 2);
console.log("Selection OK?", selected); // true

// 4) Check payable amount
console.log("Payable:", vm.getPayableAmount()); // 100

// 5) Make payment (example: UPI)
const paid = vm.pay(CardType.UPI, { upiId: "atique@okhdfc" });
console.log("Payment OK?", paid); // true if UPI id passes your validator

// 6) Dispense and get receipt
const receipt = vm.dispense();
console.log("Receipt:", receipt);

// 7) Verify stock got reduced
console.log("Inventory after dispense:", vm.getInventory());
