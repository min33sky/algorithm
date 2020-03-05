/**
 * 문제 14: 3의 배수인가요?
 * - 3의 배수면 '짝', 아니면 숫자 그대로 출력
 */

function isEven(number) {
  return number % 3 === 0 ? console.log('짝수') : console.log(number);
}

isEven(3);

isEven(4);
