/**
 * 문제67 : 민규의 악수
 *
 */

const N = 59;

// 예제
// 총 4명 : [a, b, c, d]
// 4 C 2 = [a, b], [a, c], [a, d], [b, c], [b, d], [c, d] = n(n-1)/2
// 4명일 때 6가지

function getHandshakeNumber(number) {
  let people = 2;
  let handshake = 0;
  let temp = 0;

  // 민규를 제외하고 59번의 악수 횟수와 가장 가까운 사람 수 찾기
  while (true) {
    handshake = (people * (people - 1)) / 2;
    if (handshake > number) {
      people--;
      handshake = temp;
      break;
    }
    people++;
    temp = handshake;
  }

  return [number - handshake, people + 1]; // [민규의 악수 횟수, 총 인원]
}

console.log(getHandshakeNumber(N));
