// 浅拷贝
let obj = {
  a: 1,
  b: 2
}

let obj2 = JSON.parse(JSON.stringify(obj))
obj2.a = 2

console.log(obj, obj2)


// 简单分页
let arr = [
  { title: '标题1', content: '内容1' },
  { title: '标题2', content: '内容2' },
  { title: '标题3', content: '内容3' },
  { title: '标题4', content: '内容4' },
  { title: '标题5', content: '内容5' },
  { title: '标题6', content: '内容6' },
  { title: '标题7', content: '内容7' },
  { title: '标题8', content: '内容8' },
  { title: '标题9', content: '内容9' },
  { title: '标题10', content: '内容10' }
]

// 返回当前页数据
function fenye(page = 1, num = 5, arr) {
  let res = []
  while (res.length < num) {
    res.push(arr[(page - 1) * num + res.length])
  }
  return res.filter(item => item !== undefined)
}

console.log(fenye(3, 4, arr))



// 最大数值
var maximum = function (a, b) {
  return Math.max(a, b)
};

console.log(maximum(1, 2))

// 二进制中1的个数
var hammingWeight = function (n) {
  return n.toString(2).split('').map(Number).filter(item => item === 1).length
};

console.log(hammingWeight(00000000000000000000000000001011))

// 生成每种字符都是奇数个的字符串
var generateTheString = function (n) {
  let zifu = 'qwertyuioplkjhgfdsazxcvbnm'.split('')
  let res = ''
  for (let i = 0; i < n; i++) {
    res += zifu[i]
  }
  return res
};

console.log(generateTheString(7))

// 两个栈实现队列  栈：先进后出,表示只能用 push() 、 pop()
var CQueue = function () {
  this.stack1 = []
  this.stack2 = []
};

CQueue.prototype.appendTail = function (value) {
  this.stack1.push(value)
};

CQueue.prototype.deleteHead = function () {
  if (this.stack2.length) return this.stack2.pop() //不为空直接取出
  while (this.stack1.length) { // 2为空,将1中循环放入2
    this.stack2.push(this.stack1.pop())
  }
  return this.stack2.pop || -1
};

let cq = new CQueue()
cq.appendTail(1)
console.log(cq)

// 最终价格
var finalPrices = function (prices) {
  let res = []
  for (let i = 0; i < prices.length; i++) {
    let zhekou = 0
    // 找到最低折扣,且最低折扣小于本身价值
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] < prices[i] && (zhekou >= prices[j] || zhekou === 0) && zhekou === 0) {
        zhekou = prices[j]
      }
    }
    res.push(prices[i] - zhekou)
  }
  return res
};

console.log(finalPrices([8, 4, 6, 2, 3]))

// 不同整数的最少数目
var findLeastNumOfUniqueInts = function (arr, k) {
  let set = [...new Set(arr)]
  let obj = {}
  for (let i = 0; i < set.length; i++) {
    obj[set[i]] = arr.filter(item => item === set[i]).length
  }
  // 循环删除
  return obj
};

console.log(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3))

// 划分区间：同一个字母只在一个区间出现,尽可能划分多个
var partitionLabels = function (S) {
  let arr = S.split('')
  let res = []
  while (arr.length) {
    let index = arr.lastIndexOf(arr[0])
    res.push(index + 1)
    arr.splice(0, index + 1)
  }
  return res
};

console.log(partitionLabels("ababcbacadefegdehijhklij"))

// 插入排序

var minSwapsCouples = function (row) {
  let res = 0
  for (let i = 0; i < row.length; i++) {

  }
};

console.log(minSwapsCouples([0, 2, 1, 3]))

// 托普利茨矩阵
var isToeplitzMatrix = function (matrix) {

};

console.log(isToeplitzMatrix([
  [1, 2, 3, 4, 5],
  [5, 1, 2, 3, 5],
  [9, 5, 1, 2, 3]
]))

