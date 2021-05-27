var reverseParentheses = function(s) {
    /**
    字符串是否反转？
        单数层： 反转
        双数层： 不反转
     */
    let res = []
    let len = s.length
    let i = 0
    let outer = 0
    while(i < len) {
        str = ''
        switch(s[i]) {
            case '(': 
                outer += 1;
                str = '('
                i += 1
                break
            case ')':
                outer -= 1;
                str = ')'
                i += 1
                break
            default: 
                if (outer % 2 === 1) {
                    while(s[i] !== ')' && s[i] !== '(' && i < len) {
                        str = s[i] + str
                        i += 1
                    }
                } else {
                    while(s[i] !== ')' && s[i] !== '(' && i < len) {
                        str += s[i]
                        i += 1
                    }
                }
                break
        }
        res.push(str)
    }
    console.log(res)
    let left = 0, right = 0, flag = true
    i = 0
    outer = 0
    let arr = []
    while(i < res.length) {
        if (res[i] === '(') {
            outer += 1
            i += 1
        } else if (res[i] === ')') {
            outer -= 1
            i += 1
        } else {
            if (outer % 2 === 0) {

            } else {
                arr.slice(left, 0, res[i])
                left += 1
            }
        }
    }
    return res.join('')
};
console.log("(ed(et(oc))el)")
console.log(reverseParentheses("(ed(et(oc))el)"))
// console.log(reverseParentheses("a(bcdefghijkl(mno)p)q")) // 单层括号外面的出错
// console.log(reverseParentheses("(u(love)i)"))  // 两层： 对
// console.log(reverseParentheses("(abcd)")) // 一层：  对