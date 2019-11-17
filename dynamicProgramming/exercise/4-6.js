/**
 * 특정 점수에 도달하는 경우의 수 구하기
 * - 3점, 5점, 10점
 */

function waysToScore(n) {
  if (n < 0) return 0;
  if (n === 0) return 1;

  return waysToScore(n - 3) + waysToScore(n - 5) + waysToScore(n - 10);
}

console.time("timer");
console.log(waysToScore(13));
console.timeEnd("timer");
