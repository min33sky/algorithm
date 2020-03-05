/**
 * 최소 이동 비용을 구하는 재귀 함수
 * - 메모 전략 사용
 */

const cost = [
  [1, 3, 5, 8],
  [4, 2, 1, 7],
  [4, 3, 2, 3],
];

const memo = {};

function minPathCost(row, col) {
  if (memo[[row, col]]) {
    // console.log(`${row} ${col}의 결과는 이미 존재함`);
    return memo[[row, col]];
  }

  if (row === 0 && col === 0) return (memo[[0, 0]] = cost[0][0]);
  if (row === 0)
    return (memo[[row, col]] = minPathCost(0, col - 1) + cost[0][col]);
  if (col === 0)
    return (memo[[row, col]] = minPathCost(row - 1, 0) + cost[row][0]);

  memo[[row, col]] =
    getMin(minPathCost(row - 1, col), minPathCost(row, col - 1)) +
    cost[row][col];

  return memo[[row, col]];
}

function getMin(a, b) {
  return a > b ? b : a;
}

console.time('timer');
console.log(minPathCost(2, 3));
console.timeEnd('timer');

console.log('-------------- 테스트 -------------------');
Object.keys(memo).forEach((v, i) => {
  console.log(typeof v, v);
});

console.log('2, 1' in memo);
console.log('2,1' in memo);
console.log('[2, 1]' in memo);
console.log('[2,1]' in memo);
