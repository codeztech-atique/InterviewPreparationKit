// Data sits like this - 

// In Map - Movie Id
// { 'maa' : { category : executive, people: 3, amount: 323, ticketId: 344332234, showTime: 15 Oct, 2025 10.40 PM } }

enum Movies {
    HORROR = "maa",
    COMEDY = "golmaal-3",
    ACTION = "war-2"
}

enum SettingCategory {
    EXECUTIVE = "executive",
    ROYAL = "royal",
    RECLINER = "recliner"
}

enum CardType {
    CreditCard = "creditCard",
    DebitCard = "debitCard",
    UPI = "upi"
}

interface PaymentStrategy {
    creditCard(cardNo: number, expires: Date, cvv: number) : boolean;
    debitCard(cardNo: number, expires: Date, cvv: number) : boolean;
    upi(id: string) : boolean
}

class Payment implements PaymentStrategy {
    creditCard(cardNo: number, expires: Date, cvv: number) {
        if(cardNo.toString().length == 16 && expires.getTime() > Date.now() && cvv.toString().length == 3) {
            return true;
        } else {
            return false;
        }
    }

    debitCard(cardNo: number, expires: Date, cvv: number) {
        if(cardNo.toString().length == 16 && expires.getTime() > Date.now() && cvv.toString().length == 3) {
            return true;
        } else {
            return false;
        }
    }

    upi(id: string) {
        if(id.includes("okaxis") || id.includes("okicic") || id.includes("oksbi")) {
            return true;
        } else {
            return false;
        }
    }
}

interface PricingStrategy {
    computePrice(category: SettingCategory, noOfseats: number): number
}

class Pricing implements PricingStrategy {
    executive: number;
    royal: number;
    recliner: number;
    constructor(executive: number, royal: number, recliner: number) {
        this.executive = executive;
        this.royal = royal;
        this.recliner = recliner;
    }

    computePrice(category: SettingCategory, noOfseats: number) {
        if(category == SettingCategory.EXECUTIVE) {
            return this.executive * noOfseats;
        } else if(category == SettingCategory.ROYAL) {
            return this.royal * noOfseats;
        } else {
            return this.recliner * noOfseats;
        }
    }
}

class TicketDetails {
    movieDetails: Map<string, any>;
    constructor(movieDetails: any) {
        this.movieDetails = movieDetails;
    }
}
// { 'maa' : { category : executive, people: 3, amount: 323, ticketId: 344332234, showTime: 15 Oct, 2025 10.40 PM } }

class BookMyShow {
    pricing: Pricing;
    payment: Payment;
    movieDetails: Map<string, any>;
    constructor(pricing: Pricing, payment: Payment) {
        this.pricing = pricing;
        this.payment = payment;
        this.movieDetails = new Map();
    }

    generateTicket(movieName: Movies) {
        return movieName+"-"+Math.random() * 1_000_000 +"-"+Date.now();
    }

    confirmBooking(movieName: Movies, category: SettingCategory, people: number, amount: number, ticketId: string, showTime: Date) {
        if(!this.movieDetails.has(movieName)) {
            this.movieDetails.set(movieName, new Set());
        }
        this.movieDetails.get(movieName).add({ category, people, amount, ticketId, showTime });
    }

    bookTicket(movieName: Movies, showTime: Date, category: SettingCategory, noOfPeople: number, cardType: CardType, cardDetails: any) {
        let price = this.pricing.computePrice(category, noOfPeople);
        let ticket = this.generateTicket(movieName);
        if(movieName == Movies.HORROR || movieName == Movies.COMEDY || movieName == Movies.ACTION) {
            switch(cardType) {
                case CardType.CreditCard : 
                    if(this.payment.creditCard(cardDetails.cardNo, cardDetails.expires, cardDetails.cvv)) {
                        this.confirmBooking(movieName, category, noOfPeople, price, ticket, showTime);
                    } else {
                        return { message: "Credit Card is not valid !!!" }
                    }
                    break;

                case CardType.DebitCard:
                    if(this.payment.debitCard(cardDetails.cardNo, cardDetails.expires, cardDetails.cvv)) {
                        this.confirmBooking(movieName, category, noOfPeople, price, ticket, showTime);
                    } else {
                        return { message: "Debit Card is not valid !!!" }
                    }
                    break;

                case CardType.UPI: 
                    if(this.payment.upi(cardDetails.upi)) {
                        this.confirmBooking(movieName, category, noOfPeople, price, ticket, showTime);
                    } else {
                        return { message: "Credit Card is not valid !!!" }
                    }
                    break;
            }
        } else {
            return {
                message: "Movie not found !!!"
            }
        }
    }
    
    getBookingDetails() {
        return this.movieDetails;
    }
}
 
// { 'maa' : { category : executive, people: 3, amount: 323, ticketId: 344332234, showTime: 15 Oct, 2025 10.40 PM } }

// bookTicket(movieName: Movies, showTime: Date, category: SettingCategory, noOfPeople: number, cardType: CardType, cardDetails: any) {
// cardNo: number, expires: Date, cvv: number

const cardDetails = {
    cardNo: 4523232353219044,
    expires: new Date(Date.now() + 4 * 60 * 60 * 1000),
    cvv: 543
}

const upiDetails = {
   upi: "atique1201@okaxis"
}

const bookMyShow = new BookMyShow(new Pricing(150, 350, 999), new Payment());

bookMyShow.bookTicket(Movies.HORROR, new Date(Date.now() + 2 * 60 * 60 * 1000), SettingCategory.EXECUTIVE, 3, CardType.CreditCard, cardDetails);
bookMyShow.bookTicket(Movies.ACTION, new Date(Date.now() + 2 * 60 * 60 * 1000), SettingCategory.RECLINER, 3, CardType.DebitCard, cardDetails);
bookMyShow.bookTicket(Movies.COMEDY, new Date(Date.now() + 2 * 60 * 60 * 1000), SettingCategory.ROYAL, 3, CardType.UPI, upiDetails);

console.log(bookMyShow.getBookingDetails());