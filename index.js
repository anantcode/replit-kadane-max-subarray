/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max_so_far = Number.MIN_SAFE_INTEGER;
  let max_ending_here = 0;

  for (let i = 0; i < nums.length; i++) {
    max_ending_here += nums[i];

    if (max_so_far < max_ending_here)
      max_so_far = max_ending_here;

    if (max_ending_here < 0)
      max_ending_here = 0;
  }

  return max_so_far;
};

console.log(`[-2, 1, -3, 4, -1, 2, 1, -5, 4] \n\n ${maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])}`);
