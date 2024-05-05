function Table(){
    this.printTable = function (n){
        const spaceForCharacter = (n * n).toString().length; //чтобы выравнивание работало для любых чисел,
        // берется длина максимального числа то есть квадрата входного числа для вывода таблицы
        console.log("".padStart(spaceForCharacter), ...[...Array(n).keys()].map((element) => (element + 1).toString().padStart(spaceForCharacter)));
        for(let i = 1; i <= n; i++){
            console.log(i.toString().padStart(spaceForCharacter), ...[...Array(n).keys()].map((element) => (element + 1) * i).map(num => num.toString().padStart(spaceForCharacter)));
        }
    }
}
let tb = new Table();
tb.printTable(10);