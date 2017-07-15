/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    var stack = []
    var s2
    for (var i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < s2) {
            return true
        } else {
            while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
                s2 = stack.pop()
            }
            stack.push(nums[i])
        }
    }
    return false
};
