
 
// Problem 1: Exercise 6
let d = 4;
let f = 16;

var x = Math.sqrt(d);
var y = Math.sqrt(f);

function sum_of_squares(x, y) {
    return x+y;
}
console.log(sum_of_squares(x, y))


// Problem 2: Exercise 9
const A = [2, -7, 5];
let i = 0;
for (; i<A.length; i++) {
    if (A[i]>0) {
        console.log(A[i] + " "+ "is positive")
    }
else if (A[i]<0) {
    console.log(A[i] + " "+ "is negative")
}
}

// Problem 3: Exercise 7
let a = 1; 
let b = 2; 
let c = 3;
function product(a, b, c) {
    return a*b*c;
}
console.log(product(a, b, c))