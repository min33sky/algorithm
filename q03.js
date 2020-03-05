// @ts-nocheck
/**
 * 카드를 뒤집어라. 그리고 뒷면을 보이고 있는 카드를 출력해라
 * : 1~100의 번호가 쓰인 카드 100장을 2칸부터 1칸씩 늘려가며 뒤집는다
 */

// 초기값 설정 : 모든 카드는 뒤집어져 있다.
const arr = Array(100).fill(false);

// 카드를 뒤집는다.
for (let i = 2; i <= 100; i++) {
  for (let j = i; j <= 100; j += i) {
    arr[j] = !arr[j];
  }
}

// 뒤집힌 카드만 필터링한다.
let result = arr
  .slice(1)
  .map((v, i) => (v === true ? 0 : i + 1))
  .filter(v => v !== 0);

console.log(result);
