let bookList = document.querySelectorAll('.book'); // пункт 1
bookList[0].remove();
bookList[1].remove();
bookList[2].remove();
bookList[3].remove();
bookList[4].remove();
bookList[5].remove();
document.querySelector('.books').append(bookList[1]);
document.querySelector('.books').append(bookList[0]);
document.querySelector('.books').append(bookList[4]);
document.querySelector('.books').append(bookList[3]);
document.querySelector('.books').append(bookList[5]);
document.querySelector('.books').append(bookList[2]); // пункт 1 закончился
document.body.style = 'background-image: url(./image/you-dont-know-js.jpg);'; // пункт 2
document.querySelectorAll('.book')[2].querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов'; // пункт 3
document.querySelector('.adv').remove(); // пункт 4
let chapterList = document.querySelectorAll('.book')[4].querySelectorAll('li'); // пункт 5 начало
chapterList[0].remove();
chapterList[1].remove();
chapterList[2].remove();
chapterList[3].remove();
chapterList[4].remove();
chapterList[5].remove();
chapterList[6].remove();
chapterList[7].remove();
chapterList[8].remove();
chapterList[9].remove();
chapterList[10].remove();
let fifthBook = document.querySelectorAll('.book')[4];
fifthBook.append(chapterList[1]);
fifthBook.append(chapterList[0]);
fifthBook.append(chapterList[9]);
fifthBook.append(chapterList[3]);
fifthBook.append(chapterList[4]);
fifthBook.append(chapterList[2]);
fifthBook.append(chapterList[6]);
fifthBook.append(chapterList[7]);
fifthBook.append(chapterList[5]);
fifthBook.append(chapterList[8]);
fifthBook.append(chapterList[10]);// пункт 5 конец
let newElem = document.createElement('li'); // пункт 6 начало
newElem.textContent = 'Глава 8: За пределами ES6'
document.querySelectorAll('.book')[5].querySelectorAll('li')[8].after(newElem);