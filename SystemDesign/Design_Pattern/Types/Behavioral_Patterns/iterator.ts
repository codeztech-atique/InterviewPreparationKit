exports = {};

class NameRepository {
  private names = ["Alice", "Bob", "Charlie"];

  public getIterator() {
    let index = 0;
    return {
      hasNext: () => index < this.names.length,
      next: () => this.names[index++],
    };
  }
}

// Usage
const repo = new NameRepository();
const it = repo.getIterator();

while (it.hasNext()) {
  console.log(it.next());
}
