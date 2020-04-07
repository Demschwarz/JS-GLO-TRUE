'use strict';

let isNum = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    start = function() {
    do {
        money = +prompt('Ваш месячный доход?');
    } while (!isNum(money));
};

let isStr = function(n) {
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (let key of n) {
        for (let key1 of numbers) {
            if (key == key1)
            return false;
        }
    }
    return true;
}



start();


let appData = {
    income: {},
    addIncone: [],
    expences: {},
    addExpences: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 1000000,
    period: 3,
    asking: function() {
        if (confirm('Есть ли у вас дополнительный источник заработка?')) {
            let itemIncome = prompt('Какой у вас дополнительный заработок?');
            while (!isStr(itemIncome)) {
                itemIncome = prompt('Какой у вас дополнительный заработок? Введите строку');
            };
            let cashIncome = +prompt('Сколько в месяц вы на этом зарабатываете?');
            while (!isNum(cashIncome)) { // проверка на число
                cashIncome = +prompt('Сколько в месяц вы на этом зарабатываете? Введите число');
            };
            appData.income[itemIncome] = cashIncome;
        }

        let addExpences = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpences = addExpences.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i = 0; i != 2; i++) {
            let a = prompt('Введите обязательную статью расходов');
            while (!isStr(a)) {
<<<<<<< HEAD
                a = prompt('Введите обязательную статью расходов. Введите строку');
=======
                a = prompt('Какой у вас дополнительный заработок? Введите строку');
>>>>>>> 33b23dc9b7191226f8ba16f7bf78cb37d2985ba6
            };
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
        return a;
    },
    getTargetMonth: function() {
        let temp = Math.ceil(appData.mission / appData.getBudget());
        if ((temp <= 0) || (temp == Infinity)) {
            console.log('Цель не будет достигнута');
            return;
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
    },
    getInfoDeposit: function() {
        if (appData.deposit) {
            let prom1;
            prom1 = +prompt('Какой годовой процент?', 10);
            while (!isNum(prom1)) { // проверка на число
                prom1 = +prompt('Какой годовой процент? Введите число');
            }
            appData.percentDeposit = prom1;
            prom1 = +prompt('Какая сумма заложена?', 10000);
            while (!isNum(prom1)) { // проверка на число
                prom1 = +prompt('Какой годовой процент? Введите число');
            }
            appData.moneyDeposit = prom1;
        }
    },

    calcSavedMoney: function() {
        return appData.budgetMonth * appData.period;
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

// урок 8

let str = '';
for (let key of appData.addExpences) {
    if (key != appData.addExpences[0]) {
        str += ', ';
    }
    str += key[0].toUpperCase() + key.slice(1);
}
console.log('str: ', str);
