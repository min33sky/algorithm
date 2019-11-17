/**
 * 피보나치 수열 (재귀 사용하지 않고 구하기)
 */

function fibonacci(n) {
  let num1 = 1;
  let num2 = 1;
  let result = 0;

  for (let i = 3; i <= n; i++) {
    result = num1 + num2;
    num1 = num2;
    num2 = result;
  }

  return result;
}

console.log(fibonacci(8));
