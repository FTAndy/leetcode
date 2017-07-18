/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    const uniqueCandies = new Set(candies)
    if (uniqueCandies.size > candies.length/2) {
        return candies.length/2
    } else {
        return uniqueCandies.size
    }
};
