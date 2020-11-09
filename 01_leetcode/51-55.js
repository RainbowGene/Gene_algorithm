
// 删除前后5%算均值
// var trimMean = function (arr) {
//   arr = arr.sort((a, b) => a - b)
//   // 删除前后5%
//   let num = Math.floor(arr.length / 20)
//   arr.splice(0, num)
//   arr.splice(arr.length - num, num)
//   return (arr.reduce((a, b) => a + b) / arr.length).toFixed(5)
// };

// console.log(trimMean([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3]))

// 
// function shengcstr(n) {
//   return "b".repeat(n - 1) + (n % 2 == 0 ? "a" : "b");
// }

// console.log(shengcstr(3))

// 判断字符是否唯一: 所有字母都是唯一的
// var isUnique = function (astr) {
//   return new Set(astr.split('')).size === astr.length
// };

// console.log(isUnique('abc'))

// I增D减 
// var diStringMatch = function (S) {
//   let l = 0, r = S.length, a = []
//   for (let i = 0; i < S.length; i++)
//     a.push(S[i] === 'I' ? l++ : r--)
//   return [...a, l]
// };

// 最近3s的请求
// 函数式写法
var RecentCounter = function () {
  this.queue = []
}

RecentCounter.prototype.ping = function (t) {
  this.queue.push(t)
  while (this.queue[0] < t - 3000) {
    this.queue.shift()
  }
  return this.queue.length
}

let rc = new RecentCounter()
rc.ping(123)
rc.ping(3000)
rc.ping(3002)
rc.ping(6000)
rc.ping(10000)
console.log(rc)


// class 写法
class RecentCounter {
  constructor() {
    this.queue = []
  }

  ping(t) {
    this.queue.push(t)
    while (this.queue[0] < t - 3000) {
      this.queue.shift()
    }
    return this.queue.length
  }
}

let rc = new RecentCounter()

rc.ping(123)
rc.ping(3000)
rc.ping(3002)
rc.ping(6000)
rc.ping(10000)
console.log(rc)


// 超级回文数: [4,1000] 返回   4,9,121  这三个数是回文数且他们也是一个回文数的平方  2,3,11
// 这个没通过，时间超出了限制
var superpalindromesInRange = function (L, R) {
  let min = Math.floor(Math.sqrt(parseInt(L)))
  let max = Math.floor(Math.sqrt(parseInt(R)))
  // 找出范围内的回文数
  let arr = []
  for (let i = min; i <= max; i++) {
    if (i.toString() === i.toString().split('').reverse().join('')) {
      arr.push(i * i)
    }
  }
  // 判断他们的平方是否是回文数
  arr = arr.filter(item => item.toString() === item.toString().split('').reverse().join(''))
  return arr
};

console.log(superpalindromesInRange("462", "154370712829064"))

// 有序数组转二叉数
// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = this.right = null;
//   }
// }
var TreeNode = function (val) {
  this.val = val;
  this.left = this.right = null;
}

var sortedArrayToBST = function (nums) {
  if (!nums.length) return null
  let m = Math.floor((nums.length - 1) / 2)
  let root = new TreeNode(nums[m])
  root.left = sortedArrayToBST(nums.slice(0, m))
  root.right = sortedArrayToBST(nums.slice(m + 1))
  return root
}

console.log(sortedArrayToBST([-11, -9, 2, 8, 10]))

