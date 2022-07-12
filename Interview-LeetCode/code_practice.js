// During odd-numbered jumps (i.e., jumps 1, 3, 5, ...), you jump to the index j such that arr[i] <= arr[j] and arr[j] is the smallest possible value. If there are multiple such indices j, you can only jump to the smallest such index j.
// During even-numbered jumps (i.e., jumps 2, 4, 6, ...), you jump to the index j such that arr[i] >= arr[j] and arr[j] is the largest possible value. If there are multiple such indices j, you can only jump to the smallest such index j.

// Input: arr = [10,13,12,14,15]
// Output: 2

// Input: arr = [2,3,1,1,4]
// Output: 3

// Input: arr = [5,1,3,4,2]
// Output: 3

// We need to bring memorization concept here. 

// https://www.youtube.com/watch?v=6XkY-RjIjS8

const arr = [5,1,3,4,2];

// Build a BST to maintain logN search/Insert
class TreeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }   
}
var oddEvenJumps = function(arr) {
    const len = arr.length // *
    const map = {} // { value: index } // *
    const memo = new Array(2).fill(null).map(i => new Array(len).fill(false)) // *
    console.log(memo)
    
    
    const root = new TreeNode(arr[len - 1])
    
    function InsertToBST(val) {
        function dfs(node){
            if(node.val < val) {
                if(!node.right) node.right = new TreeNode(val);
                else dfs(node.right);
            }
            if(node.val > val) {
                if(!node.left) node.left = new TreeNode(val);
                else dfs(node.left);
            }
        }
        
        dfs(root);
    }
    
    memo[0][len - 1] = memo[1][len - 1] = true; //*
    map[arr[len - 1]] = len - 1; // Storing Value and Key //*

    console.log(memo, map)
    
    //memo[0] odd jumps
    //memo[1] even jumps
    
    function getNextBig(base) { // odd jump
        if(map[base] !== undefined) {
            return base
        }
        let result = Infinity
        function dfs(node) {
            if(!node) return;
            
            if(node.val > base && node.val < result) {
                result = node.val;
                dfs(node.left)
            }
            
            if(node.val < base) {
                dfs(node.right);
            }
        }
        
        dfs(root)
        
        return result === Infinity ? false : result;
    }
    
    function getNextSmall(base) { //even jump
        if(map[base] !== undefined) {
            return base
        }
        let result = -Infinity
        function dfs(node) {
            if(!node) return;
            
            if(node.val < base && node.val > result) {
                result = node.val;
                dfs(node.right)
            }
            
            if(node.val > base) {
                dfs(node.left);
            }
        }
        
        dfs(root)
        
        return result === -Infinity ? false : result;
    }
    
    for(let i = len - 2; i >= 0; i--) {
        let nextBig = getNextBig(arr[i])
        let nextSmall = getNextSmall(arr[i])
        
        memo[0][i] = nextBig ? memo[1][map[nextBig]] : nextBig;
        memo[1][i] = nextSmall ? memo[0][map[nextSmall]] : nextSmall;
        map[arr[i]] = i;
        InsertToBST(arr[i])
    }
    
    return memo[0].filter(boo => boo).length
    
};



console.log(oddEvenJumps(arr));

