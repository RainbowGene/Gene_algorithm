//1,石头里的宝石
// 思路: 将石碓化为数组过滤，过滤条件为项是否为字符串Aa中的某一个
// let J = "Aa", S = "aaAABBd"
// console.log(S.split('').filter(s => J.includes(s)).length)

//2,整数的各位积和差
// 思路: 先转字符串在转数组，注意此时数组中的每项都是string类型，需要会用 .map(Number) 转为 Number 类型
//       然后使用reduce操作完成和积计算
let num = 4325;
// let he = num.toString().split("").map(Number).reduce((x, y) => x + y)
let ji = num.toString().split("").map(Number).reduce((x, y) => x * y)
console.log(ji)

//3,IP 地址无效化: 用 [.] 代替 .
//3.1)正则表达式直接计算
// let defangIPaddr = function (address) {
//   return address.replace(/\./g, '[.]')
// }

// 3.2)非正则表达式版本
// let defangIPaddr2 = function (address) {
//   address = address.split('')
//   for (let i = 0; i < address.length; i++) {     
//       if (address[i] === '.') {
//           address[i] = '[.]'
//       }
//   }
//   return address.join('')
// }

// console.log(defangIPaddr2('127.1.1.1'))

//4,转化为小写字母
// let str="HellO"
// console.log(str.toLowerCase())

//5,数组中每个元素替换为右侧最大元素，右侧没有则换为-1
// let arr = [18, 17, 5, 6, 8, 12]
// function replaceElements(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const _arr = arr.slice(i + 1)
//     arr[i] = _arr.length ? Math.max(..._arr) : -1;
//     //arr[i] = _arr.length ? Math.max.apply(null,_arr) : -1;
//   }
//   return arr
// }

//函数解析
/** slice(start,end):
 *      start ： 必须，规定从何处开始选取，可以取负值，从尾部选取
 *      end : 可选，规定何处结束选取，如果不指定，则选取到数组结束的所有元素
 *  返回一个新的数组，且不会修改原数组
 *
 * apply(): 可传入数组,
 *    Math.max.apply(null, _arr)
 *
 * es6 写法：扩展运算符取代apply
 *    Math.max(..._arr)
 *    还可以应用到数组的其他操作中去
 * */


//  斐波拉契数列
// function fib(n) {
//   if (n <= 1) {
//     return n
//   }
//   return fib(n - 1) + fib(n - 2)
// }

// console.log(fib(10))





