/**
 * 메모를 사용하지만 재귀 호출을 사용하지 않는 피보나치 수의 계산 함수
 */

function fibonacci(num) {
  if (num === 0) return 0;
  else if (num < 0) return -1;

  const memo = [];
  memo[1] = 1;
  memo[2] = 1;

  for (let i = 3; i <= num; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[num];
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
