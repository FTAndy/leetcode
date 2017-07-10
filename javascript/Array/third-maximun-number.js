/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const set = [...new Set(nums)]
    if (set.length > 2) {
        set.splice(set.indexOf(Math.max.apply(null, set)), 1)
        set.splice(set.indexOf(Math.max.apply(null, set)), 1)
        return Math.max.apply(null, set)
    }
    set.sort((a, b) => b - a)
    return set[0]
};
