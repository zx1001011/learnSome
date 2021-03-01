<!-- 算法题刷题记录 -->
# 简单回顾旅程

## 日记表格

## 记录
| 序号 | 时间 | 题目 | 知识点 | 难度 | 自行是否做出 | 是否理解 | 有几种方法 | 
| ---- | ---- | --- | --- | --- | --- | --- | --- |
| 1 | 2021.2.26 | 1178. 猜字谜 | 位压缩 | 困难 | 超时TT | 暂未全部理解 | 2 |
| 2 | 2021.3.1 | 303. 区域和检索 - 数组不可变 | 前缀和 | 简单 | 是 | 理解 | 3 |


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


