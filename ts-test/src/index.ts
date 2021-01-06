let str: string = "你好 ts"

// ts 中方法的重载
function getInfo(str: string): string
function getInfo(str: number): number
function getInfo(str: any): any {
    if (typeof str === 'string') {
        return '我的名字是' + str
    } else {
        return '我的年龄是' + str
    }
}
// console.log(getInfo('张三')) // 我的名字是张三
// console.log(getInfo(20)) // 我的年龄是20
// console.log(getInfo(false)) // 语法报错