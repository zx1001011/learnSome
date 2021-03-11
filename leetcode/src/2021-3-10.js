var caculate = function (s) {
    // console.info(s)
    const ops = [1];  // 操作栈，标识是否有操作
    let sign = 1;  // 为当前 计算的值

    let ret = 0;
    const n = s.length;
    let i = 0;

    console.info(n)

    while (i < n) {
        // console.info('i = ', i)
        // console.info('s[i] = ', s[i])
        // console.info('sign = ', sign)
        // console.info('ops = ', ops)
        if (s[i] === ' ') {
            // console.info('skip ...')
            i++;
        } else if (s[i] === '+') {
            // console.info('拿到新 ...')
            sign = ops[ops.length - 1]; // 拿到最新信息
            i++;
        } else if (s[i] === '-') {
            // console.info('拿到新 ...')
            sign = -ops[ops.length - 1]; // 拿到最新信息
            i++;
        } else if (s[i] === '(') {
            // console.info('入栈...')
            ops.push(sign); // 入栈
            i++;
        } else if (s[i] === ')') {
            // console.info('出栈...')
            ops.pop(); // 出栈
            i++;
        } else {
            // 是数字就计算...
            // console.info('计算...')
            let num = 0;
            while (i < n && !(isNaN(Number(s[i]))) && s[i] !== ' ') {
                num = num * 10 + s[i].charCodeAt() - '0'.charCodeAt();
                // console.info('s[i]: ', s[i])
                // console.info('num: ', num)
                i++;
            }
            // console.info('sign: ', sign)
            // console.info('num: ', num)
            // console.info('ret: ', ret)
            ret += sign * num;
            // console.info('得到：', ret)
        }
    }
    return ret;
}

// var result = caculate(" (2 + (2 - 1)) - 10")
// console.log("result = ", result)