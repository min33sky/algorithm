/**
 * 문제 77: 가장 긴 공통 부분 문자열
 */

let input1 = 'THISISSTRINGS THISIS';
let input2 = `THISISSTRINGS TATHISISKKQQAEW`;
let input3 = `THISISSTRINGS KIOTHIKESSISKKQQAEW`;
let input4 = `THISISSTRINGS TKHKIKSIS`;

function getSubstring(str) {
  let result = [];

  for (let i = 1; i <= str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      // ? str.length + 1의 이유 : slice 메소드의 2번째 파라미터 전까지 자르기 때문
      result.push(str.slice(j, j + str.length + 1 - i));
    }
  }

  return result;
}

function solution(str) {
  let splitStr = str.split(/\s/);
  let subStr1 = getSubstring(splitStr[0]);
  let subStr2 = getSubstring(splitStr[1]);

  let filtered = subStr1
    .filter((item) => subStr2.includes(item))
    .sort((a, b) => b.length - a.length);

  console.log(filtered[0].length);

  return filtered[0].length;
}

solution(input1);
solution(input2);
solution(input3);
solution(input4);
