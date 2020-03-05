// @ts-nocheck
/**
 * 콜라츠 추측
 * : 어떤 수라도 반드시 1에 도달한다.
 *
 */

let count = 0; // 만족하는 값의 개수

function loop(number) {
  // 처음 값은 3을 곱하고 1을 더함
  let check = number * 3 + 1;

  // 1이 아니라면 반복 (1이 뜨면 false, 원본 값이 뜨면 true)
  while (check !== 1) {
    if (check % 2 === 0) {
      check = check / 2;
    } else {
      check = check * 3 + 1;
    }

    if (check === number) return true;
  }

  return false;
}

// 2 ~ 10000의 짝수에만 함수 적용
for (let i = 2; i <= 10000; i += 2) {
  if (loop(i)) count++;
}

console.log(count);
