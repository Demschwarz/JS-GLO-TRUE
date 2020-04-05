'use strict'

let isNum = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

let money,
    start = function() {
    do {
        money = +prompt('Ваш месячный доход?');
    } while (!isNum(money))
}

start();


let appData = {
    income: {},
    addIncone: [],
    expences: {},
    addExpences: [],
    deposit: false,
    mission: 1000000,
    period: 3,
    asking: function() {
        let addExpences = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpences = addExpences.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i = 0; i != 2; i++) {
            let a = prompt('Введите обязательную статью расходов');
            let b = +prompt('Во сколько это обойдётся?');
            while (!isNum(b)) { // проверка на число
                b = +prompt('Во сколько это обойдётся? Введите число');
            }
            appData.expences[a] = b;
        }
    },
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMonth: function() { 
        let sum = 0;
        for (let key in appData.expences){
            sum += appData.expences[key];
        }
        return sum;
    },
    getBudget: function() {
        let a = money - appData.getExpensesMonth();
        appData.budgetMonth = a;
        appData.budgetDay = Math.round(appData.budgetMonth / 30);
        // console.log('Бюджет на день: ', appData.budgetDay);
        return a;
    },
    getTargetMonth: function() {
        let temp = Math.ceil(appData.mission / appData.getBudget());
        if (temp <= 0) {
            return 'Цель не будет достигнута';
        }
        console.log('Цель будет достигнута за ' + temp + ' месяцев');
    },
    
    getStatusIncome: function() {
        if (appData.budgetDay >= 1200){ // вывод уровня дохода
            console.log('У вас высокий уровень дохода');
        }
        else if (appData.budgetDay >= 600) {
            console.log('У вас средний уровень дохода');
        }
        else if (appData.budgetDay < 0) {
            console.log('Что-то пошло не так');
        }
        else {
            console.log('К сожалению у вас уровень дохода ниже среднего');
        }
    }
}

appData.asking();
appData.getExpensesMonth();

for (let key in appData.expences) { // пункт 1
    console.log(key, appData.expences[key]);
}

appData.getTargetMonth(); // пункт 2
appData.getStatusIncome(); // пункт 3

console.log('Наша программа включает в себя данные: ');
for (let key in appData) {
    if (typeof(key) != 'function') {
        console.log(key + ' ' + appData[key]);
    }
}

