function inclineSomeComputers(n) {
    let ans = `${n} компьютер`; //стартовая строка
    let mod10 = n % 10;
    let mod100 = n % 100;
    if (mod10 === 1 && mod100 !== 11) { //Только когда 1 на конце мы имеем компьютер
    } else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) { //2 компьюетера, 22 компьюетера
        ans += 'а';
    } else {
        ans += 'ов'; //12 компьютеров, 16 компьютеров
    }
    return ans;
}
console.log(inclineSomeComputers(12)) //тестирование