// 回文数
function palindrome(str) {
  str = str.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?/\，/\。/\；/\：/\“/\”/\》/\《/\|/\{/\}/\、/\!/\~/\`]/g, "").toLowerCase()
  let str1 = str.split('').reverse().join('').toLowerCase()
  return str1 === str
}
console.log(palindrome('e,YE'))

// 返回句子中最长单词
function findLongestWord(str) {
  let arr = str.split(' ')
  let len = arr[0].length
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > len) len = arr[i].length
  }
  return len
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log('jumped'.length)

// 首字母大写
function titleCase(str) {
  let arr = str.split(' ')
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split('')
    for (let j = 0; j < arr[i].length; j++) {
      if (j === 0) arr[i][j] = arr[i][j].toUpperCase()
      else arr[i][j] = arr[i][j].toLowerCase()
    }
    arr[i] = arr[i].reduce((a, b) => a + b)
  }
  return arr.join(' ');
}

console.log(titleCase("I'm a little tea pot"));

// 子数组中的最大值
function largestOfFour(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    res.push(Math.max(...arr[i]))
  }
  return res;
}

console.log(largestOfFour([[4, 5, 1, 3]
  , [13, 27, 18, 26],
[32, 35, 37, 39],
[1000, 1001, 857, 1]]));

// 末尾对比
function confirmEnding(str, target) {
  let arr = str.split('').reverse()
  let tar = target.split('').reverse()
  let res = 0
  for (let i = 0; i < tar.length; i++) {
    if (arr[i] === tar[i]) res++
  }
  return res === tar.length;
}

console.log(confirmEnding("Bastian", "tiian"));

// 重复操作算法挑战
function repeat(str, num) {
  let res = ''
  if (num < 0) return res
  while (num > 0) {
    res = res + str
    num--
  }
  return res;
}

console.log(repeat("abc", 3));

//字符串截取算法挑战
function truncate(str, num) {
  str = str.split('')
  if (str.length <= num) {
    str = str.join('')
  }
  else {
    if (num <= 3) str = str.splice(0, num).join('') + '...'
    else {
      str = str.splice(0, num - 3).join('') + '...'
    }
  }
  return str;
}

console.log(truncate("A-tisket a-tasket A green and yellow basket", 66));

// 按容量分数组
function chunk(arr, size) {
  let res = Array(Math.ceil(arr.length / size))
  for (let i = 0; i < res.length; i++) {
    let len = size
    res[i] = []
    while (len > 0) {
      res[i].push(arr[0])
      arr.shift()
      len--
    }
  }
  res[res.length - 1] = res[res.length - 1].filter(item => item !== undefined)
  return res
}

console.log(chunk([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));


// 数组截断算法挑战 
function slasher(arr, howMany) {
  arr.splice(0, howMany)
  return arr
}

console.log(slasher([1, 2, 3], 2));

//数组查询算法挑战
function mutation(arr) {
  let root = arr[0].toLowerCase().split('')
  let tar = arr[1].toLowerCase().split('')
  return tar.length === tar.filter(item => root.indexOf(item) !== -1).length;
}

console.log(mutation(["hello", "ae"]));

// 删除数组中特定值算法挑战
function bouncer(arr) {
  return arr.filter(item => Boolean(item)) //如果它的参数是false,null,0,"",underfined,NaN,那么它的值返回false
}

console.log(bouncer([7, "ate", "", false, 9]));

//去除数组中任意多个值算法挑战
function destroyer(arr, ...args) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) arr[i] = undefined
    }
  }
  return arr.filter(item => item !== undefined);
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// 数组排序并插入值算法挑战
function where(arr, num) {
  arr.push(num)
  arr.sort((a, b) => a - b)
  return arr.indexOf(num);
}

console.log(where([40, 60], 50));

// 位移密码算法挑战
function rot13(str) {
  let root = 'qwertyuioplkjhgfdsazxcvbnm'.toUpperCase().split('')
  let arr = str.split('')
  for (let i = 0; i < arr.length; i++) {
    if (root.indexOf(arr[i]) !== -1) {
      arr[i] = root.indexOf(String.fromCharCode(arr[i].charCodeAt() - 13)) !== -1 ? String.fromCharCode(arr[i].charCodeAt() - 13) : String.fromCharCode(arr[i].charCodeAt() + 13)
    }
  }
  return arr.join('');
}

console.log(rot13("SERR PBQR PNZC"));

console.log('s'.charCodeAt())
console.log(fromCharCode(13))
