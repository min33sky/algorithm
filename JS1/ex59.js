/**
 * 문제 59: 빈칸 채우기
 * - 총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고,
 * - 나머지 빈 부분에는 '='을 채워 넣어주세요.
 */

const INPUT = 'hi';

function fillBlank(str) {
  let arr = Array(50).fill('=');

  let middle = 50 / 2;

  let startIndex = middle - str.length / 2;

  const result = arr
    .slice(0, startIndex)
    .concat(str)
    .concat(arr.slice(startIndex + str.length));

  return result.join('');
}

console.log(fillBlank(INPUT));

// String 메서드 활용

const n = 25 + parseInt(INPUT.length / 2, 10);

const left = INPUT.padStart(n, '=');
console.log(left);
const right = left.padEnd(50, '=');
console.log(right);
console.log(right.length);
