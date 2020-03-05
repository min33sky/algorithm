/**
 * 문제 65: 변형된 리스트
 */

let arr1 = [1, 2, 3, 4];
let arr2 = ['a', 'b', 'c', 'd'];

function printArray(arr1, arr2) {
  return arr1.reduce((acc, v, i) => {
    if (i % 2 === 0) {
      acc.push([v, arr2[i]]);
    } else {
      acc.push([arr2[i], v]);
    }
    return acc;
  }, []);
}

console.log(printArray(arr1, arr2));
