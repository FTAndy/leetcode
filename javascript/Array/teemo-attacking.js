/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    if (timeSeries.length === 0)
        return 0
    let begin = timeSeries[0]
    let total = duration
    for (let i = 1; i < timeSeries.length; i++) {
        total += timeSeries[i] - duration > begin ? duration : timeSeries[i] - begin
        begin = timeSeries[i]
    }
    return total
};
