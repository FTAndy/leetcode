/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxNum = 0
    let currentMax = 0
    for (let i = 0; i < nums.length; i++) {
        currentMax = nums[i] === 1 ? currentMax + 1 : 0
        maxNum = Math.max(maxNum, currentMax)
    }
    return maxNum
};
