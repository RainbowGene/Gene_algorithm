/**
 * 给定一个字符串 S 和一个字符 C。返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组。
 * 输入: S = "loveleetcode", C = 'e'
 * 输出: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 */

// var shortestToChar = function(S, C) {

// };

// console.log(shortestToChar('loveleetcode','e'))

/**
 * 找出数组中的幸运数
 *  数组中一个整数出现频次与它数值相等为幸运数，没有幸运数返回-1，有多个返回最大那个
 */

var findLucky = function (arr) {
  let m = {}
  arr.forEach((x) => { // 遍历数组
    m[x] = (x in m ? m[x] + 1 : 1) // 已有则值+1，否则设置键值 x:1
  })
  //console.log(m) { '1': 2, '2': 2, '3': 2 }
  let ans = -1 // 没有幸运数为 -1
  //console.log(Object.keys(m))  [ '1', '2', '3' ]
  Object.keys(m).forEach((key) => { // 遍历对象中的键是否与值相等
    ans = (key == m[key] ? Math.max(key, ans) : ans)
  })
  return ans
};

console.log(findLucky(arr))

/**
 * 奇偶数组排序，数组中一半奇数一半偶数，下标是偶/奇数则值也为偶/奇数
 */
var sortArrayByParityII = function (arr) {
  let ji = []
  let ou = []
  let res = []
  arr.forEach(x => {
    if (x % 2 == 0) ou.push(x)
    else {
      ji.push(x)
    }
  })
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      res.push(...ou.splice(0, 1))
    }
    else {
      res.push(...ji.splice(0, 1))
    }
  }
  return res
};

let arr = [4, 2, 5, 7]

console.log(sortArrayByParityII(arr))

// 棒球比赛
let ops = ["5", "2", "C", "D", "+"]
var calPoints = function (arr) {
  let cloneArr = []
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case 'C': // 删除前一个有效分数
        cloneArr.splice(cloneArr.length - 1, 1)
        break;
      case 'D':
        cloneArr.push(cloneArr[cloneArr.length - 1] * 2)
        break;
      case '+':
        cloneArr.push(cloneArr[cloneArr.length - 1] + cloneArr[cloneArr.length - 2])
        break;
      default:
        // 否则可以转为数字
        cloneArr.push(parseInt(arr[i]))
        break;
    }
  }
  return eval(cloneArr.join("+")) // 求和
};
console.log(calPoints(ops))

// 反转字符串：单个单词反转，保留单词顺序和空格
let s = "Let's take LeetCode contest"
var reverseWords = function (s) {
  return s.split("").reverse().join("").split(" ").reverse().join(" ")
};
console.log(reverseWords(s))

// 
var titleToNumber = function (s) {
  let arr = s.split('')
  let n = arr.length
  let res = 0
  for (let i = 0; i < arr.length; i++)
    res += (arr[i].charCodeAt() - 65 + 1) * Math.pow(26, n - i - 1)
  return res
};

console.log(titleToNumber('AA'))
