/**
 * 막대 자르기
 *
 */

function cutbar(person, length, barCount) {
  if (barCount >= length) {
    // 막대기 개수랑 처음 막대기의 길이가 같다면 막대 나누기 종료 (부등호는 에러 방지)
    return 0;
  } else if (barCount < person) {
    // 사람 수보다 막대기 개수가 적다면 막대기는 각각 둘로 나눠진다.
    return 1 + cutbar(person, length, barCount * 2);
  } else {
    // 사람 수보다 막대기 개수가 많다면 막대기는 사람 수만큼 증가한다.
    return 1 + cutbar(person, length, barCount + person);
  }
}

console.log(cutbar(3, 8, 1));
console.log(cutbar(3, 20, 1));
console.log(cutbar(5, 100, 1));
