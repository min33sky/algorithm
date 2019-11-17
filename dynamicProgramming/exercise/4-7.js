/**
 * 다이나믹 프로그래밍으로 특정 점수에 도달값 구하기
 */

function waysToScore(n) {
  const memo = Array(n + 1).fill(0);
  memo[0] = 1;

  for (let i = 1; i <= n; i++) {
    if (i - 3 >= 0) {
      memo[i] += memo[i - 3];
    }
    if (i - 5 >= 0) {
      memo[i] += memo[i - 5];
    }
    if (i - 10 >= 0) {
      memo[i] += memo[i - 10];
    }
  }

  return memo[n];
}

console.time("timer");
console.log(waysToScore(13));
console.timeEnd("timer");
