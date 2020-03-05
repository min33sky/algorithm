/**
 * 문제 64: 이상한 엘리베이터
  정량 N에 정확히 맞춰야만 움직이는 화물용 엘레베이터가 있습니다.
  화물은 7kg, 3kg 두 가지이며 팔이 아픈 은후는 가장 적게 화물을 옮기고 싶습니다.
  예를 들어 정량이 24kg이라면 3kg 8개를 옮기는 것 보다는
  7kg 3개, 3kg 1개 즉 4개로 더 적게 옮길 수 있습니다.

  입력
  정량 N이 입력됩니다.

  출력
  가장 적게 옮길 수 있는 횟수를 출력합니다.
  만약 어떻게 해도 정량이 N이 되지 않는다면 -1을 출력합니다.
 */

const INPUT = 24;

function strangeElevator(input) {
  let result = 0;

  while (true) {
    // 큰 수로 나누어 떨어질 경우가 최소 경우다
    if (input % 7 === 0) {
      result += parseInt(input / 7, 10);
      break;
    }

    // 큰 수로 나누어 떨어지지 않으면 작은 수를 빼
    input -= 3;
    result += 1;

    // 정량이 불가능
    if (input < 0) {
      result = -1;
      break;
    }
  }

  return result;
}

console.log(strangeElevator(INPUT));
