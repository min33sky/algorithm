// @ts-nocheck
/**
 * 최소 이동 비용을 구하는 재귀 함수
 * : (0, 0) => (2, 3)
 */

const cost = [[1, 3, 5, 8], [4, 2, 1, 7], [4, 3, 2, 3]];

const COL = 2;
const ROW = 3;

// (0,0)에서 (col, row)까지 최소 이동비용 구하는 함수
function minPathCost(col, row) {
  // 종료 조건
  if (col === 0 && row === 0) {
    // (0,0)이 목적지
    return cost[0][0];
  } else if (col === 0) {
    // 목적지가 젤 위 행에 있을 때
    return minPathCost(0, row - 1) + cost[0][row];
  } else if (row === 0) {
    // 목적지가 젤 왼쪽 열에 있을 때
    return minPathCost(col - 1, 0) + cost[col][0];
  }

  const x = minPathCost(col - 1, row);
  const y = minPathCost(col, row - 1);

  // 최소 이동 비용 : 목적지 이전 지점 2곳 중에 최소값 지점에서 목적지까지 비용을 더한다.
  return getMin(x, y) + cost[col][row];
}

// 최소값 구하는 함수
function getMin(x, y) {
  return x < y ? x : y;
}

console.time("timer");
console.log(minPathCost(COL, ROW));
console.timeEnd("timer");
