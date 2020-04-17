'use strict';

// let isNum = function(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n);
// };

// let isStr = function(n) {
//     let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//     for (let key of n) {
//         for (let key1 of numbers) {
//             if (key == key1)
//             return false;
//         }
//     }
//     return true;
// }


let startId = document.getElementById('start');
let buttonPlusFirst = document.getElementsByTagName('button')[0];
let buttonPlusSecond = document.getElementsByTagName('button')[1];
let buttonStart = document.getElementsByTagName('button')[2];
let buttonCansel = document.getElementsByTagName('button')[3];
let checkbox = document.querySelector('#deposit-check');
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
let depositClone = document.querySelector('.deposit').cloneNode(true);
depositClone.classList.toggle('clone');

// let money;

const AppData = function(smth){
    this.income = {};
    this.addIncome = [];
    this.expences = {};
    this.addExpences = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    
};


AppData.prototype.start = function() {
    const _this = this;
    _this.budget = leftInputFirst.value;
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getIncomeMonth();
    this.getBudget();
    this.getAddExpenses();
    this.getAddIncome();
    this.showResult();
    document.querySelector('#start').style.display = 'none';
    document.querySelector('#cancel').style.display = 'initial';
};

AppData.prototype.addIncomeBlock = function() {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    cloneIncomeItem.classList.toggle('clone');
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, buttonPlusFirst);
    incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length == 3) {
        buttonPlusFirst.style.display = 'none';
    }
};
AppData.prototype.getExpenses = function() {
    const _this = this;
    expensesItems.forEach(function(item) {
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if (itemExpenses !== '' && cashExpenses !== '') {
            _this.expences[itemExpenses] = cashExpenses;
        }
    })
};
AppData.prototype.getIncome = function() {
    const _this = this;
    incomeItems.forEach(function(item) {
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if (itemIncome !== '' && cashIncome !== '') {
            _this.income[itemIncome] = cashIncome;
        }
    })
};
AppData.prototype.addExpensesBlock = function() {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    cloneExpensesItem.classList.toggle('clone');
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonPlusSecond);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length == 3) {
        buttonPlusSecond.style.display = 'none';
    }
};
AppData.prototype.getAddExpenses = function() {
    const _this = this;
    let addExpences = leftInputSixth.value.split(', ');
    addExpences.forEach(function(item) {
        item = item.trim();
        if (item !== '') {
            _this.addExpences.push(item);
        }
    })
};
AppData.prototype.getAddIncome = function() {
    const _this = this;
    additionalIncomeItem.forEach(function(item) {
        let itemValue = item.value.trim();
        if (itemValue !== '') {
            _this.addIncome.push(itemValue);
        }
    })
};
AppData.prototype.getExpensesMonth = function() { 
    let sum = 0;
    for (let key in this.expences){
        sum += +this.expences[key];
    }
    this.expensesMonth = sum;
    return sum;
};
AppData.prototype.getIncomeMonth = function() {
    let sum = 0;
    for (let key in this.income){
        sum += +this.income[key];
    }
    this.incomeMonth = sum;
    return sum;
};
AppData.prototype.getBudget = function() {
    let a = +this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetMonth = a;
    this.budgetDay = Math.round(this.budgetMonth / 30);
    return a;
},
AppData.prototype.getTargetMonth = function() {
    let temp = Math.ceil(leftInputTenth.value / this.budget);
    if ((temp <= 0) || (temp == Infinity)) {
        return('Цель не будет достигнута');
    }
    return temp;
};

AppData.prototype.getStatusIncome = function() {
    console.log(this);
    if (this.budgetDay >= 1200){ // вывод уровня дохода
        console.log('У вас высокий уровень дохода');
    }
    else if (this.budgetDay >= 600) {
        console.log('У вас средний уровень дохода');
    }
    else if (this.budgetDay < 0) {
        console.log('Что-то пошло не так');
    }
    else {
        console.log('К сожалению у вас уровень дохода ниже среднего');
    }
};
AppData.prototype.getInfoDeposit = function() {
    if (this.deposit) {
        let prom1;
        prom1 = +prompt('Какой годовой процент?', 10);
        while (!isNum(prom1)) { // проверка на число
            prom1 = +prompt('Какой годовой процент? Введите число');
        }
        this.percentDeposit = prom1;
        prom1 = +prompt('Какая сумма заложена?', 10000);
        while (!isNum(prom1)) { // проверка на число
            prom1 = +prompt('Какой годовой процент? Введите число');
        }
        this.moneyDeposit = prom1;
    }
};

AppData.prototype.calcSavedMoney = function() {
    return this.budgetMonth * leftInputEleventh.value;
};
AppData.prototype.showResult = function() {
    document.querySelector('.budget_month-value').value = this.budgetMonth;
    inputFirst.value = this.budgetDay;
    inputSecond.value = this.expensesMonth;
    inputFourth.value = this.addExpences.join(', ');
    inputThird.value = this.addIncome.join(', ');
    inputSixth.value = this.getTargetMonth();
    inputFifth.value = this.calcSavedMoney();
};
AppData.prototype.reset = function() {
    this.income = {};
    this.addIncome = [];
    this.expences = {};
    this.addExpences = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    document.querySelectorAll('input[type=text').forEach(function(item) {item.value = ''});
    buttonPlusFirst.style.display = 'initial';
    buttonPlusSecond.style.display = 'initial';
    document.querySelectorAll('.clone').forEach(function(item) {item.remove()});
    incomeItems = data.querySelectorAll('.income-items');
    expensesItems = document.querySelectorAll('.expenses-items');
    checkbox.checked = false;
    document.querySelectorAll('input[type=text]').forEach(function(item) {item.removeAttribute('disabled')});
    startId.setAttribute('disabled', 'true');
    document.querySelector('.period-select').value = 1;
    document.querySelector('.period-amount').textContent = '1';
};



AppData.prototype.eventListeners = function() {
    let _this = this;
    let startTrue = AppData.prototype.start.bind(_this); // привязка контекста к объекту appData
    let resetTrue = AppData.prototype.reset.bind(_this);
    startId.setAttribute('disabled', 'true');
    startId.addEventListener('click', function(){
        startTrue();
        document.querySelectorAll('.data input[type=text]').forEach(function(item) {item.setAttribute('disabled', 'true')});
    }); // использование функции с новым контекстом
    leftInputFirst.addEventListener('input', function() { // запрещение нажатия на кнопку
        if (leftInputFirst.value !== '') {
            startId.removeAttribute('disabled');
        } else {
            startId.setAttribute('disabled', 'true');
            startId.addEventListener('click', function() {if (1 == 2) {
                console.log('nothing');
            }});
        }
    });
    document.querySelector('#cancel').addEventListener('click', resetTrue);
    buttonPlusSecond.addEventListener('click', _this.addExpensesBlock);
    buttonPlusFirst.addEventListener('click', _this.addIncomeBlock);
    document.querySelector('.period-select').addEventListener('input', function() {
        document.querySelector('.period-amount').textContent = document.querySelector('.period-select').value;
        inputFifth.value = _this.calcSavedMoney();
    });

    document.querySelector('#cancel').addEventListener('click', function() {
        document.querySelector('#start').style.display = 'initial';
        document.querySelector('#cancel').style.display = 'none';
    });
}


const appData = new AppData();
appData.eventListeners();

