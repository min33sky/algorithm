/**
 * 직사각형에서 총 경로 구하기 (다이나믹 프로그래밍)
 */

function numOfPaths(row, col) {
  const memo = Array(row)
    .fill(0)
    .map(e => Array(col).fill(0));

  // 0열
  for (let i = 1; i < row; i++) {
    memo[i][0] = 1;
  }

  // 0행
  for (let j = 1; j < col; j++) {
    memo[0][j] = 1;
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      memo[i][j] = memo[i - 1][j] + memo[i][j - 1];
    }
  }

  console.log(memo);
  return memo[row - 1][col - 1];
}

console.time("timer");
console.log(numOfPaths(9, 10));
console.timeEnd("timer");
