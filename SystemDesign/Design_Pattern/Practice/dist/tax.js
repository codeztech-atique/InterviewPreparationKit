"use strict";
class TaxIn_2020 {
    calculateTax() {
        return 2020;
    }
}
class TaxIn_2022 {
    calculateTax() {
        return 2022;
    }
}
class TaxSheet {
    constructor(calculator) {
        this.calculator = calculator;
    }
    showTax() {
        console.log("Taxes:", this.calculator.calculateTax());
    }
}
const taxSheetData1 = new TaxSheet(new TaxIn_2020());
taxSheetData1.showTax();
const taxSheetData2 = new TaxSheet(new TaxIn_2022());
taxSheetData2.showTax();
module.exports = {};
