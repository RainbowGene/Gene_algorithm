// 等差数列
var canMakeArithmeticProgression = function (arr) {
  let res = arr.sort((a, b) => a - b)
  let current = res[1] - res[0]
  for (let i = 1; i < res.length - 1; i++) {
    if (res[i + 1] - res[i] !== current) return false
  }
  return true
};

console.log(canMakeArithmeticProgression([1, 4, 3]))

// 给定一个正整数，输出它的补数。补数是对该数的二进制表示取反。
var findComplement = function (num) {
  return parseInt(num.toString(2).split('').map(item => {
    return item ^ 1 // 取反 item === '1'?'0':'1'
  }).map(Number).join(''), 2)
};

console.log(findComplement(5))

// 矩阵的转置是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。
var transpose = function (A) {
  let res = Array(A[0].length)
  let len = A.length
  for (let i = 0; i < res.length; i++) {
    res[i] = []
    for (let j = 0; j < len; j++) {
      res[i].push(A[j][i])
    }
  }
  return res
};

console.log(transpose([[1, 2, 3], [4, 5, 6]]))

// 主要元素 ：出现最多次数的数
var majorityElement = function (nums) {
  let arr = Array.from(new Set(nums))
  let res = []
  for (let i = 0; i < arr.length; i++) {
    res.push(0)
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === nums[i]) {
        res[j]++
      }
    }
  }
  let maxnum = Math.max(...res)
  if (res.filter(item => item === maxnum).length > 1) return -1
  let index = res.indexOf(maxnum)
  return arr[index]
};

console.log(majorityElement([2, 2, 2, 3, 3, 4, 4]))

// 主要元素 ：占比超过一半的数
var met = function (nums) {
  let arr = Array.from(new Set(nums))
  let res = [], len = nums.length
  for (let i = 0; i < arr.length; i++) {
    res.push(0)
  }
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === nums[i]) {
        res[j]++
      }
    }
  }
  let index = res.indexOf(Math.max(...res))
  return res.filter(item => item > Math.floor(len / 2)).length > 0 ? arr[index] : -1
}

console.log(met([2, 2, 2, 2, 3, 4, 4]))

// 所有奇数长度子数组的和
var sumOddLengthSubarrays = function (arr) {
  let result = 0
  const floor = Math.floor

  arr.forEach((num, i) => {
    const left = i + 1
    const right = arr.length - i
    const leftEven = floor((left + 1) / 2)
    const leftOdd = floor(left / 2)
    const rightEven = floor((right + 1) / 2)
    const rightOdd = floor((right) / 2)

    result += (leftEven * rightEven + leftOdd * rightOdd) * num
  })
  return result
};

// 三个数最大乘积
var maximumProduct = function (nums) {
  nums.sort((a, b) => b - a)
  while (nums.length < 3) nums.push(1)
  let max1 = nums[0] * nums[1] * nums[2]
  let max2 = nums[nums.length - 1] * nums[nums.length - 2] * nums[0]
  return Math.max(max1, max2)
};

console.log(maximumProduct([-1, -2, -3, -4]))

// 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，
// 并且 i 和 j 的差的 绝对值 至多为 k。
var containsNearbyDuplicate = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && Math.abs(i - j) <= k) return true
    }
  }
  return false
};

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))

/**
 * 假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花卉不能种植在相邻的地块上，
 * 它们会争夺水源，两者都会死去。

给定一个花坛（表示为一个数组包含0和1，其中0表示没种植花，1表示种植了花），和一个数 n 。能否在不打破种植规则的情况下种入 n 朵花？能则返回True，不能则返回False。

 */
var canPlaceFlowers = function (flowerbed, n) {
  // 先判断能不能插花
  let max = 0;
  let len = flowerbed.length
  let index = flowerbed.indexOf(1)
  if (index === -1 || (index !== -1 && index % 2 === 0)) max = Math.floor(len / 2) + 1
  else max = Math.floor(len / 2)
  num = flowerbed.filter(item => item === 1).length
  if (max - num < n) return false
  // [0,1] 1  return false
  if (len === 2 && flowerbed.indexOf(1) !== -1) return false

  // 插花
  for (let i = 0; i < len; i++) {
    // 插花条件 如果最大值为 max = Math.floor(len / 2) 表示 奇数序列插花
    if (max === Math.floor(len / 2)) {
      while (n > 0) {
        if (flowerbed[i] === 0 && i % 2 !== 0) {
          // 插花
          flowerbed[i] = 1
          n--
        }
        else {
          break;
        }
      }
    }
    else { // 偶数序列插花
      while (n > 0) {
        if (flowerbed[i] === 0 && i % 2 === 0) {
          // 插花
          flowerbed[i] = 1
          n--
        }
        else {
          break;
        }
      }
    }
  }

  // 判断花坛是否符合要求
  for (let i = 0; i < len; i++) {
    if ((flowerbed[i] === 1 && flowerbed[i + 1] === 1 && flowerbed[i + 1]) || (flowerbed[i] === 1 && flowerbed[i - 1] === 1 && flowerbed[i - 1])) return false
  }
  return true
};

console.log(canPlaceFlowers([1, 0], 2))


// 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的中位数。
var findMedianSortedArrays = function (nums1, nums2) {
  let arr = nums1.concat(nums2).sort()
  let res = 0.0

};

console.log(findMedianSortedArrays([1, 2], [3, 4]))

// 给你一个整数数组 arr，请你判断数组中是否存在连续三个元素都是奇数的情况：如果存在，请返回 true ；否则，返回 false 。
var threeConsecutiveOdds = function (arr) {
  // let res = 0
  // for (let i = 0; i < arr.length; i++) {
  //   arr[i] % 2 !== 0 ? res++ : res = 0
  //   if (res === 3) return true
  // }
  // return false

  return arr.map(v => v % 2 !== 0 ? '1' : '0').join('').indexOf('111') != -1
};

console.log(threeConsecutiveOdds([2, 6, 4, 1]))

//给你一个正整数数组 arr ，请你计算所有可能的奇数长度子数组的和。
// 子数组 定义为原数组中的一个连续子序列。
// 请你返回 arr 中 所有奇数长度子数组的和 。
var sumOddLengthSubarrays = function (arr) {
  let result = 0
  for (i = 1; i <= arr.length; i += 2) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + i - 1] != null) {
        for (let k = 0; k < i; k++) {
          result = result + arr[j + k]
        }
      }
    }
  }
  return result
};

console.log(sumOddLengthSubarrays([10, 11, 12, 13]))

//A 和 B 在一个 3 x 3 的网格上玩井字棋。
var tictactoe = function (moves) {
  const cases = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  let grid = new Array(9)
  for (let i = 0; i < moves.length; i++) {
    let [x, y] = moves[i]
    let role = i % 2 ? 'B' : 'A'
    grid[x * 3 + y] = role
  }
  for (let caseItem of cases) {
    let role = grid[caseItem[0]]
    if (role) {
      if (grid[caseItem[1]] === role && grid[caseItem[2]] === role) {
        return role
      }
    }
  }
  return moves.length === 9 ? "Draw" : "Pending"
};

console.log(tictactoe([[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]]))


