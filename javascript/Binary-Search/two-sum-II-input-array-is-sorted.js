/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let start = 0
    let end = numbers.length - 1
    while (start <= end) {
        let val = numbers[start] + numbers[end]
        if (val == target) {
            return [start + 1, end + 1]
            break;
        }
        if (val > target) {
            end--
        }
        if (val < target) {
            start++
        }
    }
};
