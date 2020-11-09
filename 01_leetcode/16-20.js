//16.数组中每个数的出现次数是否相同
function uniqueOccurrences(arr) {
  let keyArr = []
  let countArr = []
  //1,数组去重
  keyArr = Array.from(new Set(arr))
  for (let i = 0; i < keyArr.length; i++) {
    countArr.push(0)  //2,重置次数数组
  }
  for (let i = 0; i < arr.length; i++) {
    countArr[keyArr.indexOf(arr[i])]++  //3,计算次数
  }
  //通过去重前后对比判断出现次数是否有相同
  if (Array.from(new Set(countArr)).length == countArr.length) return true
  else return false
}

//17,前k个高频元素
function topKFrequent(arr, k) {

}

// 18,奇偶排序数组
function sortArrayByParity(A) {
  let result = []
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      result.unshift(A[i])  //添加到头部
    }
    else {
      result.push(A[i]) //添加到尾部
    }
  }
  return result
}

let arr = [2, 4, 8, 11, 556, 21]
console.log(sortArrayByParity(arr))

// 19.每个字符字数都为奇数的字符串:偷鸡方案：n为奇数用a填充，为偶数用n-1个a和1个b填充
function generateTheString(n) {
  if (n === 0) return '';
  if (n === 1) return 'a';
  let res = '', to = 'abcdefghijklmnopqrstuvwxyz';
  if (n % 2 === 0) {

  }
}

// 20： 反转数组,不使用额外空间
function reverseString(arr) {
  return arr.reverse()
}
