class Heap {
    constructor(cmp = (a, b) => ( a - b)) {
        this.data = [];
        this.cmp = cmp;
    }

    size() {
        return this.data;
    }

    peek(val) {
        return this.data[0];
    } 
}