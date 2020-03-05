/**
 * 계승 함수 (Factorial Function)을 재귀, 비재귀방식으로 코드 작성하기
 * ex) 5! = 5 * 4 * 3 * 2 * 1 = 120
 */

function factorial(n) {
  if (n < 1) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function factorialNoReculsive(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));
console.log(factorialNoReculsive(5));
