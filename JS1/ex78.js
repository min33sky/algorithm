// /**
// <<<<<<< HEAD
//  * 문제 78: 원형 테이블
// =======
//  * 문제 78) 원형 테이블
// >>>>>>> c52f80c158d3a92478ba01498f62173fcc722897
//  */

// const INPUT = '6 3';

// <<<<<<< HEAD
// function solution(input) {
//   let inputArr = input.split(/\s/);
//   let n = +inputArr[0];
//   let k = +inputArr[1];
//   let idx = 0;

//   // n개의 아이템이 순서대로 있는 배열을 생성
//   let arr = Array(n)
//     .fill(0)
//     .map((item, idx) => idx + 1);

//   // 배열의 길이가 2가되면 반복을 종료한다.
//   while (arr.length > 2) {
//     if (idx > arr.length - 1) {
//       idx -= arr.length;
//     }

//     arr.splice(idx, 1);
//     idx += k;
// =======
// function solution(str) {
//   let [N, K] = str.split(/\s/);
//   let idx = 0;

//   N = +N;
//   K = +K;

//   let arr = Array(N)
//     .fill(0)
//     .map((item, idx) => idx + 1);

//   while (arr.length > 2) {
//     // 배열의 요소를 하나씩 눌인다. (K만큼 이동해서 제거)
//     if (idx > arr.length - 1) {
//       // 배열 인덱스 범위를 넘어갔으므로 다시 앞으로 이동
//       idx = idx - arr.length;
//     }

//     arr.splice(idx, 1);
//     idx += K;
// >>>>>>> c52f80c158d3a92478ba01498f62173fcc722897
//     idx -= 1;
//   }

//   return arr;
// }

// console.log(solution(INPUT));
