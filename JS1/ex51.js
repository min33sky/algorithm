/**
 * 문제 51: 병합 정렬
 */

// 병합 정렬 함수
function MergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);

  return Merge(MergeSort(left), MergeSort(right));
}

// 병합 함수
function Merge(left, right) {
  let mergeArr = [];

  // 비교해서 삽입
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      mergeArr.push(left.shift());
    } else {
      mergeArr.push(right.shift());
    }
  }

  // 왼쪽만 남았을 경우
  while (left.length) {
    mergeArr.push(left.shift());
  }

  // 오른쪽만 남았을 경우
  while (right.length) {
    mergeArr.push(right.shift());
  }

  return mergeArr;
}

console.log(MergeSort([1, 3, 5, 4, 8, 6, 7, 2]));
