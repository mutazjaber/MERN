
// Number.prototype.isPrime = () => {
//     if (this <= 1) return false;
//     if (this <= 3) return true;
//     if (this % 2 === 0 || this % 3 === 0) return false;
//     let i = 5;
//     while (i * i <= this) {
//         if (this % i === 0 || this % (i + 2) === 0) return false;
//         i += 6;
//     }
//     return true;
// }

// Number.prototype.isPrime = function() {
//     for( let i=2; i<this; i++ ) {
//         if( this % i === 0 ) {
//             return false;
//         }
//     }
//     return true;
// }
// const { performance } = require('perf_hooks');
// const start = performance.now();
// let primeCount = 0;
// let num = 2; // for math reasons, 1 is considered prime
// while( primeCount < 1e4 ) {
//     if( num.isPrime() ) {
//         primeCount++;
//     }
//     num++;
// }
// console.log(`The 10,000th prime number is ${num-1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);




const { performance } = require('perf_hooks');

// recursive 
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n - 1 ) + rFib( n - 2 );
}

// iterative 
function iFib( n ) {
    const vals = [ 0, 1 ];
    while (vals.length - 1 < n) {
        let len = vals.length;
        vals.push( vals[len - 1] + vals[len - 2] );
    }
    return vals[n];
}

//  recursive O
const startRecursive = performance.now();
rFib(20);
const endRecursive = performance.now();
console.log(`recursive : ${endRecursive - startRecursive} milliseconds`);

// Measure the time taken by the iterative Fibonacci function
const startIterative = performance.now();
iFib(20);
const endIterative = performance.now();
console.log(`iterative: ${endIterative - startIterative} milliseconds`);

// const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
// const reversed1 = story.split("").reverse().join("");
// console.log(reversed1);