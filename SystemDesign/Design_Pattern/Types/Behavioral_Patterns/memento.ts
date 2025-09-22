exports = {};

class EditorMemento {
  constructor(public readonly content: string) {}
}

class Editor {
  private content: string = "";

  type(words: string) {
    this.content += words;
  }

  save(): EditorMemento {
    return new EditorMemento(this.content);
  }

  restore(memento: EditorMemento) {
    this.content = memento.content;
  }

  getContent() {
    return this.content;
  }
}

// Usage
const editor = new Editor();
editor.type("Hello ");
editor.type("World!");

const saved = editor.save();

editor.type(" Extra text...");
console.log(editor.getContent()); // Hello World! Extra text...

editor.restore(saved);
console.log(editor.getContent()); // Hello World!
