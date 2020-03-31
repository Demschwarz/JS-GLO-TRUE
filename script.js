'use strict'
let mission = 1000000;
let money = '10000';
let income = '50000';
let deposit = true;
console.log(typeof(money), typeof(income), typeof(deposit));
// console.log(typeof(money));
// let income = "Freelance";
let period = 6;
let addExpences = ['Интернет', 'Коммуналка', 'Пропитание', 'Курсы по js'];
console.log(addExpences.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель - заработать ' + mission + ' рублей');
money = Number(prompt('Ваш месячный доход?', 36000));
addExpences = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpences.toLowerCase().split(', '));
deposit = Boolean(prompt('Есть ли у вас депозит в банке?'));
let expences1 = prompt('Введите обязательную статью расходов');
let amount1 = Number(prompt('Во сколько это обойдется?'));
let expences2 = prompt('Введите обязательную статью расходов');
let amount2 = Number(prompt('Во сколько это обойдется?'));
let budgetMonth = money - amount1 - amount2;
console.log('Бюджет на месяц ' + budgetMonth);
console.log('Цель будет достигнута за ' + Math.ceil(mission / budgetMonth) + ' месяцев');
let budgetDay = budgetMonth / 30;
console.log('Бюджет на день: ' + Math.round(budgetDay));
if (budgetDay >= 1200){
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
// // addExpences
// // console.log('addExpences: ', addExpences);
// // console.log(typeof(addExpences));
// // let deposit = true;
// let period = 36;
// // // alert('hi');
// // // console.log(money);
// // // console.log(2);
// console.log(addExpences.length);
// console.log(addExpences.toLowerCase().split(', '));
// console.log(budgetDay);