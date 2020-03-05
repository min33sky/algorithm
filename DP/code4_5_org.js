/**
 * 2 X N 공터 채우기
 */

function countWays(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  return countWays(n - 1) + countWays(n - 2);
}

console.log(countWays(5));
