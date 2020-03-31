'use strict'
let mission = 1000000;
let money = Number(prompt('Ваш месячный доход?', 30000));
console.log(typeof(money));
// let income = "Freelance";
let addExpences = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = Boolean(prompt('Есть ли у вас депозит в банке?'))
console.log((1 == 1) * deposit, typeof(deposit));
let expences1 = prompt('Введите обязательную статью расходов');
let amount1 = Number(prompt('Во сколько это обойдется?'));
let expences2 = prompt('Введите обязательную статью расходов');
let amount2 = Number(prompt('Во сколько это обойдется?'));
let budgetMonth = money - amount1 - amount2;
console.log(budgetMonth);
console.log(Math.ceil(mission / budgetMonth));
let budgetDay = budgetMonth / 30;
console.log(Math.round(budgetDay));
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
// console.log(typeof(money), typeof(income), typeof(deposit));
// console.log(addExpences.length);
// console.log(addExpences.toLowerCase().split(', '));
// console.log(budgetDay);