/**
 * 문제 20: 몫과 나머지
 * - 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하기
 */

const INPUT = '10 2';

function solution(input) {
  const arr = input.split(' ').map(v => parseInt(v, 10));

  const share = arr[0] / arr[1];
  const rest = arr[0] % arr[1];

  console.log(`${share} ${rest}`);
}

solution(INPUT);
