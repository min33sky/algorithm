/**
 * 문제 44: 각 자리수의 합
 *
 */

const INPUT1 = 18234;
const INPUT2 = 3849;

function getSumOfEachPosition(number) {
  let arr = [];

  while (number > 0) {
    arr.push(Math.floor(number % 10));
    number = Math.floor(number / 10);
  }

  let sum = arr.reduce((a, b) => a + b);

  return sum;
}

console.log(getSumOfEachPosition(INPUT1));
console.log(getSumOfEachPosition(INPUT2));
