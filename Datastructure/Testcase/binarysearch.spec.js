const { expect } = require("chai");
const binarySearch = require("../Algorithms/Divide_and_conquer/binarySeach");

describe("Binary Search", () => {
  it("should return the correct index when element is found", () => {
    const arr = [1, 3, 5, 7, 9];
    const result = binarySearch(arr, 7);
    expect(result).to.equal(3);
  });

  it("should return -1 when element is not found", () => {
    const arr = [1, 3, 5, 7, 9];
    const result = binarySearch(arr, 4);
    expect(result).to.equal(-1);
  });

  it("should handle an empty array", () => {
    const result = binarySearch([], 1);
    expect(result).to.equal(-1);
  });
});

const binarySearch = require("./binarySearch");

test("finds the target in the array", () => {
  const arr = [1, 3, 5, 7, 9];
  expect(binarySearch(arr, 5)).toBe(2);
});

test("returns -1 when target not found", () => {
  const arr = [1, 3, 5, 7, 9];
  expect(binarySearch(arr, 4)).toBe(-1);
});

test("returns -1 for empty array", () => {
  expect(binarySearch([], 1)).toBe(-1);
});


