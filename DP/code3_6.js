/**
 * n의 계승을 구하는 상향식 접근 방법
 */

function factorial(number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(6));
