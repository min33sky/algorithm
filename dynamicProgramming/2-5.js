// @ts-nocheck
/**
 * 최소 요금 계산 (메모화 전략)
 */

const cost = [
  [0, 10, 75, 94],
  [-1, 0, 35, 50],
  [-1, -1, 0, 80],
  [-1, -1, -1, 0],
];

const memo = {}; // 메모화 용도

function minCost(start, dest) {
  if (memo[(start, dest)]) {
    return memo[(start, dest)];
  } else if (start === dest || start + 1 === dest) {
    return (memo[(start, dest)] = cost[start][dest]);
  }

  let minimum = cost[start][dest];
  for (i = start + 1; i < dest; i++) {
    const temp = minCost(start, i) + minCost(i, dest);
    if (minimum > temp) {
      minimum = temp;
    }
  }
  return (memo[(start, dest)] = minimum);
}

console.time("timer");
console.log(minCost(0, 3));
console.timeEnd("timer");
