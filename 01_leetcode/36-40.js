// 矩阵中 行中最小 列中最大的那个数叫幸运数，返回所有幸运数

let matrix = [
  [1, 10, 4, 2],
  [9, 3, 8, 7],
  [15, 16, 17, 12]]
var luckyNumbers = function (matrix) {
  // 先遍历行
  let num
  let a = [], b = []
  for (let i = 0; i < matrix.length; i++) {
    num = matrix[i][0]
    for (let j = 0; j < matrix[i].length; j++) {
      if (num > matrix[i][j]) {
        num = matrix[i][j]
      }
    }
    a.push(num) // 行中最小
  }
  // 遍历列
  for (let i = 0; i < matrix[0].length; i++) {
    num = matrix[0][i]
    for (let j = 0; j < matrix.length; j++) {
      if (num < matrix[j][i]) {
        num = matrix[j][i]
      }
    }
    b.push(num)
  }
  return b.filter(x => a.indexOf(x) > -1)
};
console.log(luckyNumbers(matrix))

// 123456 转成 123,456
function paddingNum(num) {
  let arr = String(num).split('') // 转数组
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (i % 3 == 0 && i !== 0) {
      res.push(',')
      res.push(arr[i])
    }
    else {
      res.push(arr[i])
    }
  }
  return res.join('', ',') // 转字符串
}

console.log(paddingNum(132456))

// 去掉最低工资和最高工资后的平均值
var average = function (salary) {
  salary.splice(salary.indexOf(Math.max(...salary)), 1)
  salary.splice(salary.indexOf(Math.min(...salary)), 1)
  return parseFloat(salary.reduce((a, b) => a + b) / salary.length).toFixed(5)
};

let sal = [25000, 48000, 57000, 86000, 33000, 42000, 3000, 54000, 79000, 10000, 29000, 40000]
console.log(average(sal))

// console.log(Math.max(...[1,2]))  // Math.max() 中如果是数组要解构才能得到值

// 数组拆分
var arrayPairSum = function (nums) {
  let res = nums.sort((a, b) => a - b) // 从小到大排序
  let sum = 0
  for (let i = 0; i < res.length / 2; i++) {
    sum += res[i * 2]
  }
  return res
};

let arr = [6214, -2290, 2833, -7908]
console.log(arrayPairSum(arr))

// 山脉数组的顶峰索引
var peakIndexInMountainArray = function (A) {
  return A.length % 2 == 0 ? Math.max(A[Math.floor(A.length / 2) - 1], A[Math.floor(A.length / 2)]) : A[Math.floor(A.length / 2)]
};

console.log(peakIndexInMountainArray([0, 1, 2, 0]))

// 两个数组间的距离值
var findTheDistanceValue = function (arr1, arr2, d) {
  let res
  for (let i = 0; i < arr1.length - 1; i++) {
    res = arr2.filter(item => Math.abs(item - arr1[i]) > d)
  }
  return res.length == arr2.length ? 1 : 2
};
let arr1 = [4, 5, 8]
let arr2 = [10, 9, 1, 8]
let d = 2
console.log(findTheDistanceValue(arr1, arr2, d))


// 查找常用字符串
let arr = ["bella", "label", "roller"]
var commonChars = function (A) {
  let ans = [], word = A[0]
  for (let s of word) {
    if (A.every(m => m.includes(s))) { // 对每一个子数组进行判断
      A = A.map(m => m.replace(s, '')) // 对每个数组中的元素进行替换
      ans.push(s)
    }
  }
  return ans
};

console.log(commonChars(arr))


console.log(([][[]] + [])[+!![]] + ([] + {})[!+[] + !![]]) // nb

// 优雅的取随机字符串
console.log(Math.random().toString(16).substring(2)) // 13位
console.log(Math.random().toString(36).substring(2)) // 11位

// 优雅的取整(向下取整)
let a = ~~2.56
let b = 2.56 | 0
let c = 2.56 >> 0
console.log(a, b, c)

// 优雅的金钱格式化
// 1. 正则
var test1 = '1234567890'
var format = test1.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

console.log(format) // 1,234,567,890

// 2. 非正则
function formatCash(str) {
  return str.split('').reverse().reduce((prev, next, index) => {
    return ((index % 3) ? next : (next + ',')) + prev
  })
}
console.log(formatCash('1234567890')) // 1,234,567,890

// 两个整数交换
let a = 1, b = 2;
a ^= b
b ^= a
a ^= b
console.log(a, b)

// 实现标准JSON的深拷贝
let a = {
  a: 1,
  b: { c: 1, d: 2 }
}
let b = a
let c = JSON.parse(JSON.stringify(a))
console.log(c)

// 隐式转化
console.log(typeof +'1') // number 类型

// parseInt(0.0000008) === 8
console.log(parseInt(0.0000002) === 2) // true

// 最短代码实现数组去重 new Set
console.log([...new Set([1, 1, 2, 3, 3])]) // [1,2,3]

// 最短代码实现一个长度为 m(6) 值为 n(8) 的数组
console.log(Array(6).fill(8))

// 取出数组中的最大值与最小值
let arr = [456, 123, 789]
console.log(Math.max(...arr))
console.log(Math.min(...arr))
