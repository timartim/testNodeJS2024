function findCommonDivisors(numbers) {
    function findDivisors(num) { //поиск делителей num.
        let divisors = new Set();
        for (let i = 1; i <= num; i++) {
            if ((num % i === 0) && (i !== 1)) { //если число делиться на какое то, кроме единицы, то добавляем его в сет ответов
                divisors.add(i);
            }
        }
        return divisors;
    }
    let commonDivisors = findDivisors(numbers[0]); //начальный делители
    for (let i = 1; i < numbers.length; i++) {
        let currentDivisors = findDivisors(numbers[i]);
        commonDivisors.forEach(divisor => {
            if(!currentDivisors.has(divisor)){
                commonDivisors.delete(divisor) //если какого то делителя нет у другого числа, то удаляем его из сета ответов
            }
        });
    }
    return Array.from(commonDivisors); // преобразуем сет к массиву и выводим
}

const inputNumbers = [24, 12, 36];
console.log(findCommonDivisors(inputNumbers));