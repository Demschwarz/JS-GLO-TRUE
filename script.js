'use strict'

let isNum = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

let showTypeOf = function (a) {
    console.log(a + ' ' + typeof(a));
}

let mission = 1000000,
    income = '50000';


let money;

let start = function() {
    do {
        money = +prompt('Ваш месячный доход?');
    } while (!isNum(money))
}

start();

let addExpences = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpences.toLowerCase().split(', ')); // Вывод возможных расходов в виде массива 

let deposit = confirm('Есть ли у вас депозит в банке?');


console.log(typeof(money), typeof(income), typeof(deposit));

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

money = +money; //не перевёл сразу, ибо нужно, чтобы выводился string как тип переменной money

//статьи расходов
// let expences1 = prompt('Введите обязательную статью расходов'); // вопросы к пользователю про статьи расхода
// let amount1 = Number(prompt('Во сколько это обойдется?'));

// let expences2 = prompt('Введите обязательную статью расходов');
// let amount2 = Number(prompt('Во сколько это обойдется?'));

let expences = [];

function getExpensesMonth() { 
    let sum = 0;
    for (let i = 0; i != 2; i++) {
        expences[i] = prompt('Введите обязательную статью расходов');
        let temp = +prompt('Во сколько это обойдётся?');
        while (!isNum(temp)) { // проверка на число
            temp = +prompt('Во сколько это обойдётся? Введите число');
        }
        sum += temp;
    }
    return sum;
}

let expencesAmount = getExpensesMonth();

console.log('getExpensesMonth(): ', expencesAmount);


function getAccumulatedMonth() {
    return money - expencesAmount;
}


let accumulatedMonth = getAccumulatedMonth();
function getTargetMonth() {
    let temp = Math.ceil(mission / accumulatedMonth);
    if (temp <= 0) {
        return 'Цель не будет достигнута';
    }
    return 'Цель будет достигнута за ' + temp + ' месяцев';
}

console.log(getTargetMonth());



let budgetDay = Math.round(accumulatedMonth / 30);
console.log('Бюджет на день: ' + budgetDay);


function getStatusIncome() {
    if (budgetDay >= 1200){ // вывод уровня дохода
        console.log('У вас высокий уровень дохода');
    }
    else if (budgetDay >= 600) {
        console.log('У вас средний уровень дохода');
    }
    else if (budgetDay < 0) {
        console.log('Что-то пошло не так');
    }
    else {
        console.log('К сожалению у вас уровень дохода ниже среднего');
    }
}

getStatusIncome(); // покказать степень дохода