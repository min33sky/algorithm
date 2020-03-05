/**
 * 문제 29: 대문자만 지나가세요
 *
 */

// console.log('A'.charCodeAt(0));
// console.log('Z'.charCodeAt(0));

// function isUpperCase(ch) {
//   const predi = ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90;
//   return predi;
// }

function isUpperCase(ch) {
  return ch === ch.toUpperCase();
}

console.log(isUpperCase('d'));
console.log(isUpperCase('H'));
