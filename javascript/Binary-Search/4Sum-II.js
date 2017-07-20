/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    var firstArray = new Map()
    var secondArray = []
    var result = 0
    for (var i = 0; i < A.length; i++) {
        for (var j = 0; j < B.length; j++) {
            var val = A[i] + B[j]
            firstArray.set(val, firstArray.get(val) ? firstArray.get(val) + 1 : 1)
        }
    }
    for (var i = 0; i < C.length; i++) {
        for (var j = 0; j < D.length; j++) {
            var num = C[i] + D[j]
            if (firstArray.get(-num)) {
                result += firstArray.get(-num)
            }
        }
    }
    return result
};
