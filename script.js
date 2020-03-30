let money = 266219;
let money_str = money.toString();
let mul = (money_str[0] - '0') * (money_str[1] - '0') * (money_str[2] - '0') * (money_str[3] - '0') * (money_str[4] - '0') * (money_str[5] - '0');
console.log(mul);
mul **=3;
mul_str = mul.toString();
console.log(mul_str[0]+mul_str[1]);

// console.log();