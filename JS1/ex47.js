/**
 * 문제 47: set 자료형의 응용
 */

const people = {
  이호준: '01050442903',
  이호상: '01051442904',
  이준호: '01050342904',
  이호준: '01050442903',
  이준: '01050412904',
  이호: '01050443904',
  이호준: '01050442903',
};

const set = new Set();

for (const key in people) {
  set.add({ [key]: people[key] });
}

console.log(set);
console.log(set.size);
