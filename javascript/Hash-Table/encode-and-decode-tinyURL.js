let chars = []

for (let i = 0; i <= 25; i ++) {
    chars.push(String.fromCharCode(97 + i))
}

let allChars = ['0','1','2','3','4','5','6','7','8','9'].concat(chars).concat(chars.join('').toUpperCase().split(''))

let urlsMap = {}

let getSixLetterRandomNum = function () {
    let ranNum = ''
    for (let i = 0; i <= 5; i ++) {
        ranNum += allChars[Number((Math.random() * 100 % 62).toFixed())]
    }
    return ranNum
}

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    let ranNum
    while (true) {
        ranNum = getSixLetterRandomNum()
        if (!urlsMap[ranNum]) {
            urlsMap[ranNum] = longUrl
            break;
        }
    }
    return 'http://tinyurl.com/' + ranNum
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    const ranNum = shortUrl.split('/')[shortUrl.split('/').length - 1]
    return urlsMap[ranNum]
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
