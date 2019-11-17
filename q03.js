// @ts-nocheck
/**
 * 카드를 뒤집어라
 * : 1~100의 번호가 쓰인 카드 100장
 */

const arr = Array(100).fill(false);

for (let i = 2; i <= 100; i++) {
  for (let j = i; j <= 100; j += i) {
    arr[j] = !arr[j];
  }
}

let result = arr
  .slice(1)
  .map((v, i) => (v === true ? 0 : i + 1))
  .filter(v => v !== 0);

console.log(result);
