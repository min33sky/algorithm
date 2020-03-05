/**
 * 문제 48: 대소문자 바꿔서 출력하기
 */

const INPUT = 'AAABBBcccddd';

function changeCapital(str) {
  const arr = str.split('');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      arr[i] = arr[i].toLowerCase();
    } else {
      arr[i] = arr[i].toUpperCase();
    }
  }

  return arr.join('');
}

console.log(changeCapital(INPUT));
