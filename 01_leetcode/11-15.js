//11，摩斯密码词,返回可以获得所有词不同单词翻译的数量。
function uniqueMorseRepresentations(words) {
  const mos = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

  return new Set(words.map(word => {  //利用Set唯一性
    return Array.from(word).reduce((total, w) => {  //每个字符转为数组类型
      return total += mos[w.charCodeAt() - 97]  //逐个字母编码
    }, "")  //total初始值为 ""
  })).size
}

// console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))

//12.自除数 128 : 128%1=0 ,128%2=0,128%8=0
function selfDividingNumbers(left, right) {
  let result = []
  for (let i = left; i <= right; i++) {
    if (i < 10) {
      result.push(i)
    }
    else {
      let narr = (i + '').split('');
      if (narr.map(item => i % item === 0 ? 0 : 1).indexOf(1) === -1) {
        result.push(i)
      }
    }
  }
  return result
}

// let num = 128
// console.log(num.toString().split('').map(Number).filter(n => num % n === 0).length === num.toString().length)

//13,键盘行
function findWords(words) {
  const keyboard = [['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'], ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], ['z', 'x', 'c', 'v', 'b', 'n', 'm']];
  let result = []
  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase().split('');
    word.filter(item => keyboard[i].indexOf(item) != -1)
    result.push(word)
  }
  return result
}

//14,两个数组的交集
function intersection(arr1, arr2) {
  let result = []
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && result.indexOf(arr1[i]) == -1) {
        result.push(arr1[i])
      }
    }
  }
  return result
}

console.log(intersection([1, 2, 2, 1], [2, 2, 1]))

//15,给定方程的正整数解



