/**
 * 수열의 사칙 연산
 * : 1000~9999 중에서 만족하는 수를 구하라
 */

// X를 제외한 사칙 연산을 사용할 경우 4자리 수가 나오지 않기때문에 제외하고 계산한다.
const op = ["*", ""]; // X, 숫자를 붙이기
for (let i = 1000; i < 10000; i++) {
  let c = String(i);
  for (let j = 0; j < op.length; j++) {
    for (let k = 0; k < op.length; k++) {
      for (let l = 0; l < op.length; l++) {
        let val =
          c.charAt(3) +
          op[j] +
          c.charAt(2) +
          op[k] +
          c.charAt(1) +
          op[l] +
          c.charAt(0);
        if (val.length > 4) {
          if (i === eval(val)) {
            console.log(val + " = " + i);
          }
        }
      }
    }
  }
}
