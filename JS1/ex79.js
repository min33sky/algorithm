/**
 * 문제79) 순회하는 리스트
 */

const l = [10, 20, 25, 27, 34, 35, 39]; //기존 입력 값
const n = 2; // 순회 횟수

function rotate(inL, inN) {
  let result = [];
  let arr2 = inL.slice();

  // 배열 inN번 순회
  for (let i = 0; i < inN; i++) {
    let item = inL.pop();
    inL.unshift(item);
  }

  for (let i = 0; i < inL.length; i++) {
    result.push(Math.abs(inL[i] - arr2[i]));
  }

  // 리스트의 차의 최소값과 인덱스를 찾고 해당 인덱스 값을 리턴
  let minValue = Math.min(...result);
  let index = result.findIndex((v) => v === minValue);

  console.log('index: ', index);
  console.log('value: ', inL[index], arr2[index]);
}

rotate(l, n);
