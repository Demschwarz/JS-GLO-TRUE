'use strict';

let isNum = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
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


let startId = document.getElementById('start');
let buttonPlusFirst = document.getElementsByTagName('button')[0];
let buttonPlusSecond = document.getElementsByTagName('button')[1];
let buttonStart = document.getElementsByTagName('button')[2];
let buttonCansel = document.getElementsByTagName('button')[3];
let checkbox = document.querySelector('#deposit-check')
let additionalIncomeItem = document.querySelectorAll('.additional_income-item')
let inputFirst = document.querySelector('.budget_day-value');
let inputSecond = document.querySelector('.result .expenses_month-value');
let inputThird = document.querySelector('.result .additional_income-value');
let inputFourth = document.querySelector('.result .additional_expenses-value');
let inputFifth = document.querySelector('.result .income_period-value');
let inputSixth = document.querySelector('.result .target_month-value');
let data = document.querySelector('.data');
let leftInputFirst = data.querySelector('.salary-amount');
let incomeItems = data.querySelectorAll('.income-items');
let leftInputThird = data.querySelector('.income-amount');
let leftInputFourth = data.querySelector('.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items'); 
let leftInputSixth = data.querySelector('.additional_expenses-item');
let leftInputSeventh = data.querySelector('.deposit-check');
let leftInputEighth = data.querySelector('.deposit-amount');
let leftInputNineth = data.querySelector('.deposit-percent');
let leftInputTenth = data.querySelector('.target-amount');
let leftInputEleventh = data.querySelector('.period-select');

// let money;

let appData = {
    income: {},
    addIncone: [],
    expences: {},
    addExpences: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    start : function() {
        // do {
        //     money = +prompt('Ваш месячный доход?');
        // } while (!isNum(money));
        appData.budget = leftInputFirst.value;
        // console.log('appData.budget: ', appData.budget);
        
        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getIncomeMonth();
        appData.getBudget();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.showResult();
    },
    addIncomeBlock: function() {
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, buttonPlusFirst);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length == 3) {
            buttonPlusFirst.style.display = 'none';
        }
    },
    getExpenses: function() {
        expensesItems.forEach(function(item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== '') {
                appData.expences[itemExpenses] = cashExpenses;
            }
        })
    },
    getIncome: function() {
        incomeItems.forEach(function(item) {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if (itemIncome !== '' && cashIncome !== '') {
                appData.income[itemIncome] = cashIncome;
            }
        })
    },
    addExpensesBlock: function() {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonPlusSecond);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length == 3) {
            buttonPlusSecond.style.display = 'none';
        }
    },
    getAddExpenses: function() {
        let addExpences = leftInputSixth.value.split(', ');
        // console.log('addExpences: ', addExpences);
        addExpences.forEach(function(item) {
            item = item.trim();
            if (item !== '') {
                appData.addExpences.push(item);
            }
        })
    },
    getAddIncome: function() {
        console.log('additionalIncomeItem: ', additionalIncomeItem);
        additionalIncomeItem.forEach(function(item) {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                appData.addIncone.push(itemValue);
            }
        })
    },
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
        // for (let i = 0; i != 2; i++) {
        //     let a = prompt('Введите обязательную статью расходов');
        //     while (!isStr(a)) {
        //         a = prompt('Введите обязательную статью расходов. Введите строку');
        //     };
        //     let b = +prompt('Во сколько это обойдётся?');
        //     while (!isNum(b)) { // проверка на число
        //         b = +prompt('Во сколько это обойдётся? Введите число');
        //     }
        //     appData.expences[a] = b;
        // }
    },
    getExpensesMonth: function() { 
        let sum = 0;
        for (let key in appData.expences){
            sum += +appData.expences[key];
        }
        appData.expensesMonth = sum;
        return sum;
    },
    getIncomeMonth: function() {
        let sum = 0;
        for (let key in appData.income){
            sum += +appData.income[key];
        }
        appData.incomeMonth = sum;
        return sum;
    },
    getBudget: function() {
        let a = +appData.budget + appData.incomeMonth - appData.expensesMonth;
        console.log('appData.budget: ', appData.budget);
        console.log('appData.incomeMonth: ', appData.incomeMonth);
        console.log('appData.expensesMonth: ', appData.expensesMonth);
        appData.budgetMonth = a;
        appData.budgetDay = Math.round(appData.budgetMonth / 30);
        return a;
    },
    getTargetMonth: function() {
        let temp = Math.ceil(leftInputTenth.value / appData.budget);
        if ((temp <= 0) || (temp == Infinity)) {
            return('Цель не будет достигнута');
        }
        return temp;
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
        return appData.budgetMonth * leftInputEleventh.value;
    },
    showResult: function() {
        document.querySelector('.budget_month-value').value = appData.budgetMonth;
        inputFirst.value = appData.budgetDay;
        inputSecond.value = appData.expensesMonth;
        inputFourth.value = appData.addExpences.join(', ');
        inputThird.value = appData.addIncone.join(', ');
        inputSixth.value = appData.getTargetMonth();
        inputFifth.value = appData.calcSavedMoney();
    }
}

leftInputFirst.addEventListener('input', function() { // запрещение нажатия на кнопку
    if (leftInputFirst.value !== '') {
        startId.addEventListener('click', appData.start);
    } else {
        startId.addEventListener('click');
    }
});
buttonPlusSecond.addEventListener('click', appData.addExpensesBlock);
buttonPlusFirst.addEventListener('click', appData.addIncomeBlock);
document.querySelector('.period-select').addEventListener('input', function() {
    document.querySelector('.period-amount').textContent = document.querySelector('.period-select').value;
    inputFifth.value = appData.calcSavedMoney();
});