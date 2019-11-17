// @ts-nocheck
/**
 * 버블 정렬
 */

const arr = [9, 6, 2, 12, 11, 9, 3, 7];
const arr2 = [10, 2, 6, 4, 5, 3, 2, 8];

function bubbleSort() {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  console.log(arr);
}

function swap(i, j) {
  arr[i] = arr[i] + arr[j];
  arr[j] = arr[i] - arr[j];
  arr[i] = arr[i] - arr[j];
}

bubbleSort();
