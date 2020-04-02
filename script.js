'use strict'
let mission = 1000000;
let income = '50000';

let money = prompt('Ваш месячный доход?', '36000');
let addExpences = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

console.log(addExpences.toLowerCase().split(', ')); // Вывод возможных расходов в виде массива 

let deposit = confirm('Есть ли у вас депозит в банке?');


function showTypeOf(a) {
    console.log(a + ' ' + typeof(a));
}

console.log(typeof(money), typeof(income), typeof(deposit));

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

money = +money; //не перевёл сразу, ибо нужно, чтобы выводился string как тип переменной money

//статьи расходов
let expences1 = prompt('Введите обязательную статью расходов'); // вопросы к пользователю про статьи расхода
let amount1 = Number(prompt('Во сколько это обойдется?'));

let expences2 = prompt('Введите обязательную статью расходов');
let amount2 = Number(prompt('Во сколько это обойдется?'));



function getExpensesMonth() { // функции урока 4
    return amount1 + amount2;
}
console.log('getExpensesMonth(): ', getExpensesMonth());


function getAccumulatedMonth() {
    return money - getExpensesMonth();
}


let accumulatedMonth = getAccumulatedMonth();
function getTargetMonth() {
    return Math.ceil(mission / accumulatedMonth);
}
console.log('getTargetMonth(): ', getTargetMonth());



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