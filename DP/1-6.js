/**
 * * 하노이의 탑
 * - 큰 문제 : (n개의 블럭을 Start에서 extra를 거쳐 Destination으로 이동시킨다.)
 * - 작은 문제 :
 * 1. n-1개의 블럭을 start에서 destination을 거쳐 extra로 이동시킨다.
 * 2. n번째 블럭을 destination으로 이동시킨다.
 * 3. n-1개의 블럭을 extra에서 start를 거쳐 destination으로 이동시킨다.
 * ! 1번과 3번은 큰 문제와 같은 유형의 문제기 때문에 재귀를 통해서 해결
 */

function hanoiTower(start, destination, extra, num) {
  if (num <= 0) return;
  hanoiTower(start, extra, destination, num - 1);
  console.log(`${num}번 원반을 ${start}에서 ${destination}으로 옮깁니다.`);
  hanoiTower(extra, destination, start, num - 1);
}

hanoiTower("시작", "목적지", "임시장소", 3);
