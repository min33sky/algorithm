/**
 * 문제 39: 오타 수정하기
 * - 문장에서 q를 e로 수정하자
 */

const INPUT1 = 'querty';
const INPUT2 = 'hello my name is hyewon';

function editChar(str) {
  return str.split('q').join('e');
}

console.log(editChar(INPUT1));
console.log(editChar(INPUT2));
