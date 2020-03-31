// 'use strict'

// const obj = {
//     'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//     'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
//   }
// let lang = prompt('Введите язык, "ru" или "en"', 'ru');
// let days_ru = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// let days_en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// if (lang == 'ru') {
//     console.log(days_ru);
// }
// else {
//     console.log(days_en);
// }

// switch (lang) {
//     case 'ru' : {
//         console.log(days_ru);
//         break;
//     }
//     case 'en' : {
//         console.log(days_en);
//         break;
//     }
// }
// (lang == 'ru') ? console.log(obj.ru) : console.log(obj.en);
let namePerson = prompt('Введите имя', 'Артём');
let position = (namePerson == 'Артём') ? 'директор' : ((namePerson == 'Максим') ? 'преподаватель' : 'студент');
console.log('position: ', position);
