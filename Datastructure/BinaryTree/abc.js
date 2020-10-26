/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var first="", second="", result="";
    var arr = [];
    for(var i=l1.length-1;i>=0;i--) {
        first+=l1[i];
    }
    for(var j=l2.length-1;j>=0;j--) {
        second+=l2[j];
    }
    console.log(first, second);
    var res1 = parseInt(first);
    var res2 = parseInt(second); 
    result = res1 + res2;
    console.log(result)
    result = result.toString();
    for(var x=result.length-1;x>=0;x--) {
        arr.push(parseInt(result.charAt(x)));
    }
    return arr;
 };

 console.log(addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]));