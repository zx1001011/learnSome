var searchMatrix = function (matrix, target) {
    /**
     * 二分查找？
     */
    var row = matrix.length - 1, col = matrix[0].length - 1
    var res = false
    if (row < 0 || col < 0) return false
    if (matrix[0][0] > target || matrix[row][col] < target) return false
    while (row >= 0) {
        console.log(row)
        if ((matrix[row][0] <= target && matrix[row][col] >= target) ||
            (matrix[row][0] <= target && matrix[row + 1][0] > target)) {
            console.log('在这一行')
            for (let j = col; j >= 0; j--) {
                if (matrix[row][j] === target) {
                    return true
                }
            }
            break
        } else if (matrix[row][0] > target) {
            row = parseInt((0 + row) / 2)
        } else {
            row++
        }
    }
    return res
};
// var res = searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13)
// console.log(res)
var res = searchMatrix([[-10,-10],[-9,-9],[-8,-6],[-4,-2],[0,1],[3,3],[5,5],[6,8]],
    0)
console.log(res)