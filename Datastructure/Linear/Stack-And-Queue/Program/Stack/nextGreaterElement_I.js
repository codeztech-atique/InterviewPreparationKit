var nums1 = [1,2,1];
var nums2 = [1,2,1];
// var nums2 = [4,12,5,3,1,2,9,6]


const nextGreaterElement = (nums1, nums2) => {
    let res = new Map();
    for(let i = 0; i < nums2.length; i++) {
        for(let j = i; j < nums2.length; j++) {
            if(nums2[i] < nums2[j]) {
                res.set(nums2[i], nums2[j]);
                break;
            } else {
                res.set(nums2[i], -1);
            }
        }
    }

    for(let i = 0; i < nums1.length; i++) {
        if(res.has(nums1[i])) {
           nums1[i] = res.get(nums1[i])
        }
    }
    console.log(nums1);
}

nextGreaterElement(nums1, nums2);