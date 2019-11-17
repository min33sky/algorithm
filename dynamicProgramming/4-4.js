// @ts-nocheck
/**
 * 다이나믹 프로그래밍으로 해결하기
 */

const M = 2;
const N = 3;

const cost = [[1, 3, 5, 8], [4, 2, 1, 7], [4, 3, 2, 3]];

// 최소 비용을 저장할 배열 생성
const memo = Array(3)
  .fill(0)
  .map(v => Array(4).fill(0));

// 최소값 구하기
function getMin(x, y) {
  return x < y ? x : y;
}

function minPathCost(col, row) {
  memo[0][0] = cost[0][0]; // 시작 지점

  // 0행은 오른쪽으로만 이동가능하다.
  for (let i = 1; i <= N; i++) {
    memo[0][i] = memo[0][i - 1] + cost[0][i];
  }
  // 0열은 아래로만 이동 가능하다.
  for (let i = 1; i <= M; i++) {
    memo[i][0] = memo[i - 1][0] + cost[i][0];
  }

  // 나머지 최소 이동 요금 구하기
  for (let i = 1; i <= M; i++) {
    for (let j = 1; j <= N; j++) {
      memo[i][j] = getMin(memo[i - 1][j], memo[i][j - 1]) + cost[i][j];
    }
  }

  return memo[col][row];
}

const route = [];

// * 이동 경로 구하는 함수
function minRoute(x, y) {
  if (x === 0 && y === 0) {
    route.push([0, 0]);
    return route.reverse().join(" -> ");
  }
  route.push([x, y]); // 위치 저장

  // 이전 좌표 구하기
  const [px, py] = prevLocation(x, y);
  return minRoute(px, py);
}

function prevLocation(x, y) {
  if (x === 0) {
    // 0행의 경우 오른쪽으로만 이동 가능하므로 왼쪽값을 리턴
    return [0, y - 1];
  } else if (y === 0) {
    // 0열의 경우 아래쪽으로만 이동 가능하므로 위쪽값을 리턴
    return [x - 1, 0];
  }
  // 최소 거리 비용이 더 작은 좌표를 리턴한다.
  return memo[x - 1][y] < memo[x][y - 1] ? [x - 1, y] : [x, y - 1];
}

console.log(minPathCost(M, N));

console.log(memo);

console.log(minRoute(M, N));
