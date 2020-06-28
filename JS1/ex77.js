/**
 * 문제 77: 가장 긴 공통 부분 문자열
 */

let input1 = 'THISISSTRINGS THISIS';
let input2 = `THISISSTRINGS TATHISISKKQQAEW`;
let input3 = `THISISSTRINGS KIOTHIKESSISKKQQAEW`;
let input4 = `THISISSTRINGS TKHKIKSIS`;

// 연속되는 문자열 쪼개기
function divideString(str) {
  let result = [];

  for (let i = 1; i < str.length + 1; i++) {
    // 자를 개수
    // ? str.length + 1의 이유 : slice 메소드의 2번째 파라미터 전까지 자르기 때문
    for (let j = 0; j < i; j++) {
      // 자르기 시작할 지점
      result.push(str.slice(j, j + str.length + 1 - i));
    }
  }

  return result;
}

function solution(twoStr) {
  let strArr = twoStr.split(' ');

  // 문자열 쪼개기
  let arr1 = divideString(strArr[0]);
  let arr2 = divideString(strArr[1]);

  // 공통적인 문자열 담기
  let result = arr1.filter((item) => arr2.includes(item));
  return result.sort((a, b) => b.length - a.length)[0].length;
}

console.log(solution(input1));
console.log(solution(input2));
console.log(solution(input3));
console.log(solution(input4));
