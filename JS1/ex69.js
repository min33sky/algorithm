/**
 * 문제 69: 골드바흐의 추측
 * - 2보다 큰 짝수를 두 소수의 합으로 나타낸 것을 골드바흐 파티션
 *
 */

const NUMBER = 100;

function prime_list(n) {
  // 에라토스테네스의 체 초기화: n개 요소에 true 설정(소수로 간주)
  let sieve = [];
  for (let i = 2; i < n; i++) {
    sieve.push(true);
  }
  // console.log(sieve);

  // n의 최대 약수가 sqrt(n) 이하이므로 i=sqrt(n)까지 검사
  let m = parseInt(n ** 0.5, 10);
  // console.log(m);
  for (let i = 2; i < m + 1; i++) {
    if (sieve[i] === true) {
      // i가 소수인 경우 i의 배수는 소수가 아니다
      for (let j = i + i; j < n; j += i) {
        sieve[j] = false;
      }
    }
  }

  // console.log(sieve);
  // 소수 목록 산출
  let primes = [];
  for (let i = 2; i < n; i++) {
    if (sieve[i] === true) {
      primes.push(i);
    }
  }

  return primes;
}

const prime = prime_list(NUMBER + 1);
const number = NUMBER;
const result = [];
let round = 0;

for (let n of prime) {
  if (prime.includes(number - n)) {
    result.push([n, number - n]);
  }
  // 절반만 순회(중복 방지)
  if (round > parseInt(prime.length / 2, 10)) {
    break;
  }
  round++;
}

console.log(result);

// 가장 차이가 적은 값
let gap = result.map(e => e[1] - e[0]);
let gapIndex = gap.indexOf(Math.min.apply(null, gap));
console.log(result[gapIndex]);
