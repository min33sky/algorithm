// @ts-nocheck
/**
 * 직사각형에서 총 경로 구하기
 */

function numOfPaths(row, col) {
  if (row === 0 && col === 0) return 0;
  if (row === 0 || col === 0) return 1;

  return numOfPaths(row - 1, col) + numOfPaths(row, col - 1);
}

console.time("timer");
console.log(numOfPaths(8, 9));
console.timeEnd("timer");
