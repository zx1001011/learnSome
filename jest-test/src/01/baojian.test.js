const { baojian1, baojian2 } = require('./baojian')

test("baojian1", () => {
    /**
     * toBe : === 绝对相等
     * toEqual :  == 是可以的
     * toNull : 匹配 null 值
     */
    expect(baojian1(200)).toBe("至尊服务")
})

test("baojian2", () => {
    expect(baojian2(200)).toBe("单人服务")
})