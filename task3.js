function isPrime(num) { //проверка на то, простое ли число
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false; //если число делится на 2 или на 3 то оно составное

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false; // i идет до корня числа и проверяет делится ли число на что-то или нет
        i++;
    }

    return true; //если число ни на что не делится то возвращаем что оно простое.
}
function findPrimesInRange(min, max) {
    let primes = [];

    for (let i = min; i <= max; i++) { //проходимся по всем возможным числам
        if (isPrime(i)) {
            primes.push(i); //если число простое то кладем его в ответ.
        }
    }

    return primes;
}
const min = 11;
const max = 20;
console.log(findPrimesInRange(min, max));