/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    if (n == 0) {
        return 1
    }
    let cur = 1
    let res = 10
    let base = 9
    let availableNumber = 9
    while (cur < n) {
        uniqueDigits = uniqueDigits * availableNumber
        availableNumber--
        res += uniqueDigits
        cur++
    }
    return res
};
