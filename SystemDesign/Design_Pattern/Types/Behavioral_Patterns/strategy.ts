// ➡ Different ways of calculating late fee.

export {}

interface FeeStrategy { fee(days: number): number; }
class RegularFee implements FeeStrategy { fee(d:number){ return d*10; } }
class PremiumFee implements FeeStrategy { fee(d:number){ return d*20; } }

class Library {
  constructor(private strat: FeeStrategy) {}
  calcFee(days: number) { return this.strat.fee(days); }
}
console.log(new Library(new RegularFee()).calcFee(3)); // 30


