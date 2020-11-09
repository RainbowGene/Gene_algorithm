// 26,岛屿周长 ： 陆地边+4，有一个相邻边-2，统计得到周长
var islandPerimeter = function (grid) {
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        count += 4
        if (i > 0 && grid[i - 1][j] === 1) {  //计算左侧是否有相邻
          count -= 2
        }
        if (j > 0 && grid[i][j - 1] === 1) {  //判断上方是否有相邻
          count -= 2
        }
      }
    }
  }
  return count
}

console.log(islandPerimeter([[0, 1, 0, 0],
[1, 1, 1, 0],
[0, 1, 0, 0],
[1, 1, 0, 0]]))

// 27,反转字符串
var reverseString = function (s) {
  return s.reverse()
}
console.log(reverseString(["h", "e", "l", "l", "o"]))

// 28，数组的相对排序
var relativeSortArray = function (arr1, arr2) {

}

// 29,逐步求和得到正数的最小值
var minStartValue = function (nums) {
  let res = 1, sum = res
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (sum < 1) {
      res++
      sum = res
      i = -1  //这里重置为-1而不是0是因为for循环时先执行 i++ ，会先加一个1,导致下次累加会从nums[1]开始导致逻辑错误
    }
  }
  return res
}

console.log(minStartValue([-3, 2, -3, 4, 2]))

// nim游戏，两人每次拿1-3块石头，你作为先手，拿到最后一块石头的获胜
// 只要不被4整除，必赢。 反向思考： 如果对方要赢，必须保证剩下石头数是4的倍数
var canWinNim = function (n) {
  return (n % 4 !== 0)
}

// 1，找出车R的位置 2，判断横纵向是否有P，判断P之前是否有象（B）
var numRookCaptures = function (board) {
  let num = 0, x, y, xlen, ylen
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'R') {
        x = i
        y = j
        xlen = board.length
        ylen = board[i].length
      }
    }
  }
  // 向右
  for (let i = x; i < xlen; i++) {
    if (board[x][i] === 'B') break
    if (board[x][i] === 'p') {
      num++
      break
    }
  }
  for (let i = x; i >= 0; i--) {
    if (board[x][i] === 'B') break
    if (board[x][i] === 'p') {
      num++
      break
    }
  }
  for (let i = y; i < ylen; i++) {
    if (board[i][y] === 'B') break
    if (board[i][y] === 'p') {
      num++
      break
    }
  }
  for (let i = y; i >= 0; i--) {
    if (board[i][y] === 'B') break
    if (board[i][y] === 'p') {
      num++
      break
    }
  }
  return num
}

console.log(numRookCaptures([
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  [".", ".", ".", "R", ".", ".", ".", "p"],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."]]))