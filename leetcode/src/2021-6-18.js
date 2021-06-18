var smallestGoodBase = function (n) {
    /**
        进制计算：
        1. 十进制 转为 k 进制
        2. 检查每一位都为 1, & 可以用来判断
     */

    var min = n
    for (var i = n; i > n / 2; i--) {
        if (computeBase1(n, i)) {
            min = Math.min(min, i)
        }
        if (n - i >= 2 && computeBase1(n, n - i)) {
            min = Math.min(min, n - i)
        }
    }
    return min
};
const computeBase1 = function (num, k) {
    var a = []
    while (num > 0) {
        yushu = num % k;
        a.unshift(yushu);
        // console.log(num + ',' + yushu)
        if (yushu !== 1) {
            return false
        }
        num = parseInt(num / k);
    }
    console.log('数据 ：', num)
    console.log('进制 ：', k)
    console.log('数组 ：', a)
    return true
}
computeBase1(100, 99)
smallestGoodBase(13)