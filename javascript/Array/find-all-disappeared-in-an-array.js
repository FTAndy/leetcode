/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var index;
    var indexValue;
    for (var i = 0; i < nums.length; i+=1) {
        index = Math.abs(nums[i]) - 1;
        indexValue = nums[index];
        if (indexValue > 0) {
            nums[index] = -indexValue;
        }
    }
    var lackArr = [];
    for (var j = 0; j < nums.length; j+=1) {
        if (nums[j] > 0) {
            lackArr.push(j+1);
        }
    }
    return lackArr;
};
