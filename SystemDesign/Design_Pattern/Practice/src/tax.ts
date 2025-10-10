export = {};

interface CalculateTax {
    calculateTax(): number;
}

class TaxIn_2020 implements CalculateTax {
    calculateTax() {
        return 2020;
    }
}

class TaxIn_2022 implements CalculateTax {
    calculateTax() {
        return 2022;
    }
}

class TaxSheet {
    constructor(private calculator: CalculateTax) {

    }

    showTax() {
        console.log("Taxes:", this.calculator.calculateTax());
    }
}

const taxSheetData1 = new TaxSheet(new TaxIn_2020());
taxSheetData1.showTax();

const taxSheetData2 = new TaxSheet(new TaxIn_2022());
taxSheetData2.showTax();