
let arr = new Array(20);
for (let i = 0; i < arr.length; i++) {
  arr[i] = Math.round(Math.random() * 100)
}

let arr2 = new Array(20);
for (let i = 0; i < arr2.length; i++) {
  arr2[i] = Math.round(Math.random() * 10) //用于计数排序
}
//#region 冒泡排序 bubble
function bubble(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}
//#endregion

//#region 选择排序 select
function select(arr) {
  let temp, minIndex
  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    temp = arr[minIndex]
    arr[minIndex] = arr[i]
    arr[i] = temp
  }
  return arr
}
//#endregion

//#region 快速排序 fast
function fast(arr) {
  if (arr.length < 2) return arr;
  else {
    let right = []
    let left = []
    let index = Math.floor(arr.length / 2)
    let len = arr.splice(index, 1)  // len = arr[index] 把它取出来

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < len) {
        left.push(arr[i])
      }
      else {
        right.push(arr[i])
      }
    }
    return fast(left).concat(len, fast(right))
  }
}
//#endregion

//#region 插入排序 insert
function insert(arr) {
  let preIndex, current
  for (let i = 1; i < arr.length; i++) {
    preIndex = i - 1
    current = arr[i]
    while (preIndex >= 0 && arr[preIndex] < current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current
  }
  return arr
}
//#endregion

//#region 计数排序 counting
/**
 * 计数：有确定范围的整数(>=0)
 * 1，找出数组中最大/小的元素
 * 2，统计数组中每个为 i 元素个数
 * @param {*} arr 
 */
function counting(arr) {
  let maxValue = Math.max(...arr)
  let bucket = new Array(maxValue + 1) // 0到最大值的数量
  let sortIndex = 0
  for (let i = 0; i < arr.length; i++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0  // 不存在先重置为0
    }
    bucket[arr[i]]++  // 存在值+1
  }
  for (let j = 0; j < bucket.length; j++) {
    while (bucket[j] > 0) {
      arr[sortIndex++] = j
      bucket[j]--
    }
  }
  return arr
}
//#endregion

// console.log(insert(arr2)) 
