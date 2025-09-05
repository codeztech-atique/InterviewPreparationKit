// ➡ Check request step by step.

export {};

type Req = { user: string, book: string, ok?: boolean };
abstract class Handler {
  next?: Handler;
  setNext(h: Handler){ this.next = h; return h; }
  handle(r: Req){ this.process(r); this.next?.handle(r); }
  protected abstract process(r: Req): void;
}
class Auth extends Handler { protected process(r: Req){ r.ok = !!r.user; } }
class Validate extends Handler { protected process(r: Req){ if(!r.book) r.ok=false; } }
const chain = new Auth(); chain.setNext(new Validate());
const req: Req = { user:"Atique", book:"DSA" };
chain.handle(req);
console.log(req.ok); // true
