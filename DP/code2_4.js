/**
 * 피보나치 수열
 * - 메모화 전략 사용
 */

let memo = {}; // 결과 캐싱용

function fibonacci(num) {
  // 기존 값이 있을 경우 기존 값 반환
  if (memo[num]) return memo[num];

  if (num === 1 || num === 2) {
    memo[num] = 1;
  } else {
    memo[num] = fibonacci(num - 1) + fibonacci(num - 2);
  }

  return memo[num];
}

console.time("시작");
console.log(fibonacci(30));
console.timeEnd("시작");
