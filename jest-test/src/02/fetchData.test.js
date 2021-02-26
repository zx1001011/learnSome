import { fetchData, fetchTwoData } from './fetchData';

// test('fetchData 方法测试', (done) => {
//     // done() 表示接口请求完成之后 
//     fetchData((data) => {
//         // console.log(data)
//         expect(data).toEqual({
//             success: true
//         })
//         done()
//     })
// })

test('fetchTwoData 方法测试', () => {
    fetchTwoData().then(response => {
        expect(response.data).toEqual({
            success: true
        })
    })
})
