var countBits = function(num) {

    var numbers = []

    for(var i = 0; i <= num; i++) {
        var bin = []
        var remainder
        var divisor = i
        var j = 0
        while(divisor > 0) {
            bin[j++] = divisor % 2
            divisor = Math.floor(divisor / 2)
        }
        if (bin.length == 0) {
            numbers[i] = 0
        } else {
            numbers[i] = bin.filter(function(a) {return a == 1}).length
        }
    }
    return numbers
};
