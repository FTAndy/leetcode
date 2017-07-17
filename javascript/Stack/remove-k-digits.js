/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    if (num.length == 0 || num.length <= k) {
        return "0"
    }
    let stack = []
    for (let i = 0; i <= num.length - 1; i++) {
        while (stack[stack.length - 1] > num[i] && k > 0) {
            stack.pop()
            k--
        }
        stack.push(num[i])
    }
    let str = stack.join('').slice(0, stack.length - k)
    while (str[0] === '0' && str.length > 1) {
        str = str.slice(1, str.length)
    }
    return str
};
