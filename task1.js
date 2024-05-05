function inclineSomeComputers(n) {
    let ans = `${n} компьютер`;
    let mod10 = n % 10;
    let mod100 = n % 100;
    if (mod10 === 1 && mod100 !== 11) {
    } else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
        ans += 'а';
    } else {
        ans += 'ов';
    }
    return ans;
}
console.log(inclineSomeComputers(12))
