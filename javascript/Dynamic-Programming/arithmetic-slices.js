/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    let result = 0
    let cur = 0
    for (let i = 0; i <= A.length - 1; i++) {
        if (A[i+2] - A[i+1] == A[i+1] - A[i]) {
            cur += 1
            result += cur
        } else {
            cur = 0
        }
    }
    return result
};
