function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i); //O(1)
    }
}
//O space(1)
function subtotals(array) {
    var subtotalArray = Array(array.length); // O(1)
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0; // O(n)
        for (var j = 0; j <= i; j++) {
            subtotal += array[j]; 
        }
        subtotalArray[i] = subtotal; // O(n)
    }
    return subtotalArray;
}
//O space(n)