/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let result = 0
    for (let i = 0; i <= grid.length - 1; i++) {
        for (let j = 0; j <= grid[i].length - 1; j++) {
            if (grid[i][j] == 1) {
                let side = 4
                if (grid[i][j-1] == 1) {
                    side--
                }
                if (grid[i][j+1] == 1) {
                    side--
                }
                if (grid[i+1] && grid[i+1][j] == 1) {
                    side--
                }
                if (grid[i-1] && grid[i-1][j] == 1) {
                    side--
                }
                result += side
            }
        }
    }
    return result
};
