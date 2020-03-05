/**
 * 문제 41: 소수 판별
 */

function decimal(number) {
  let flag = true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      flag = false;
      break;
    }
  }

  return flag;
}

for (let i = 2; i <= 10; i++) {
  console.log(i, decimal(i));
}
