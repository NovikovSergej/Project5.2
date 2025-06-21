/*
   ДЗ 5.2. Розрахунок валюти
   Один долар коштує 26 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
*/

const dollarExchangeRate = 26;

for (let dollars = 10; dollars <= 100; dollars += 10) {
  let valueInUAH = dollars * dollarExchangeRate;
  console.log(`${dollars} доларів = ${valueInUAH} гривень`);
}