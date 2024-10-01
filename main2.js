// Need a break statement after finding the next prime number in loop
// Need to find the next prime number


// If it is a prime number
function isPrime(num) {
    for (let i = 2; i < num; i++){
        if (num%i === 0){
            console.log(num)
            break
        }
    }
}

// The next prime number
// function nextPrime(n) {
//     for (let i = 1; n > i; i++){
//         if ( i == isPrime(num))
//             break
//     }
// }


// nextPrime(4)
