/**
 * 문제 35: Factory 함수 사용하기
 *
 */

function one(n) {
  function two(num) {
    return Math.pow(num, n);
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));
