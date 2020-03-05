/**
 * 문제 19: 제곱을 구하자
 * - 공백으로 구분하여 두 숫자 a와 b가 주어지면 a의 b승을 구하라
 */

const NUMBERS = '2 6';

function getPow(numbers) {
  const arr = numbers.split(' ').map(v => parseInt(v, 10));

  const result = Math.pow(arr[0], arr[1]);

  console.log(result);
}

getPow(NUMBERS);
