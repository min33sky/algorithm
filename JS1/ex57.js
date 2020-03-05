/**
 * 문제 57: 1의 계수
 * - 0부터 1000까지 1의 개수를 세는 프로그램
 */

function solution1(number) {
  let s = '';
  for (let i = 0; i <= number; i++) {
    s += i;
  }
  // 정규표현식으로 구하기
  return s.match(/1/g).length;
}

function solution2(number) {
  let s = '';
  let count = 0;
  for (let i = 0; i <= number; i++) {
    s += i;
  }

  for (let j in s) {
    if (s[j] === '1') count++;
  }

  return count;
}

function solution3(number) {
  let s = '';
  let count = 0;
  for (let i = 0; i <= number; i++) {
    s += i;
  }

  for (let j of s) {
    if (j === '1') count++;
  }

  return count;
}

console.log(solution1(1000));
console.log(solution2(1000));
console.log(solution3(1000));
