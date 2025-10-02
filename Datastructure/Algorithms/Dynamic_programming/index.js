class DPExamples {
    // Top‑Down Fibonacci with memoization
    static fibTopDown(n, memo = new Map()) {
        if (n <= 1) return n;
        if (memo.has(n)) return memo.get(n);
        const val = this.fibTopDown(n - 1, memo) + this.fibTopDown(n - 2, memo);
        memo.set(n, val);
        return val;
    }


    // Bottom‑Up Fibonacci with tabulation
    static fibBottomUp(n) {
        if (n <= 1) return n;
        let a = 0, b = 1;
        for (let i = 2; i <= n; i++) {
            const c = a + b;
            a = b; b = c;
        }
        return b;
    }


    // Top‑Down Climbing Stairs
    static climbTopDown(n, memo = new Map()) {
        if (n <= 2) return n;
        if (memo.has(n)) return memo.get(n);
        const ans = this.climbTopDown(n - 1, memo) + this.climbTopDown(n - 2, memo);
        memo.set(n, ans);
        return ans;
    }


    // Bottom‑Up Climbing Stairs
    static climbBottomUp(n) {
        if (n <= 2) return n;
        let a = 1, b = 2;
        for (let i = 3; i <= n; i++) {
            const c = a + b;
            a = b; b = c;
        }
        return b;
    }
}


// Usage:
console.log(DPExamples.fibTopDown(6)); // 8
console.log(DPExamples.fibBottomUp(6)); // 8
console.log(DPExamples.climbTopDown(5)); // 8
console.log(DPExamples.climbBottomUp(5));// 8