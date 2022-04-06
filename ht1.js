// Вариант через представление числа как строки.
function myFunc(a) {
    if (a > 999 || a < 0) {
        console.log('Вы ввели неверное число!');
        let myObj0 = {};
        return myObj0;
    }
    let numLen = a.length;
    switch(numLen) {
        case 1:
            let myObj1 = {
                сотни: 0,
                десятки: 0,
                единицы: a
            };
            return myObj1;
        case 2:
            let myObj2 = {
                сотни: 0,
                десятки: a[0],
                единицы: a[1]
            };
            return myObj2;
        case 3:
            let myObj3 = {
                сотни: a[0],
                десятки: a[1],
                единицы: a[2]
            };
            return myObj3;
    }
}
let myNumber = prompt('Введите число от 0 до 999: ');
myFunc(myNumber);
// Далее можем проверить, правильно ли создали объект
//console.log(myFunc(myNumber).сотни);
//console.log(myFunc(myNumber).десятки);
//console.log(myFunc(myNumber).единицы);