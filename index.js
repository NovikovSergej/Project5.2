/*
   ДЗ 5.2. Розрахунок валюти
   Один долар коштує 26 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
*/

const dollarExchangeRate = 26;
const STEP = 10;
const MIN_VALUE = 10;
const MAX_VALUE = 100;

for (let dollars = MIN_VALUE; dollars <= MAX_VALUE; dollars += STEP) {
  let valueInUAH = dollars * dollarExchangeRate;
  console.log(`${dollars} доларів = ${valueInUAH} гривень`);
}