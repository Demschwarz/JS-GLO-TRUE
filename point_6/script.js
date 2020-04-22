let c1 = document.createElement('span');
let c2 = document.createElement('span');
let c3 = document.createElement('span');
let c4 = document.createElement('span');
let date = new Date();
c1.textContent = "Добрый день (утро, вечер, ночь в зависимости от времени суток)";
let day = date.getDay();
switch(day){
    case 1: {
        c2.textContent = 'Сегодня: Понедельник';
        break;
    }
    case 2: {
        c2.textContent = 'Сегодня: Вторник';
        break;
    }
    case 3: {
        c2.textContent = 'Сегодня: Среда';
        break;
    }
    case 4: {
        c2.textContent = 'Сегодня: Четверг';
        break;
    }
    case 5: {
        c2.textContent = 'Сегодня: Пятница';
        break;
    }
    case 6: {
        c2.textContent = 'Сегодня: Суббота';
        break;
    }
    case 7: {
        c2.textContent = 'Сегодня: Воскресенье';
        break;
    }
}

c3.textContent = 'Текущее время:' + date.toLocaleTimeString('en');

let newYear = new Date('1 january 2021');

c4.textContent = 'До нового года осталось ' + (Math.floor(((newYear.getTime() - date.getTime()) / 1000) / 3600 / 24) + 1) + ' дней';

document.querySelector('.first').append(c1);
document.querySelector('.second').append(c2);
document.querySelector('.third').append(c3);
document.querySelector('.fourth').append(c4);