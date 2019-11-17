/**
 * 피보나치 수열
 */

function fibonacci(n) {
  if (n == 1 || n == 2) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.time("시작");
console.log(fibonacci(30));
console.timeEnd("시작");
