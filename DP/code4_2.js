/**
 * 최소 이동 비용을 구하는 재귀 함수
 */

const cost = [
  [1, 3, 5, 8],
  [4, 2, 1, 7],
  [4, 3, 2, 3],
];

function minPathCost(row, col) {
  if (row === 0 && col === 0) return cost[0][0];
  if (row === 0) return minPathCost(0, col - 1) + cost[0][col];
  if (col === 0) return minPathCost(row - 1, 0) + cost[row][0];

  return (
    getMin(minPathCost(row - 1, col), minPathCost(row, col - 1)) +
    cost[row][col]
  );
}

function getMin(a, b) {
  return a > b ? b : a;
}

console.time('timer');
console.log(minPathCost(2, 3));
console.timeEnd('timer');
