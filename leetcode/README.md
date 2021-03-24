<!-- 算法题刷题记录 -->
# 简单回顾旅程

## 日记表格

## 记录
| 序号 | 时间 | 题目 | 知识点 | 难度 | 自行是否做出 | 是否理解 | 有几种方法 | 备注 |
| ---- | ---- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 2021.2.26 | 1178. 猜字谜 | 位压缩 | 困难 | 超时TT | 暂未全部理解 | 2 |  |
| 2 | 2021.3.1 | 303. 区域和检索 - 数组不可变 | 前缀和 | 简单 | 是 | 理解 | 3 |  |
| 3 | 2021.3.3 | 304. 二维区域和检索 - 矩阵不可变 | 前缀和 | 中等 | 是 | 理解 | 2 |  |
| 4 | 2021.3.5 | 232. 用栈实现队列 | 模拟队列 | 简单 | 是 | x(直接用数组实现的##) |  |
| 5 | 2021.3.5 | 338. 比特位计数 | 位运算 + 动态规划 | 中等 | 是 | 是 | 3 | 补偿 |
| 6 | 2021.3.5 | 354. 俄罗斯套娃信封问题 | 二分查找 + 动态规划 | 困难 | 否 | 否 | 2 | 补卡 |
| 7 | 2021.3.8 | 132. 分割回文串II | 滑动窗口 + 动态规划 | 困难 | 否 | 否 | 2 |  |
| 8 | 2021.3.9 | 1047. 删除字符串中的所有相邻重复项 | 简单数据结构 - 栈/队列 | 简单 | 是 | 是 | 5 | 主要是用栈、队列 |
| 9 | 2021.3.10 | 224. 基本计算器 | 括号展开 + 栈 | 困难 | 否 | 否 | 1 |  主要是利用 栈 |
| 10 | 2021.3.11 | 227. 基本计算器 II | 栈 | 中等 | 是 | 还行 | 1 | 复习昨天 |
| 11 | 2021.3.12 | 331. 验证二叉树的前序序列化 | 栈 | 中等 | 否 | 否 | 2 | 没看懂题目 |
| 12 | 2021.3.15 | 54. 螺旋矩阵 | 模拟、按层模拟 | 中等 | 否 | 否 | 2 | 看懂题目，突然不知道怎么组织代码 |
| 13 | 2021.3.16 | 59. 螺旋矩阵 II | 模拟、按层模拟 | 中等 | cv | 否 | 2 | 昨天一样 |
| 14 | 2021.3.17 | 115. 不同的子序列 | 动态规划 | 困难 | cv | 否 | 1 | TT至今没有看 |  
| 15 | 2021.3.18 | 92. 反转链表 II | 反转链表 | 中等 | 是 | 是 | 1 | 链表知识，由于c语言指针一点都不可怕，所以慢慢分析，虽然代码可能比较臃肿 |
| 16 | 2021.3.19 | 1603. 设计停车系统 | 数组或者... | 简单 | 是 | 是 | 2 | 非常简单的构造一个类，考虑数据结构就可以，够用即可 |
| 17 | 2021.3.22 | 191. 位1的个数 | 位运算 | 简单 | 是 | 否 | 1 | 最近脑子瓦特了 |
| 18 | 2021.3.23 | 341. 扁平化嵌套列表迭代器 | 栈或者DFS递归 | 中等 | 否 | 否 | 2 | 没有能够组织好思路，编写代码，但是知道有这两个方法 |
| 19 | 2021.3.24 | 456. 132模式 | 单调栈、二分查找 | 中等 | 否 | 否 | 3 | 没有想到枚举每个3 |
## 内容

### 2021.2.26 
#### 题目描述：
[描述](https://leetcode-cn.com/problems/number-of-valid-words-for-each-puzzle/)

#### 题目理解：
```javascript
/**
* 计算一个单词的谜底数量：
*    包含首字母，谜底中的字母存在在谜面上
* 怎么缩小全部计算的计算量呢？
*    先用  某 class(数据结构) 分析下当前的单词？‘
*    以方便比较？
*    给字母排序？
*/
```

#### 解决办法：
1. 自己的解法，超时，用的 Map 数据结构来解决的，最后一个测试案例通不过
```javascript
/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function(words, puzzles) {
    /**
     * 计算一个单词的谜底数量：
     *    包含首字母，谜底中的字母存在在谜面上
     * 怎么缩小全部计算的计算量呢？
     *    先用  某 class(数据结构) 分析下当前的单词？‘
     *    以方便比较？
     *    给字母排序？
     */
    var res = []
    var ws = []
    for (var i = 0; i < words.length; i++) {
        ws.push(new Word(words[i]))
    }
    for (var i = 0; i < puzzles.length; i++) {
        var count = 0;
        var word = new Word(puzzles[i])
        for (var j = 0; j < ws.length; j++) {
            if (ws[j].find(puzzles[i][0]) && word.compare(ws[j].map)) {
                count += 1
            }
        }
        res.push(count)
    }
    return res
};
class Word {
    constructor(word) {
        this.map = new Map()
        for (var i = 0; i < word.length; i++) {
            this.map.set(word[i], 1)
        }
    }

    find(char) {
        return this.map.has(char)
    }

    compare(mapW) {
        if (mapW.size > this.map.size) return false
        for (let key of mapW.keys()) {
            if (!this.map.has(key))  {
                return false
            }
        }
        return true
    }
}
```

2. 二进制位压缩 --- 某个大佬的 answer
```javascript 
/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function(words, puzzles) {
     const map = {}; // 存放所有单词对应的二进制数
    for (const word of words) { // 遍历单词表
        const bit = getBit(word); // 单词对应的二进制数
        if (map[bit] === undefined) { // 存入map，统计出现次数
            map[bit] = 1;
        } else {
            map[bit]++;
        }
    }
    const res = new Array(puzzles.length).fill(0); // 待返回的数组，所有puzzle的谜底数量
    for (let i = 0; i < puzzles.length; i++) { // 遍历谜语
        const puzzleBit = getBit(puzzles[i]); // 当前谜语的二进制数
        const first = getBit(puzzles[i][0]); // 谜语的第一个字符对应的二进制数，比如c就是100

        let n = puzzleBit; // n初始为puzzleBit这个组合
        while (n > 0) { // 遍历puzzle的所有字母组合，当n=0时终止遍历
            // 按位都是1才为1，否则为0，即n这个组合包含puzzle的首字母
            // 而且n这个组合在map中有值，即有单词长n这样，值累加给res[i]
            if ((n & first) != 0 && map[n] > 0) {
                res[i] += map[n];
            }
            // n-1 AND puzzleBit，生成一个puzzleBit的新的子集合
            n = (n - 1) & puzzleBit;
        }
    }
    return res;
};
// word转成用二进制数表示的字符集合
function getBit(word) {
    let res = 0;
    for (const c of word) {
        const offset = c.charCodeAt(0) - 97; // a在最低位，求出当前字符的偏移位
        const status = 1 << offset; // 将二进制的1左移offset位，右边用0填充
        res = res | status; // 按位或，该位至少有一个1时，才为1（出现过），否则为0
    }
    return res;
}
```

3. 官方题解 - 二进制压缩
```javascript
/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function(words, puzzles) {
    const frequency = new Map();

    for (const word of words) {
        let mask = 0;
        for (const ch of word) {
            mask |= (1 << (ch.charCodeAt() - 'a'.charCodeAt()));
        }
        if (CountOne(mask) <= 7) {
            frequency.set(mask, (frequency.get(mask) || 0) + 1);
        }
    }

    const ans = [];
    for (const puzzle of puzzles) {
        let total = 0;

        // 枚举子集方法一
        // for (let choose = 0; choose < (1 << 6); ++choose) {
        //     let mask = 0;
        //     for (let i = 0; i < 6; ++i) {
        //         if (choose & (1 << i)) {
        //             mask |= (1 << (puzzle[i + 1].charCodeAt() - 'a'.charCodeAt()));
        //         }
        //     }
        //     mask |= (1 << (puzzle[0].charCodeAt() - 'a'.charCodeAt()));
        //     if (frequency.has(mask)) {
        //         total += frequency.get(mask);
        //     }
        // }
        // 枚举子集方法二
        let mask = 0;
        for (let i = 1; i < 7; ++i) {
            mask |= (1 << (puzzle[i].charCodeAt() - 'a'.charCodeAt()));
        }
        let subset = mask;
        while (subset) {
            let s = subset | (1 << (puzzle[0].charCodeAt() - 'a'.charCodeAt()));
            if (frequency.has(s)) {
                total += frequency.get(s);
            }
            subset = (subset - 1) & mask;
        }
        // 在枚举子集的过程中，要么会漏掉全集 mask，要么会漏掉空集
        // 这里会漏掉空集，因此需要额外判断空集
        if (frequency.has(1 << (puzzle[0].charCodeAt() - 'a'.charCodeAt()))) {
            total += frequency.get(1 << (puzzle[0].charCodeAt() - 'a'.charCodeAt()));
        }
        ans.push(total);
    }
    return ans;
};

function CountOne(n) {
    const str = n.toString(2);
    let count = 0;
    for (const ch of str) {
        if (parseInt(ch) === 1) {
            count++;
        }
    }
    return count;
}
```


#### 其他：
1. 合理利用题目给出的条件
2. 丝毫没有想到 <em><strong>二进制位压缩</strong></em> 来记录，只想到 map 来记录，顺序是否考虑感觉不是那么重要，该用的循环都用了

### 2021.3.1 
#### 题目描述：
[描述](https://leetcode-cn.com/problems/range-sum-query-immutable/)

#### 题目理解：
```javascript
/**
* 实现一个类
* 原型链上实现一个简单计算的函数（肯定是要对数组遍历一遍的）
*/
```

#### 解决办法：
主要理解 prototype ：   
定义一个简单的类 :   
```javascript
function MyClass() {

};
```
给类增加属性和方法 :    
```javascript
// 添加属性用 this 
function MyClass(name, age) {
  // 属性
  this.name = name;
  this.age = age;
  // 方法
  this.toString() = function(){
    alert(this.name +":"+ this.age);
  };
};
```
每一个函数都会包含一个 prototype 属性，这个属性指向了一个prototype对象，我们可以指定函数对应的 prototype 对象。如果不指定，则函数的 prototype 属性将指向一个默认的 prototype 对象，并且次默认的 prototype 对象的 constructor 属性又会指向该函数。
当用构造函数创建一个新的对象时，新的对象会获取构造函数的 prototype 属性所指向的 prototype 对象的所有属性和方法，这样一来，构造函数对应的 prototype 对象所做的任何操作都会反映到它所生成的对象上，所有的这些对象将共享与构造函数对应的 prototype 对象的属性和方法。
虽然新创建的对象可以使用它的构造函数所指向的 prototype 对象的属性和方法，但不能像构造函数那样直接调用 prototype 对象（对象没有 prototype 属性）。
简而言之，就是如果我们使用函数的 prototype 对象来给函数添加方法，那么在创建一个新的对象的时候，并不会复制这个函数的所有方法，而是指向了这函数的所有方法。
```javascript
function MyClass(name,age){
  this.name = name;
  this.age = age;
}
// 利用 prototype 来实现封装的, 给类添加方法的实现
MyClass.prototype = {
  toString:function(){
    //
  },
  sayHellow:function(){
    //
  }
};
var cls1 = new MyClass("liming",10);
cls1.toString(); //
var cls2 = new MyClass("zhang",10);
cls2.toString();
```


1. 直接写
```javascript
var NumArray = function(nums) {
    this.array = nums
};

NumArray.prototype.sumRange = function(i, j) {
    var sum = 0
    for (var index = i; index <= j; index++) {
        sum += this.array[index]
    }
    return sum
};
```

2. 官方题解 - 前缀和
```javascript
var NumArray = function(nums) {
    const n = nums.length;
    this.sums = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        this.sums[i + 1] = this.sums[i] + nums[i];
    }
};

NumArray.prototype.sumRange = function(i, j) {
    return this.sums[j + 1] - this.sums[i];
};
```

3. 分块来优化暴力
```C++
class NumArray {
private:
    static constexpr int block_size = 100;
    vector<int> nums;
    vector<int> block_sum;

public:
    NumArray(vector<int>& nums) {
        this->nums = nums;

        int i = 0;
        while (i + block_size <= nums.size()) {
            block_sum.push_back(accumulate(nums.begin() + i, nums.begin() + i + block_size, 0));
            i += block_size;
        }
    }
    
    int sumRange(int i, int j) {
        int k = i, ans = 0;
        while (k <= j) {
            if (k % block_size == 0 && k + block_size - 1 <= j) {
                ans += block_sum[k / block_size];
                k += block_size;
            }
            else {
                ans += nums[k];
                ++k;
            }
        }
        return ans;
    }
};
```



#### 其他：
nothing...  

### 2021.3.2
#### 题目描述：
[描述](https://leetcode-cn.com/problems/range-sum-query-2d-immutable/)

#### 题目理解：
```
/**
 * 昨天是数组不可变, 使用的方法是前缀和
 * 今天也是的, 应该.
 */
```

#### 解决办法：
1. 照昨天的理解写
```javascript
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    /**
     * 昨天是数组不可变, 使用的方法是前缀和
     * 今天也是的, 应该.
     */
    this.matrix = matrix
    this.sumMatrix = matrix
    for (var i = 0; i < this.sumMatrix.length; i++) {
        for (var j = 0; j < this.sumMatrix[i].length; j++) {
            if (j >= 1) {
                if (i >= 1) {
                    this.sumMatrix[i][j] = matrix[i][j] + this.sumMatrix[i - 1][j] + this.sumMatrix[i][j - 1]
                        - this.sumMatrix[i - 1][j - 1]
                } else {
                    this.sumMatrix[i][j] += this.sumMatrix[i][j - 1]
                }
            } else {
                if (i >= 1) {
                    this.sumMatrix[i][j] += this.sumMatrix[i - 1][j]
                }
            }
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    if (row1 === 0) {
        if (col1 === 0) {
            return this.sumMatrix[row2][col2]
        } else {
            return this.sumMatrix[row2][col2] - this.sumMatrix[row2][col1 - 1]
        }
    } else {
        if (col1 === 0) {
            return this.sumMatrix[row2][col2] - this.sumMatrix[row1 - 1][col2]
        } else {
            return this.sumMatrix[row2][col2] - this.sumMatrix[row2][col1 - 1] 
            - this.sumMatrix[row1 - 1][col2] + this.sumMatrix[row1 - 1][col1 - 1] 
        }
    }
};
```

2. 官方题解 - [一维|二维]前缀和
```javascript
var NumMatrix = function(matrix) {
    const m = matrix.length;
    if (m > 0) {
        const n = matrix[0].length;
        this.sums = new Array(m).fill(0).map(() => new Array(n + 1).fill(0));
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                this.sums[i][j + 1] = this.sums[i][j] + matrix[i][j];
            }
        }
    }
};

NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let sum = 0;
    for (let i = row1; i <= row2; i++) {
        sum += this.sums[i][col2 + 1] - this.sums[i][col1];
    }
    return sum;
};
```

#### 其他：
考验对昨天知识点的理解

### 2021.3.5
- 栈实现队列 : 简单

- 比特为计数
    #### 题目描述：
    [描述](https://leetcode-cn.com/problems/counting-bits/)

    #### 题目理解：
    ```javascript
    /**
    * 需要看每个数的二进制值组成,然后计算
    * 位运算：
    * 1. & 同1为1
    * 2. | 同0为0
    * 3. ~ 取反
    * 4. ^(异或) 同为0，异为1
    */
    ```

    #### 解决办法：
    1. 直接计算
    ```javascript
    /**
    * @param {number} num
    * @return {number[]}
    */
    var countBits = function(num) {
        /**
        * 需要看每个数的二进制值组成,然后计算
        * 位运算：
        * 1. & 同1为1
        * 2. | 同0为0
        * 3. ~ 取反
        * 4. ^(异或) 同为0，异为1
        */
        var res = []
        for (var i = 0; i <= num; i++){
            var tnum = i
            var c = 0
            // while(tnum > 0) { 
            while((tnum | 0) !== 0) { 
                c += tnum & 1
                tnum = tnum >> 1
            }
            res.push(c)
        }
        return res
    };
    ```

    2. 官方题解 -> 动态规划
    ```javascript 
    // 最高有效位
    /**
    * i & (i - 1)可以去掉i最右边的一个1（如果有），因此 i & (i - 1）是比 i 小的，
    * 而且i & (i - 1)的1的个数已经在前面算过了，所以i的1的个数就是 i & (i - 1)的1的个数加上1
    **/
    var countBits = function(num) {
        const bits = new Array(num + 1).fill(0);
        let highBit = 0;
        for (let i = 1; i <= num; i++) {
            if ((i & (i - 1)) == 0) {
                highBit = i;
            }
            bits[i] = bits[i - highBit] + 1;
        }
        return bits;
    };

    // 最低有效位
    /**
    * i >> 1会把最低位去掉，因此i >> 1 也是比i小的，同样也是在前面的数组里算过。
    * 当 i 的最低位是0，则 i 中1的个数和i >> 1中1的个数相同；当i的最低位是1，
    * i 中1的个数是 i >> 1中1的个数再加1
    **/
    var countBits = function(num) {
        const bits = new Array(num + 1).fill(0);
        for (let i = 1; i <= num; i++) {
            bits[i] = bits[i >> 1] + (i & 1);
        }
        return bits;
    };
    ```

    #### 其他：
    1. 理解前面算过的与后面的联系

- 俄罗斯套娃信封问题
    #### 题目描述：
    [描述](https://leetcode-cn.com/problems/russian-doll-envelopes/)

    #### 题目理解：
    ```javascript
     /**
     * 先按照 x，y 排序？
     */
    var res = 1
    envelopes.sort(function (o1, o2) {
        if (o1[0] === o2[0]) {
            return o1[1] - o2[1]
        } else {
            return o1[0] - o2[0]
        }
    })
    /**
     * 然后动态规划？不会
     * 从大的开始，尽量选接近的套 - > 怎么判断尽量接近呢 ？ 
     * 答案是错的！！！
     * 因为不是最佳路径
     */
    for (var j = envelopes.length - 1; j > 0; j--) {
        var sum = 1
        var cur = j
        for (var i = cur - 1; i >= 0; i--) {
            if (envelopes[cur][0] > envelopes[i][0] && envelopes[cur][1] > envelopes[i][1]) {
                sum += 1
                cur = i
            }
        }
        if (sum > res) {
            res = sum
        }
        console.log(j)
        console.log(res)
    }
    return res
    ```

    #### 解决办法：
    1. 官方题解 -> 动态规划
    ```javascript 
    // 直接动态规划
    var maxEnvelopes = function(envelopes) {
        if (envelopes.length === 0) {
            return 0;
        }
        
        const n = envelopes.length;
        envelopes.sort((e1, e2) => {
            if (e1[0] !== e2[0]) {
                return e1[0] - e2[0];
            } else {
                return e2[1] - e1[1];
            }
        })

        const f = new Array(n).fill(1);
        let ans = 1;
        for (let i = 1; i < n; ++i) {
            for (let j = 0; j < i; ++j) {
                if (envelopes[j][1] < envelopes[i][1]) {
                    f[i] = Math.max(f[i], f[j] + 1);
                }
            }
            ans = Math.max(ans, f[i]);
        }
        return ans;
    };
    // 二分查找 + 动态规划
    var maxEnvelopes = function(envelopes) {
        if (envelopes.length === 0) {
            return 0;
        }
        
        const n = envelopes.length;
        envelopes.sort((e1, e2) => {
            if (e1[0] - e2[0]) {
                return e1[0] - e2[0];
            } else {
                return e2[1] - e1[1];
            }
        })

        const f = [envelopes[0][1]];
        for (let i = 1; i < n; ++i) {
            const num = envelopes[i][1];
            if (num > f[f.length - 1]) {
                f.push(num);
            } else {
                const index = binarySearch(f, num);
                f[index] = num;
            }
        }
        return f.length;
    }

    const binarySearch = (f, target) => {
        let low = 0, high = f.length - 1;
        while (low < high) {
            const mid = Math.floor((high - low) / 2) + low;
            if (f[mid] < target) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return low;
    };
    ```

    #### 其他：
    1. 知道是动态规划，完全遍历的问题，但是不知道怎么敲代码

### 2021.3.8 妇女节（*.*)
#### 题目描述：
[描述](https://leetcode-cn.com/problems/palindrome-partitioning-ii/)

#### 题目理解：
```
/**
* 动态规划 ？
* 滑动窗口 ？
* 毫无头绪 TT
* 对上周知识点的考察 ？？
*/
```

#### 解决办法：
1. 官方题解 - 动态规划
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    const n = s.length;
    const g = new Array(n).fill(0).map(() => new Array(n).fill(true));

    for (let i = n - 1; i >= 0; --i) {
        for (let j = i + 1; j < n; ++j) {
            g[i][j] = s[i] == s[j] && g[i + 1][j - 1];
        }
    }

    const f = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    for (let i = 0; i < n; ++i) {
        if (g[0][i]) {
            f[i] = 0;
        } else {
            for (let j = 0; j < i; ++j) {
                if (g[j + 1][i]) {
                    f[i] = Math.min(f[i], f[j] + 1);
                }
            }
        }
    }

    return f[n - 1];
};
```

#### 其他：
1. 毫无头绪，一拿到动态规划(所有情况遍历)就卡壳了
2. 脑子一片浆糊，先cv一下


### 2021.3.9
#### 题目描述：
[描述](https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string/)

#### 题目理解：
```
/**
* 递归删除
*/
```

#### 解决办法：
1. 直接递归
    ```javascript
    /**
    * @param {string} S
    * @return {string}
    */
    var removeDuplicates = function(S) {
        let res = S.split('')
        let flag = true
        for (let i = 0; i < res.length - 1; i++) {
            if (res[i] === res[i + 1]) {
                flag = false
                res.splice(i + 1, 1)
                res.splice(i, 1)
            }
        }
        if (!flag) return removeDuplicates(res.join(''))
        return res.join('')
    };
    ```

2. 官方题解 - 栈
    ```javascript
    var removeDuplicates = function(S) {
        const stk = [];
        for (const ch of S) {
            if (stk.length && stk[stk.length - 1] === ch) {
                stk.pop();
            } else {
                stk.push(ch);
            }
        }
        return stk.join('');
    };
    ```

3. 其他解法[->](https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string/solution/cong-30-dao-100wu-chong-shi-xian-jie-jue-vkah/)

#### 其他：
1. 可以稍微动下脑子，用用数据结构知识。

### 2021.3.10
#### 题目描述：
[描述](https://leetcode-cn.com/problems/basic-calculator/)

#### 题目理解：
```
/**
* 栈 ？  但是不会写
*/
```

#### 解决办法：
1. 官方题解 - [括号展开 + 栈]
    ```javascript
    var caculate = function (s) {
        // console.info(s)
        const ops = [1];  // 操作栈，标识是否有操作
        let sign = 1;  // 为当前 计算的值

        let ret = 0;
        const n = s.length;
        let i = 0;

        // console.info(n)

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
    ```
#### 其他：
1. 栈 实现

### 2021.3.11
#### 题目描述：
[描述](https://leetcode-cn.com/problems/basic-calculator-ii/)

#### 题目理解：
```
/**
* 栈 
*/
```

#### 解决办法：
1. 官方题解 - [栈]
    ```javascript
    var calculate = function(s) {
        s = s.trim();
        const stack = new Array();
        let preSign = '+';
        let num = 0;
        const n = s.length;
        for (let i = 0; i < n; ++i) {
            if (!isNaN(Number(s[i])) && s[i] !== ' ') {
                num = num * 10 + s[i].charCodeAt() - '0'.charCodeAt();
            }
            if (isNaN(Number(s[i])) || i === n - 1) {
                switch (preSign) {
                    case '+':
                        stack.push(num);
                        break;
                    case '-':
                        stack.push(-num);
                        break;
                    case '*':
                        stack.push(stack.pop() * num);
                        break;
                    default:
                        stack.push(stack.pop() / num | 0);
                }   
                preSign = s[i];
                num = 0;
            }
        }
        let ans = 0;
        while (stack.length) {
            ans += stack.pop();
        }
        return ans;
    }
    ```

2. 自己的解法
    ```javascript
    /**
    * @param {string} s
    * @return {number}
    **/
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
                    if (curOpt === 2) {
                        arr.push(-num)    
                    } else if (curOpt === 3) {
                        arr[arr.length - 1] = arr[arr.length - 1] * num
                    } else if (curOpt === 4) {
                        arr[arr.length - 1] = parseInt(arr[arr.length - 1] / num)
                    } else {
                        arr.push(num)
                    }
                    break
            }
        }
        for (let i = 0; i < arr.length; i++) {
            res += arr[i]
        }
        return res
    };
    ```

#### 其他：
1. 搞懂了昨天的就知道今天的怎么搞了

### 2021.3.12
#### 题目描述：
[描述](https://leetcode-cn.com/problems/verify-preorder-serialization-of-a-binary-tree/)

#### 题目理解：
```
/**
* 没看懂题目 
*/
```

#### 解决办法：
1. 官方题解 - [栈]
    ```javascript
    var isValidSerialization = function(preorder) {
        const n = preorder.length;
        let i = 0;
        const stack = [1];
        while (i < n) {
            if (!stack.length) {
                return false;
            }
            if (preorder[i] === ',') {
                ++i;
            } else if (preorder[i] === '#') {
                stack[stack.length - 1]--;
                if (stack[stack.length - 1] === 0) {
                    stack.pop();
                } 
                ++i;
            } else {
                // 读一个数字
                while (i < n && preorder[i] !== ',') {
                    ++i;
                }
                stack[stack.length - 1]--;
                if (stack[stack.length - 1] === 0) {
                    stack.pop();
                }
                stack.push(2);
            }
        }
        return stack.length === 0;
    };
    ```

2. 官方题解 - [计数]
    ```javascript
    var isValidSerialization = function(preorder) {
        const n = preorder.length;
        let i = 0;
        let slots = 1;
        while (i < n) {
            if (slots === 0) {
                return false;
            }
            if (preorder[i] === ',') {
                ++i;
            } else if (preorder[i] === '#') {
                --slots;
                ++i;
            } else {
                // 读一个数字
                while (i < n && preorder[i] !== ',') {
                    ++i;
                }
                ++slots; // slots = slots - 1 + 2
            }
        }
        return slots === 0;
    };
    ```

#### 其他：
1. 无效题目，不知道干啥，脑子疼

### 2021.3.15

#### 题目描述：
[描述](https://leetcode-cn.com/problems/spiral-matrix/)

#### 题目理解：
```
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    /**
     * 搞清方向即可： 顺时针旋转
     */
    var arr = []
    var i = 0, j = 0
    var m = matrix.length - 1, n = matrix[0].length - 1
    var layer = 0
    while(arr.length < matrix[0].length * matrix.length) {
        arr.push(matrix[i][j])
        /**
         * 怎么转？
         * 转折条件： (layer 随变化改变)
         *    第一个弯：i === layer, j === n - layer
         *      递进: j++
         *    第二个弯：j === n - layer, i === m - layer
         *      递进: i++
         *    第三个弯：j === layer, i === m - layer
         *      递进: j--
         *      完了之后：layer + 1
         *    第四个弯：j === layer, i === layer
         *      递进：i--
         */
        }

    }
    return arr
};
```

#### 解决办法：
1. 官方题解 - [模拟]
    ```javascript
    var spiralOrder = function(matrix) {
        if (!matrix.length || !matrix[0].length) {
            return [];
        }
        const rows = matrix.length, columns = matrix[0].length;
        const visited = new Array(rows).fill(0).map(() => new Array(columns).fill(false));
        const total = rows * columns;
        const order = new Array(total).fill(0);

        let directionIndex = 0, row = 0, column = 0;
        const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        for (let i = 0; i < total; i++) { 
            order[i] = matrix[row][column];
            visited[row][column] = true;
            const nextRow = row + directions[directionIndex][0], nextColumn = column + directions[directionIndex][1];
            if (!(0 <= nextRow && nextRow < rows && 0 <= nextColumn && nextColumn < columns && !(visited[nextRow][nextColumn]))) {
                directionIndex = (directionIndex + 1) % 4;
            }
            row += directions[directionIndex][0];
            column += directions[directionIndex][1];
        }
        return order;
    };
    ```

2. 官方题解 - [按层模拟]
    ```javascript
    var spiralOrder = function(matrix) {
        if (!matrix.length || !matrix[0].length) {
            return [];
        }

        const rows = matrix.length, columns = matrix[0].length;
        const order = [];
        let left = 0, right = columns - 1, top = 0, bottom = rows - 1;
        while (left <= right && top <= bottom) {
            for (let column = left; column <= right; column++) {
                order.push(matrix[top][column]);
            }
            for (let row = top + 1; row <= bottom; row++) {
                order.push(matrix[row][right]);
            }
            if (left < right && top < bottom) {
                for (let column = right - 1; column > left; column--) {
                    order.push(matrix[bottom][column]);
                }
                for (let row = bottom; row > top; row--) {
                    order.push(matrix[row][left]);
                }
            }
            [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
        }
        return order;
    };
    ```

#### 其他：
1. 额，只想到一层 for 循环，脑子瓦特了

### 2021.3.16
#### 题目描述：
[描述](https://leetcode-cn.com/problems/spiral-matrix-ii/)
#### 题目理解：
```javascript
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    /**
     * 昨天的升级版
     */
    var res = new Array(n).fill(0).map(() => new Array(n).fill(0));
    var num = 1
    const rows = n, columns = n;
    let left = 0, right = columns - 1, top = 0, bottom = rows - 1;
    while (left <= right && top <= bottom) {
        for (let column = left; column <= right; column++) {
            res[top][column] = num++;
        }
        for (let row = top + 1; row <= bottom; row++) {
            res[row][right] = num++;
        }
        if (left < right && top < bottom) {
            for (let column = right - 1; column > left; column--) {
                res[bottom][column] = num++;
            }
            for (let row = bottom; row > top; row--) {
                res[row][left] = num++;
            }
        }
        [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
    }
    return res
};
```
#### 解决办法：
1. 官方题解 - [模拟]
    ```javascript
    var generateMatrix = function(n) {
        const maxNum = n * n;
        let curNum = 1;
        const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
        let row = 0, column = 0;
        const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // 右下左上
        let directionIndex = 0;
        while (curNum <= maxNum) {
            matrix[row][column] = curNum;
            curNum++;
            const nextRow = row + directions[directionIndex][0], nextColumn = column + directions[directionIndex][1];
            if (nextRow < 0 || nextRow >= n || nextColumn < 0 || nextColumn >= n || matrix[nextRow][nextColumn] !== 0) {
                directionIndex = (directionIndex + 1) % 4; // 顺时针旋转至下一个方向
            }
            row = row + directions[directionIndex][0];
            column = column + directions[directionIndex][1];
        }
        return matrix;
    };
    ```

2. 官方题解 - [按层模拟]
    ```javascript
    var generateMatrix = function(n) {
        let num = 1;
        const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
        let left = 0, right = n - 1, top = 0, bottom = n - 1;
        while (left <= right && top <= bottom) {
            for (let column = left; column <= right; column++) {
                matrix[top][column] = num;
                num++;
            }
            for (let row = top + 1; row <= bottom; row++) {
                matrix[row][right] = num;
                num++;
            }
            if (left < right && top < bottom) {
                for (let column = right - 1; column > left; column--) {
                    matrix[bottom][column] = num;
                    num++;
                }
                for (let row = bottom; row > top; row--) {
                    matrix[row][left] = num;
                    num++;
                }
            }
            left++;
            right--;
            top++;
            bottom--;
        }
        return matrix;
    };
    ```
#### 其他：
1. 基础....

### 2021.3.17
#### 题目描述：
[描述](https://leetcode-cn.com/problems/distinct-subsequences/)
#### 题目理解：
```javascript
/**
 * 动态规划，全遍历
*/
```
#### 解决办法：
1. 官方解法 - 动态规划
    ```javascript
    var numDistinct = function(s, t) {
        /**
         * 动态规划，全遍历
        */
        const m = s.length, n = t.length
        if (m < n) {
            return 0
        }
        const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
        for (let i = 0; i <= m; i++) {
            dp[i][n] = 1
        }
        for (let i = m - 1; i >= 0; i--) {
            for (let j = n - 1; j >= 0; j--) {
                if (s[i] == t[j]) {
                    dp[i][j] = dp[i + 1][j + 1] + dp[i + 1][j]
                } else {
                    dp[i][j] = dp[i + 1][j]
                }
            }
        }
        return dp[0][0]
    };
    ```
#### 其他：
1. 又是动态规划，据说有什么状态转移方程

### 2021.3.18
#### 题目描述：
[描述](https://leetcode-cn.com/problems/reverse-linked-list-ii/)
#### 题目理解：
```javascript
/**
 * 反转链表
*/
```
#### 解决办法：
1. 直接反转
    ```javascript
    /**
    * Definition for singly-linked list.
    * function ListNode(val, next) {
    *     this.val = (val===undefined ? 0 : val)
    *     this.next = (next===undefined ? null : next)
    * }
    */
    /**
    * @param {ListNode} head
    * @param {number} left
    * @param {number} right
    * @return {ListNode}
    */
    var reverseBetween = function(head, left, right) {
        /**
        * 遍历一遍，找到开始反转节点，一个个开始反转，
        */
        if (left === right) return head
        var cur = 1
        var curP = head
        var preP = head
        var start = head
        while(cur <= right) {
            if (right === cur) {
                if (!start.next) {
                    break
                }
                if (!start.next.next) {
                    start.next = null
                } else {
                    if (left === 1) {
                        start.next = curP.next
                        curP.next = preP
                    } else {
                        start.next.next = curP.next
                        start.next = curP
                    }
                }
                curP.next = preP
                if (left === 1) {
                    head = curP
                }
                break
            }
            if (left > cur) {
                cur++
                preP = curP
                curP = curP.next
            } else if (left === cur) {
                start = preP
                cur++
                preP = curP
                curP = curP.next
            } else if (cur > left) {
                var tmp = curP.next
                curP.next = preP
                preP = curP
                curP = tmp
                cur++ 
            }
        }    
        return head
    };
    ```

2. 官方题解 - 穿针引线
    ```javascript
    var reverseBetween = function(head, left, right) {
        // 因为头节点有可能发生变化，使用虚拟头节点可以避免复杂的分类讨论
        const dummyNode = new ListNode(-1);
        dummyNode.next = head;

        let pre = dummyNode;
        // 第 1 步：从虚拟头节点走 left - 1 步，来到 left 节点的前一个节点
        // 建议写在 for 循环里，语义清晰
        for (let i = 0; i < left - 1; i++) {
            pre = pre.next;
        }

        // 第 2 步：从 pre 再走 right - left + 1 步，来到 right 节点
        let rightNode = pre;
        for (let i = 0; i < right - left + 1; i++) {
            rightNode = rightNode.next;
        }

        // 第 3 步：切断出一个子链表（截取链表）
        let leftNode = pre.next;
        let curr = rightNode.next;

        // 注意：切断链接
        pre.next = null;
        rightNode.next = null;

        // 第 4 步：同第 206 题，反转链表的子区间
        reverseLinkedList(leftNode);

        // 第 5 步：接回到原来的链表中
        pre.next = rightNode;
        leftNode.next = curr;
        return dummyNode.next;
    };

    const reverseLinkedList = (head) => {
        let pre = null;
        let cur = head;

        while (cur) {
            const next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }
    }
    ```
#### 其他：
无

### 2021.3.19
#### 题目描述：
[描述](https://leetcode-cn.com/problems/design-parking-system)
#### 题目理解：
```javascript
/**
 * 简单构造一个类
*/
```
#### 解决办法：
1. 直接用 Array 或者 Set
    ```javascript
    /**
    * @param {number} big
    * @param {number} medium
    * @param {number} small
    */
    var ParkingSystem = function(big, medium, small) {
        this.parkings = [big, medium, small]
    };

    /** 
    * @param {number} carType
    * @return {boolean}
    */
    ParkingSystem.prototype.addCar = function(carType) {
        if (this.parkings[Number(carType) - 1] > 0) {
            this.parkings[Number(carType) - 1]--
            return true
        } else {
            return false
        }
    };
    ```
2. 官方题解 - 模拟
    ```javascript
    var ParkingSystem = function(big, medium, small) {
        this.big = big;
        this.medium = medium;
        this.small = small;
    };

    ParkingSystem.prototype.addCar = function(carType) {
        if (carType === 1) {
            if (this.big > 0) {
                this.big--;
                return true;
            }
        } else if (carType === 2) {
            if (this.medium > 0) {
                this.medium--;
                return true;
            }
        } else if (carType === 3) {
            if (this.small > 0) {
                this.small--;
                return true;
            }
        }
        return false;
    };
    ```
#### 其他：
无

### 2021.3.22
#### 题目描述：
[描述](https://leetcode-cn.com/problems/number-of-1-bits/)
#### 题目理解：
```javascript
/**
 * >> 移位
 * & 同1为1
 * | 同0为0
 */
```
#### 解决办法：
1. 官方解答
    ```javascript
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    var hammingWeight = function(n) {
        /**
        * >> 移位
        * & 同1为1
        * | 同0为0
        */
        var ret = 0;
        for (var i = 0; i < 32; i++) {
            if (n & (1 << i)) {
                ret++;
            }
        }
        return ret;
    };
    ```
#### 其他：
无
### 2021.3.23
#### 题目描述：
[描述](https://leetcode-cn.com/problems/flatten-nested-list-iterator/)
#### 题目理解：
```javascript
/**
 *  栈
 */
```
#### 解决办法：
1. 官方解答 - [深度优先搜索DFS]
    ```javascript
    var NestedIterator = function(nestedList) {
        vals = [];
        const dfs = (nestedList) => {
            for (const nest of nestedList) {
                if (nest.isInteger()) {
                    vals.push(nest.getInteger());
                } else {
                    dfs(nest.getList());
                }
            }
        }
        dfs(nestedList);
    };

    NestedIterator.prototype.hasNext = function() {
        return vals.length > 0;
    };

    NestedIterator.prototype.next = function() {
        const val = vals[0];
        vals = vals.slice(1);
        return val;
    };
    ```
2. 官方解答 - [栈]
    ```javascript
    var NestedIterator = function(nestedList) {
        this.stack = nestedList;
    };

    NestedIterator.prototype.hasNext = function() {
        while (this.stack.length !== 0) {
            if (this.stack[0].isInteger()) {
                return true;
            } else {
                let cur = this.stack[0].getList();
                this.stack.shift();
                this.stack.unshift(...cur);
            }
        }
    };

    NestedIterator.prototype.next = function() {
        return this.stack.shift().getInteger();
    };
    ```
#### 其他：
1. 递归或者栈，但是递归不太对，不太符合迭代器
2. 合理利用题目所给的辅助函数
### 2021.3.24
#### 题目描述：
[描述](https://leetcode-cn.com/problems/132-pattern/)
#### 题目理解：
```javascript
/**
 *  检查 132 模式即可
 * 1. 找到除头尾最大值， 然后比较有没有 ai < aj 
 *    不能覆盖所有情况
 * 2. 全遍历  超时
 */
```
#### 解决办法：
1. 官方解答 - [枚举1]
    ```javascript
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    var find132pattern = function(nums) {
        const n = nums.length;
        const candidate_k = [nums[n - 1]];
        let max_k = -Number.MAX_SAFE_INTEGER;

        for (let i = n - 2; i >= 0; --i) {
            if (nums[i] < max_k) {
                return true;
            }
            while (candidate_k.length && nums[i] > candidate_k[candidate_k.length - 1]) {
                max_k = candidate_k[candidate_k.length - 1];
                candidate_k.pop();
            }
            if (nums[i] > max_k) {
                candidate_k.push(nums[i]);
            }
        }
        return false;
    };
    ```
2. 官方解答 - [枚举3,比较容易想到]
    ```C++
    class Solution {
    public:
        bool find132pattern(vector<int>& nums) {
            int n = nums.size();
            if (n < 3) {
                return false;
            }

            // 左侧最小值
            int left_min = nums[0];
            // 右侧所有元素
            multiset<int> right_all;

            for (int k = 2; k < n; ++k) {
                right_all.insert(nums[k]);
            }

            for (int j = 1; j < n - 1; ++j) {
                if (left_min < nums[j]) {
                    auto it = right_all.upper_bound(left_min);
                    if (it != right_all.end() && *it < nums[j]) {
                        return true;
                    }
                }
                left_min = min(left_min, nums[j]);
                right_all.erase(right_all.find(nums[j + 1]));
            }

            return false;
        }
    };
    ```
3. 官方解答 - [枚举2,难度比较大]
    ```javascript
    var find132pattern = function(nums) {
        const n = nums.length;
        const candidateI = [nums[0]], candidateJ = [nums[0]];

        for (let k = 1; k < n; ++k) {
            const idxI = binarySearchFirst(candidateI, nums[k]);
            const idxJ = binarySearchLast(candidateJ, nums[k]);
            if (idxI >= 0 && idxJ >= 0) {
                if (idxI <= idxJ) {
                    return true;
                }
            }
            
            if (nums[k] < candidateI[candidateI.length - 1]) {
                candidateI.push(nums[k]);
                candidateJ.push(nums[k]);
            } else if (nums[k] > candidateJ[candidateJ.length - 1]) {
                const lastI = candidateI[candidateI.length - 1];
                while (candidateJ.length && nums[k] > candidateJ[candidateJ.length - 1]) {
                    candidateI.pop();
                    candidateJ.pop();
                }
                candidateI.push(lastI);
                candidateJ.push(nums[k]);
            }
        }

        return false;
    };

    const binarySearchFirst = (candidate, target) => {
        let low = 0, high = candidate.length - 1;
        if (candidate[high] >= target) {
            return -1;
        }
        while (low < high) {
            const mid = Math.floor((high - low) / 2) + low;
            const num = candidate[mid];
            if (num >= target) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return low;
    }

    const binarySearchLast = (candidate, target) => {
        let low = 0, high = candidate.length - 1;
        if (candidate[low] <= target) {
            return -1;
        }
        while (low < high) {
            const mid = Math.floor((high - low + 1) / 2) + low;
            const num = candidate[mid];
            if (num <= target) {
                high = mid - 1;
            } else {
                low = mid;
            }
        }
        return low;
    }
    ```
#### 其他：
1. 其实举例3已经想到了，但是没有进行枚举，直接想到三个 for 循环
2. 单调栈，二分查找
