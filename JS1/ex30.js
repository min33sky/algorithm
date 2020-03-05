/**
 * 문제 30: 문자열 속 문자 찾기
 * - pineaple에서 apple이 시작되는 index 찾기
 */

const PINEAPPLE = 'pineapple is yummy';

function getAppleIndex(word, keyword) {
  let index = -1;
  let flag = false;

  for (let i = 0; i < word.length; i++) {
    if (word[i] !== keyword[0]) {
      flag = false;
      continue;
    }

    for (let j = 0; j < keyword.length; j++) {
      if (word[i + j] !== keyword[j]) {
        flag = false;
        break;
      }
      flag = true;
    }

    if (flag) {
      index = i;
      break;
    }
  }

  return index;
}

console.log(getAppleIndex(PINEAPPLE, 'apple'));

console.log(PINEAPPLE.indexOf('apple'));
