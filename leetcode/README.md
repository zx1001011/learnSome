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


