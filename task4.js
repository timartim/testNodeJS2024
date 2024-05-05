function Table(){
    this.printTable = function (n){
        const spaceForCharacter = (n * n).toString().length; //чтобы выравнивание работало для любых чисел,
        // берется длина максимального числа то есть квадрата входного числа для вывода таблицы
        //В строке 6 сначала берется отступ в spaceForCharacter, далее с помощью 2-х spread синтаксисов и функции map,я получаю числа от 1 до n, где на каждую строку отводится минимум spaceForCharacter символов.
        console.log("".padStart(spaceForCharacter), ...[...Array(n).keys()].map((element) => (element + 1).toString().padStart(spaceForCharacter)));
        for(let i = 1; i <= n; i++){
            //здесь делаю тоже самое что в строке 6, но еще вывожу текущую строку и в map на нее умножаю
            console.log(i.toString().padStart(spaceForCharacter), ...[...Array(n).keys()].map((element) => (element + 1) * i).map(num => num.toString().padStart(spaceForCharacter)));
        }
    }
}
let tb = new Table();
tb.printTable(10);