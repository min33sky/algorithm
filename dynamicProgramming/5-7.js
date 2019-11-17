// @ts-nocheck
/**
 * 부분집합의 합 구하기
 */

function isSubsetSum(arr, n, x) {
  // 종료 조건 1 : x갸 0이면 성공
  if (x === 0) return true;
  // 종료 조건 2 : x가 0이 아니고 남은 원소가 없다면 실패 종료 조건
  if (n === 0) return false;

  // x보다 큰 원소는 무시해도 된다.
  if (arr[0] > x) {
    return isSubsetSum(arr.slice(1), n - 1, x);
  }

  return (
    // 둘 중에 하나라도 true면 true
    isSubsetSum(arr.slice(1), n - 1, x) || // 부분집합에  첫 번째 원소 포함하지 않는다.
    isSubsetSum(arr.slice(1), n - 1, x - arr[0]) // 부분집합에 첫 번째 원소 포함한다.
  );
}

const example = [0, 6, 11, 8, 17, 3, 9];

console.log(isSubsetSum(example, example.length, 13));
console.log(isSubsetSum(example, example.length, 14));
