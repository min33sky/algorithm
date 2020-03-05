/**
 * 문제 49: 최대값 구하기
 */

const INPUT = '3 2 6 4 10 8 9 1 7 5';

function getMax(numbers) {
  const arr = numbers.split(' ').map(v => parseInt(v));

  return arr.reduce((acc, v) => (acc < v ? v : acc));
}

console.log(getMax(INPUT));
