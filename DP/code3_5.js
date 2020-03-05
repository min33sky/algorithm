/*
 * n의 계승을 구하는 하향식 접근 방법
 * - factorial(n)을 factorial(n-1)을 사용해 정의하였고
 * 제일 밑바닥에 도달했는지로 종료 조건을 판별
 */

function factorial(number) {
  if (number === 0 || number === 1) return 1;

  return number * factorial(number - 1);
}

console.log(factorial(6));
