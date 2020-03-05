// @ts-nocheck
/**
 * 정수 값의 배열이 주어졌을 때 배열의 각 원소를 누적합으로 갱신하는 재귀 함수 작성
 * ex) [1,2,3,4,5,6] => [1,3,6,10,15,21]
 */

const arr = [1, 2, 3, 4, 5, 6];
const result = [];

// function accAdd(idx) {
//   if (idx === 0) return (result[idx] = 1);
//   return (result[idx] = arr[idx] + accAdd(idx - 1));
// }

// accAdd(arr.length - 1);
// console.log(result);

function acc(idx) {
  if (idx === 0) return arr[idx];
  return (arr[idx] = arr[idx] + acc(idx - 1));
}

acc(arr.length - 1);
console.log(arr);
