// задание 1
console.log('задание 1: ');

let isSuitble = function(n) {
    let n_num = +n;
    while (n_num > 10) {
        n_num = Math.floor(n_num / 10);
    }
    return (n_num == 2) || (n_num == 4);
}

let arr = [];
arr = ['200', '324', '128', '477', '522', '674', '999'];
for (let i = 0; i != 7; i++) {
    if (isSuitble(arr[i])) {
        console.log(arr[i]);
    }
}


//задание 2
console.log('задание 2: ');


let isPrime = function(n) {
    if ((n == 1) || (n == 2)) {
        return true
    }
    for (let i = 2; i != Math.floor(n / 2); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

for (let i = 1; i != 100; i++) {
    if (isPrime(i)) {
        console.log(i);

    }
}