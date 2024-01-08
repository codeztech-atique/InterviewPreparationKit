/*

https://leetcode.com/problems/product-of-array-except-self/

238. Product of Array Except Self
Medium
21.1K
1.2K
company
Amazon
Asana
company
Apple
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

*/

class ProductArray {
    constructor(nums) {
       this.nums = nums;
    }

    productArray() {
        let n = this.nums.length;
        let left = new Array(n).fill(1);
        let right = new Array(n).fill(1);

        let leftProduct = 1;
        for(let i = 1; i < this.nums.length; i++) {
            leftProduct *= this.nums[i - 1];
            left[i] = leftProduct;
        }

        let rightProduct = 1;
        for(let i = this.nums.length - 2; i >= 0; i--) {
            rightProduct *= this.nums[i + 1];
            right[i] = rightProduct;
        }

        let result = new Array(n).fill(1);
        for(let i = 0; i < this.nums.length; i++) {
            result[i] = left[i] * right[i];
        }
        return result;
    }
}


var productExceptSelf = function(nums) {
    const productArrClass = new ProductArray(nums);
    console.log(productArrClass.productArray());
};

productExceptSelf([1,2,3,4]);
productExceptSelf([-1,1,0,-3,3]);