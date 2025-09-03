// dependency.ts
export {};
class Printer {
  print(msg: string) { console.log("Printing:", msg); }
}

class SystemReport {                 // <-- renamed from Report
  generate(printer: Printer) {       // dependency: uses Printer temporarily
    printer.print("System Design Report");
  }
}

const report = new SystemReport();
report.generate(new Printer());
