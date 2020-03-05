/**
 * 피보나치 수열
 * - Non Recurlsive
 */

function fibonacci(n) {
  let a = 1;
  let b = 1;
  let result = 0;

  // 2이하 값은 1
  if (n === 1 || n === 2) return 1;

  for (let i = 3; i <= n; i++) {
    result = a + b;
    a = b;
    b = result;
  }

  return result;
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
