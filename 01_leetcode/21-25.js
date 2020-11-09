//在大小为 2N 的数组 A 中有 N+1 个不同的元素，其中有一个元素重复了 N 次。返回重复了 N 次的那个元素。
var repeatedNTimes = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let num = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        num++
      }
    }
    if (num === arr.length / 2) return arr[i]  // num>1 就能判断了 
  }
}

//console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]))

//杨辉三角
var generate = function (numRows) {
  let res = []
}

// 找出数组中差距最小的元素对（有多个则输出多个）
var minimumAbsDifference = function (arr) {
  let sortArr = arr.sort((a, b) => { return a - b })  //对数组升序排列
  let res = []
  let cz = sortArr[1] - sortArr[0] //第一对相邻元素的差值
  // 遍历相邻两个元素，计算差值
  for (let i = 0; i < sortArr.length - 1; i++) {
    if (cz > sortArr[i + 1] - sortArr[i]) {
      cz = sortArr[i + 1] - sortArr[i]
      res = []
      res.push([sortArr[i], sortArr[i + 1]])
    }
    else if (cz === sortArr[i + 1] - sortArr[i]) {
      res.push([sortArr[i], sortArr[i + 1]])
    }
  }
  return res
}

console.log(minimumAbsDifference([40, 11, 26, 27, -20]))
//[5, 6, 7, 8, 9, 89]

// 分糖果，平方一个数组，得到两个数组，其中一个数组元素种类最多
var distributeCandies = function (arr) {
  // let res = []
  // let len = arr.length / 2  //结果数组的长度
  // for (let i = 0; i < arr.length && res.length !== len; i++) {
  //   if (res.indexOf(arr[i]) === -1) {
  //     res.push(arr[i])
  //   }
  // }
  // return res.length

  return [...new Set(arr)].length < arr.length / 2 ? [...new Set(arr)].length : arr.length / 2

  // 结构数组+set去重+三元运算符
}

let arr = [1, 1, 2, 2, 3, 3]
console.log(distributeCandies(arr))

// 个位相加 : 将num上的各个位数相加，要求最终结果为一个 个位数 , 可以类推出结果为 num%9
var addDigits = function (num) {
  return num.toString().split('').map(Number).reduce((x, y) => x + y > 9 ? addDigits(x + y) : x + y)
}

console.log(addDigits(46))