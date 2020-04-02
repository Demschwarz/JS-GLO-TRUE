'use strict';
function proizvolnoe(a) {
    if (typeof(a) !== 'string') {
        console.log('Что-то пошло не так');
    }
    a += ''; // гарантированный перевод в String
    a.trim();
    if (a.length > 30) {
        return a.substring(0, 30) + '...'; 
    }
    return a;
}
console.log(proizvolnoe(' loremloremloremloremloremlorem   '));
