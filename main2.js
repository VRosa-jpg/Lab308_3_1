// Need a break statement after finding the next prime number in loop
// Need to find the next prime number


// If it is a prime number
// Does not need a number because it is saying whether it is prime number
// Next time make a function like this to just verify whether it is true or not
// because you can use another function to output what is needed 
function isPrime(num) {
    if (num < 2) return false;
    // What happens if i dont use Math.sqrt? Understand it fundamentally.
    // Im adding to i to find if the num is divisible by another number.
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num%i === 0){
            return false;
        }
    }
    return true;
}

function nextPrime(num) {
    let next = num + 1;
    // Why until true?
    while(true) {
        // Practicing and understand how and when to do this.
        if (isPrime(next)) {
            return next;
        }
        next++;
    }
}

console.log(nextPrime(55))




