// @ts-nocheck
/**
 * 부분집합의 합 구하기 (다이나믹 프로그래밍)
 */

function isSubsetSum(arr, x) {
  const memo = Array(example.length)
    .fill(false)
    .map(e => Array(x + 1).fill(false)); // x값 : 0부터 x까지

  // 첫 번째 열은 항상 참 (아무것도 선택안하면 0이므로)
  for (let i = 0; i < arr.length; i++) {
    memo[i][0] = true;
  }

  // 첫 번째 행은 j가 0 또는 arr[0]이 j와 같을 경우 참
  for (let j = 1; j <= x; j++) {
    if (arr[0] === j) {
      memo[0][j] = true;
    } else {
      memo[0][j] = false;
    }
  }

  // 나머지 셀 채우기
  for (let i = 1; i < arr.length; i++) {
    let v = arr[i];
    for (let j = 1; j <= x; j++) {
      if (v > j) {
        // 해당 숫자가 더 클 경우엔 고려할 필요가 없기 때문에 위의 행의 값 복사
        memo[i][j] = memo[i - 1][j];
      } else if (memo[i - 1][j]) {
        // 이전 값이 true면 현재 값은 상관 없으므로 true
        memo[i][j] = true;
      } else {
        // 이전 값이 false면 현재 값만큼 뺀 값으로 판단
        memo[i][j] = memo[i - 1][j - v];
      }
    }
  }

  // console.log(memo);

  return memo[arr.length - 1][x];
}

const example = [0, 6, 11, 8, 17, 3, 9];

console.log(isSubsetSum(example, 13));
console.log(isSubsetSum(example, 14));
