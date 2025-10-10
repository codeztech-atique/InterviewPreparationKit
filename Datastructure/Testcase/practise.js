const { expect } = require("chai");

const binarySearch = require("../Algorithms/Divide_and_conquer/binarySeach");


describe("Binary search problem:", () => {
    it("Result should be corrected:", () => {
        const arr = [3,4,3,2,3];
        const result = binarySearch(arr);
        expect(result).to.equal(3);
    })
})
