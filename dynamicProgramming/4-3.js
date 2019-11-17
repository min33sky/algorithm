// @ts-nocheck
/**
 * 메모 전략을 사용해서 풀이
 */

const M = 2;
const N = 3;
const cost = [[1, 3, 5, 8], [4, 2, 1, 7], [4, 3, 2, 3]];
const memo = {};

function getMin(x, y) {
  return x < y ? x : y;
}

function minPathCost(col, row) {
  // 종료조건
  if (memo[[col, row]]) {
    // 이미 캐싱된 값일 때
    return memo[[col, row]];
  } else if (col === 0 && row === 0) {
    return cost[0][0];
  } else if (col === 0) {
    return minPathCost(col, row - 1) + cost[col][row];
  } else if (row === 0) {
    return minPathCost(col - 1, row) + cost[col][row];
  }

  const x = minPathCost(col, row - 1);
  const y = minPathCost(col - 1, row);

  return (memo[[col, row]] = getMin(x, y) + cost[col][row]);
}
console.time("timer");
console.log(minPathCost(M, N));
console.timeEnd("timer");
