/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    var newIndex
    var indexValue
    var lackArray = []
    for (var i = 0; i < nums.length; i += 1) {
        newIndex = Math.abs(nums[i]) - 1
        if (nums[newIndex] < 0) {
            lackArray.push(newIndex + 1)
        }
        nums[newIndex] = -nums[newIndex]
    }
    return lackArray
};
