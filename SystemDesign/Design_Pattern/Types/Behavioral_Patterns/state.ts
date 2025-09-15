// ➡ Library loan changes states.

export {}

interface State { next(): State; name(): string; }
class Requested implements State { next(){ return new Approved(); } name(){ return "Requested"; } }
class Approved implements State { next(){ return new Returned(); } name(){ return "Approved"; } }
class Returned implements State { next(){ return this; } name(){ return "Returned"; } }

class Loan {
  constructor(public state: State = new Requested()) {}
  progress(){ this.state = this.state.next(); }
}
const loan = new Loan();
console.log(loan.state.name()); // Requested
loan.progress(); console.log(loan.state.name()); // Approved
