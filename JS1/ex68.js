/**
 * 문제 68: 버스 시간표
 입력
 ["12:30", "13:20", "14:13"]
 "12:40"

 출력
 ['지나갔습니다', '00시간 40분', '01시간 33분']
 */

const BUS_TABLE = ['12:30', '13:20', '14:13'];

function getRemainingTime(currentTime) {
  const ct = currentTime.split(':').map(v => parseInt(v, 10));
  const minute = ct[0] * 60 + ct[1];
  const result = [];

  for (let time of BUS_TABLE) {
    const t = time.split(':').map(v => parseInt(v, 10));
    const m = t[0] * 60 + t[1];

    if (m - minute < 0) {
      result.push('지나갔습니다');
    } else {
      const remaining = m - minute;
      const hour = parseInt(remaining / 60, 10);
      const min = parseInt(remaining % 60, 10);
      const str =
        String(hour).padStart(2, 0) +
        '시간 ' +
        String(min).padStart(2, 0) +
        '분';
      result.push(str);
    }
  }

  return result;
}

console.log(getRemainingTime('12:40'));
