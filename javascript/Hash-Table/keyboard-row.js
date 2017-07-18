/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const a = 'qwertyuiop'
    const firstLine = a.concat(a.toUpperCase())
    const b = 'asdfghjkl'
    const secondLine = b.concat(b.toUpperCase())
    const c = 'zxcvbnm'
    const thirdLine = c.concat(c.toUpperCase())
    const out = []
    for (let i = 0; i <= words.length - 1; i++) {
        let flag = true
        let currentLine
        if (firstLine.indexOf(words[i][0]) >= 0) {
            currentLine = firstLine
        } else if (secondLine.indexOf(words[i][0]) >= 0) {
            currentLine = secondLine
        } else if (thirdLine.indexOf(words[i][0]) >= 0) {
            currentLine = thirdLine
        }
        for (let j = 1; j <= words[i].length - 1; j++) {
            if (currentLine.indexOf(words[i][j]) == -1) {
                flag = false
                break;
            }
        }
        if (flag) {
            out.push(words[i])
        }
    }
    return out
};

var findWords = function(words) {
    return words.filter(word => /^[qwertyuiop]*$|^[asdfghjkl]*$|^[zxcvbnm]*$/.test(word.toLowerCase()))
}
