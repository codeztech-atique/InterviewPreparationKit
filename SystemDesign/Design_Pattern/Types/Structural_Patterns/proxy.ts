// ➡ Control access (cache).

export {}

class RealLibrary {
  getBook(title: string) { console.log("Fetching:", title); return title; }
}

class ProxyLibrary {
  private cache = new Map<string,string>();
  constructor(private real = new RealLibrary()) {}
  getBook(title: string) {
    if (!this.cache.has(title)) this.cache.set(title, this.real.getBook(title));
    return this.cache.get(title);
  }
}

const lib = new ProxyLibrary();
lib.getBook("DSA"); // fetches
lib.getBook("DSA"); // cached


