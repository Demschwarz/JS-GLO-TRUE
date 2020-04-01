'use strict'
let mission = 1000000;
let income = '50000'; // всё это про прошлый урок, чтобы функционало всё, нужна переменная income, чтобы её тип потом определить
let period = 6;
console.log('Период равен ' + period + ' месяцев');
console.log('Цель - заработать ' + mission + ' рублей');

let money = prompt('Ваш месячный доход?', '36000');
let addExpences = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

console.log(addExpences.toLowerCase().split(', '));
console.log(addExpences.length);

let deposit = !!(prompt('Есть ли у вас депозит в банке?'));

console.log(typeof(money), typeof(income), typeof(deposit));

money = +money;//не перевёл сразу, ибо нужно, чтобы выводился string как тип переменной money

let expences1 = prompt('Введите обязательную статью расходов'); // вопросы к пользователю про статьи расхода
let amount1 = Number(prompt('Во сколько это обойдется?'));

let expences2 = prompt('Введите обязательную статью расходов');
let amount2 = Number(prompt('Во сколько это обойдется?'));

let budgetMonth = money - amount1 - amount2;
console.log('Бюджет на месяц ' + budgetMonth);

console.log('Цель будет достигнута за ' + Math.ceil(mission / budgetMonth) + ' месяцев');

let budgetDay = budgetMonth / 30;

console.log('Бюджет на день: ' + Math.round(budgetDay));

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