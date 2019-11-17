// @ts-nocheck
/**
 * 재귀 호출을 사용하여 버블정렬 구현
 */

const arr = [10, 2, 6, 4, 5, 3, 2, 8];

function bubbleSort(num) {
  // 종료 조건
  if (num === 1) {
    console.log(arr);
    return;
  }

  // 1회 탐색
  for (let i = 0; i < num - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      swap(i, i + 1);
    }
  }

  // 더 작은 범위의 인수로 재귀호출
  return bubbleSort(num - 1);
}

function swap(i, j) {
  arr[i] = arr[i] + arr[j];
  arr[j] = arr[i] - arr[j];
  arr[i] = arr[i] - arr[j];
}

bubbleSort(arr.length);
