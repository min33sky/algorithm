/**
 * 문제 36: 구구단 출력하기
 */

function gugudan(number) {
  let arr = [];
  for (let i = 1; i <= 9; i++) {
    arr.push(number * i);
  }

  return arr.join(' ');
}

console.log(gugudan(3));
