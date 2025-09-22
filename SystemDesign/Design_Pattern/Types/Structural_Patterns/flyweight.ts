exports = {};

class Character {
  constructor(public symbol: string, public font: string) {}
}

class CharacterFactory {
  private static chars: Map<string, Character> = new Map();

  public static getCharacter(symbol: string, font: string): Character {
    const key = symbol + font;
    if (!this.chars.has(key)) {
      this.chars.set(key, new Character(symbol, font));
    }
    return this.chars.get(key)!;
  }
}

// Usage
const c1 = CharacterFactory.getCharacter("a", "Arial");
const c2 = CharacterFactory.getCharacter("a", "Arial");

console.log(c1 === c2); // true (shared)
