/**
 * 하노이의 탑
 */

function hanoiTower(start, destination, extra, num) {
  if (num <= 0) return;
  hanoiTower(start, extra, destination, num - 1);
  console.log(`${num}번 원반을 ${start}에서 ${destination}으로 옮깁니다.`);
  hanoiTower(extra, destination, start, num - 1);
}

hanoiTower("시작", "목적지", "임시장소", 3);
