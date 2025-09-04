// find and print all prime numbers between 1 and 100 using for loops

// const primes = [];
// for (let n = 2; n <= 100; n++) {
//     let isPrime = true;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) primes.push(n);
// }

// console.log("Primes between 1 and 100:", primes.join(", "));



console.log("Prime numbers:")
for (let num = 2; num <= 100; num++) {
    let count = 0;
    for (let i = 2; i <= num; i++) {
        if (num % i == 0) {
            count++;
        }
    }
    if (count == 1) {
        console.log(num);
    }
}


