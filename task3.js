function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}
function findPrimesInRange(min, max) {
    let primes = [];

    for (let i = min; i <= max; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}
const min = 11;
const max = 20;
console.log(findPrimesInRange(min, max));