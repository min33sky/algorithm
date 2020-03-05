/**
 * 문제 54: 연속되는 수
 */

const INPUT1 = '1 2 3 4 5';
const INPUT2 = '1 4 2 6 3';

function solution(input) {
  let numbers = input
    .split(' ')
    .map(v => parseInt(v, 10))
    .sort((a, b) => a - b);

  let result = true;

  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] !== numbers[i + 1] - 1) {
      result = false;
      break;
    }
  }

  return result;
}

console.log(solution(INPUT1));
console.log(solution(INPUT2));
