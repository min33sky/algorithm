// @ts-nocheck
/**
 * 최소 요금 ( 다이나믹 프로그래밍 )
 */

const cost = [
  [0, 10, 75, 94],
  [-1, 0, 35, 50],
  [-1, -1, 0, 80],
  [-1, -1, -1, 0],
];

const minValue = {};

function minCost(n) {
  minValue[0] = 0;
  minValue[1] = cost[0][1];

  // i번째까지 최소 요금 구하기
  for (let i = 2; i <= n; i++) {
    minValue[i] = cost[0][i];
    for (let j = 1; j < i; j++) {
      if (minValue[i] > minValue[j] + cost[j][i]) {
        minValue[i] = minValue[j] + cost[j][i];
      }
    }
  }

  return minValue[n];
}

console.time("timer");
console.log(minCost(3));
console.timeEnd("timer");
