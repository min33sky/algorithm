/**
 * 코드 4-5를 다이나믹 프로그래밍으로 풀기
 */

function countWays(n) {
  let a = 1; // n이 1일 때
  let b = 2; // n이 2일 때
  let result = 0;

  if (n === 1) return a;
  if (n === 2) return b;

  for (let i = 3; i <= n; i++) {
    result = a + b;
    a = b;
    b = result;
  }

  return result;
}

console.log(countWays(5));
