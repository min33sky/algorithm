nums = [1, 2, 3];

function subsets(nums) {
  let res = [];
  let nums_len = nums.length;
  let nth_bit = 1 << nums_len;

  for (let i = 0; i < 2 ** nums_len; i++) {
    let bitmask = (i | nth_bit).toString(2).slice(1);

    let temp = [];
    for (let j = 0; j < nums_len; j++) {
      if (bitmask[j] === '1') {
        temp.push(nums[j]);
      }
    }
    res.push(temp);
  }

  return res;
}

console.log(subsets(nums));
