//6汉明距离：1，十进制转二进制，2，二进制字符对比，不同的为多少
//使用 ^ 位运算符，相同为0，不同为1
function hm(x, y) {
  return (x ^ y).toString(2).split("").filter(s => s === '1').length
}

//7,有序数组的平方,并递增排序
function sortedSquares(arr) {
  return arr.map(x => x * x).sort((a, b) => a - b)
}

//8,在一个「平衡字符串」中，'L' 和 'R' 字符的数量是相同的。
//  给出一个平衡字符串 s，请你将它分割成尽可能多的平衡字符串。
function balancedStringSplit(s) {
  let count = 0;
  let clus = { R: 0, L: 0 }
  for (let i = 0; i < s.length; i++) {
    clus[s[i]]++
    console.log(clus)
    if (clus.R === clus.L) count++
  }
  return count
}

//9.返回数组: 长度为n且不由n组成和为0的数组
function sumZero(n) {
  let result = [], i;
  if (n == 1) return [0];
  else {
    i = n % 2 == 0 ? 1 : 0;
    for (i; i <= n / 2; i++) {
      if (i === 0) {
        result.push(i)
      }
      else {
        result.push(i);
        result.push(-i);
      }
    }
    return result
  }
}

//10,翻转图像
result = [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]

function flipAndInvertImage(arr) {
  //方法一
  // for (let i = 0; i < arr.length; i++) {
  //   //先翻转
  //   arr[i].reverse()
  //   //再替换
  //   for (let j = 0; j < arr[i].length; j++) {
  //     arr[i][j] = arr[i][j] === 0 ? 1 : 0
  //   }
  // }
  // return arr

  //方法二
  return arr.map(item => item.reverse().map(item1 => item1 === 0 ? 1 : 0))
}

console.log(flipAndInvertImage(result))