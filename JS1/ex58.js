/**
 * 문제 58: 콤마 찍기
 * - 숫자를 입력받고 천 단위로 콤마(,) 찍기
 */

function comma(money) {
  if (money.length <= 3) {
    return money;
  }

  return (
    comma(money.slice(0, money.length - 3)) +
    ',' +
    money.slice(money.length - 3)
  );
}

console.log(comma('1'));
console.log(comma('1234567'));
console.log(comma('12345678'));
console.log(comma('123456789'));
