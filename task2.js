function findCommonDivisors(numbers) {
    function findDivisors(num) {
        let divisors = new Set();
        for (let i = 1; i <= num; i++) {
            if ((num % i === 0) && (i !== 1)) {
                divisors.add(i);
            }
        }
        return divisors;
    }
    let commonDivisors = findDivisors(numbers[0]);
    for (let i = 1; i < numbers.length; i++) {
        let currentDivisors = findDivisors(numbers[i]);
        commonDivisors.forEach(divisor => {
            if(!currentDivisors.has(divisor)){
                commonDivisors.delete(divisor)
            }
        });
    }
    return Array.from(commonDivisors);
}

const inputNumbers = [24, 12, 36];
console.log(findCommonDivisors(inputNumbers));