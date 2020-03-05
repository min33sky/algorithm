/**
 * 문제 1 : 배열의 삭제
 * - 400, 500을 삭제하라
 */

let nums = [100, 200, 300, 400, 500];

const result1 = nums.filter(v => v !== 400 && v !== 500);

console.log(result1);

// *********************************************************************** //

console.log(nums);

nums.pop();
nums.pop();

console.log(nums);
