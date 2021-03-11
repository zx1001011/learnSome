/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function(s) {
    /**
     * 先乘除后加减
     * + - 的数先压入栈中
     * x / 与栈顶元素进行计算
     */
    let arr = []
    let res = 0
    let curOpt = 1 // 1:+,2:-,3:*,4:/
     for (let i = 0; i < s.length; i++) {
        console.log(i)
        console.log(s[i])
        switch(s[i]) {
            case ' ': break
            case '+':
                curOpt = 1
                break
            case '-':
                curOpt = 2
                break
            case '*':
                curOpt = 3
                break
            case '/':
                curOpt = 4
                break
            default:
                let num = 0
                while(i < s.length && !(isNaN(Number(s[i]))) && s[i] !== ' ') {
                    num = num * 10 + s[i].charCodeAt() - '0'.charCodeAt()
                    i++
                }
                i -= 1
                console.log('curOpt : ', curOpt)
                console.log('num : ', num)
                if (curOpt === 2) {
                    arr.push(-num)    
                } else if (curOpt === 3) {
                    arr[arr.length - 1] = arr[arr.length - 1] * num
                } else if (curOpt === 4) {
                    arr[arr.length - 1] = parseInt(arr[arr.length - 1] / num)
                } else {
                    arr.push(num)
                }
                console.log('arr : ', arr)
                break
        }
    }
    for (let i = 0; i < arr.length; i++) {
        res += arr[i]
    }
    console.log(arr)
    console.log(res)
    return res
};
calculate("14-3/2")