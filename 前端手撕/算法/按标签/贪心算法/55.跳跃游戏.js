var canJump = function (nums) {
  if (nums.length > 1 && nums[0] === 0) return false;
  if (nums.length <= 1) return true;
  let cover = 0;
  for (let i = 0; i < nums.length; i++) {
    if (cover < i) {
      return false;
    }
    if (cover >= nums.length - 1) {
      return true;
    }
    cover = Math.max(cover, i + nums[i]);
    console.log("cover:", cover);
  }
  return false;
};

const nums = [1, 0, 1, 0];
console.log(canJump(nums));
