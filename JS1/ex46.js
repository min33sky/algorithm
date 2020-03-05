/**
 * 문제 46: 각 자리수의 합2
 */

function getSumEachPosition(num1, num2) {
  let arr = [];

  for (let i = num1; i <= num2; i++) {
    let n = i;
    while (n > 0) {
      arr.push(Math.floor(n % 10));
      n = Math.floor(n / 10);
    }
  }

  return arr.reduce((a, b) => a + b);
}

console.log(getSumEachPosition(1, 20));
