/**
 * 문제 28: 2-gram
 * - 문자열에서 2개의 연속된 요소를 출력하는 방법
 */

const STR = 'Javascript';

function twoGram(str) {
  for (let i = 0; i < str.length - 1; i++) {
    console.log(`${str[i]} ${str[i + 1]}`);
  }
}

twoGram(STR);
