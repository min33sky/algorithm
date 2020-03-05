/**
 * 문제 43: 10진수를 2진수로
 */

function getBinaryNumber(number) {
  const arr = [];

  while (number > 0) {
    let remainder = Math.floor(number % 2);
    arr.push(remainder);
    number = Math.floor(number / 2);
  }

  const result = arr.reverse().join('');

  console.log(result);
}

getBinaryNumber(2);
getBinaryNumber(8);
getBinaryNumber(19);
getBinaryNumber(28893);

// JS METHOD
let dec = 28893;
console.log(dec.toString(2));
