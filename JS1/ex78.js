/**
 * 문제 78: 원형 테이블
 */

const INPUT = '6 3';

function solution(input) {
  let inputArr = input.split(/\s/);
  let n = +inputArr[0];
  let k = +inputArr[1];
  let idx = 0;

  // n개의 아이템이 순서대로 있는 배열을 생성
  let arr = Array(n)
    .fill(0)
    .map((item, idx) => idx + 1);

  // 배열의 길이가 2가되면 반복을 종료한다.
  while (arr.length > 2) {
    if (idx > arr.length - 1) {
      idx -= arr.length;
    }

    arr.splice(idx, 1);
    idx += k;
    idx -= 1;
  }

  return arr;
}

console.log(solution(INPUT));
