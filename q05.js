/**
 * ! 해결 안됨
 * 동전 교환
 * : 동전 당 최대 15개까지 교환 가능
 */

const coins = [500, 100, 50, 10];
let count = 0;

function change(money, coins, usable) {
  const coin = coins.shift();

  const copyCoins = coins.slice(0);
  console.log("*** ", copyCoins);

  if (coins.length === 0) {
    if (money / coin <= usable) {
      count++;
    }
  } else {
    console.log(money, coin);
    for (let i = 0; i <= money / coin; i++) {
      change(money - coin * i, copyCoins, usable - 1);
    }
  }
}

change(1000, coins, 15);
console.log(count);
