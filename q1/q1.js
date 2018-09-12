//Find the maximum of two numbers without using any if-else statements, branching, or direct comparisons.

//Only Works for positive a and b.
function max(a, b){
    let diff = Math.abs(a - b); //|3 - 100| = |-97| = 97
    let sum = Math.abs(a + b); //|3 + 100| = |103| = 103

    return((diff + sum)/2); // (97 + 103)/2 = 200/2 = 100
}

//test
console.log(max(3, -100));
console.log(max(1, 2));