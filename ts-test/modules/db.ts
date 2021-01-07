let dbUrl = 'http://localhost:3000/'
export function getData(): any[]{
    console.log('获取到数据')
    return [{
        title: '1'
    }, {
        title: '2'
    }]
}
export function save(): boolean {
    console.log('保存数据成功')
    return true
}

function update(): boolean {
    console.log('更新数据成功')
    return true
}

export {
    dbUrl, update
}

var port = 8000
// export 可以使用多次， export default 只能用一次
export default port  // import port from '..'