var nums1 = [1,2,3,4,3]
// var nums2 = [4,12,5,3,1,2,9,6]


const nextGreaterElement = (nums1) => {
    let res = new Map();
    for(let i = 0; i < nums1.length; i++) {
        for(let j = i; j < nums1.length; j++) {
            console.log(nums1[i], nums1[j], " --- Condition  Here")
            if(nums1[i] < nums1[j]) {
                res.set(nums1[i], nums1[j]);
                break;
            }
            else {
                if(!res.has(nums1[i])) {
                    res.set(nums1[i], -1);
                }
            }
        }
    }

    for(let i = 0; i < nums1.length; i++) {
        if(res.has(nums1[i])) {
            nums1[i] = res.get(nums1[i]);
        }
    }

    console.log(nums1);
}

nextGreaterElement(nums1);