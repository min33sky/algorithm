/**
 * 피보나치 수열
 * : 메모화 전략 사용
 */

let memo = {}; // 캐싱용

function fibonacci(num) {
  if (memo[num]) {
    return memo[num];
  } else if (num === 1 || num === 2) {
    return (memo[num] = 1);
  }

  return (memo[num] = fibonacci(num - 1) + fibonacci(num - 2));
}

console.time("시작");
console.log(fibonacci(30));
console.timeEnd("시작");
