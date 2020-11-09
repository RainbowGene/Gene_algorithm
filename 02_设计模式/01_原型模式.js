// 一个原型模式例子
// let lol = {
//   server: '战争学院',
//   startGame: function () {
//     console.log('服务器启动')
//   }
// }

// let User = Object.create(lol, {
//   'name': {
//     value: '葬神'
//   }
// })

// console.log(User.server)

// 把原有对象的属性，通过Object.create拷贝，并且可以添加新的属性 (name)
// * 低版本ie使用不了,使用更加底层的方式实现：构造函数

let lol = {
  server: '战争学院',
  startGame: function () {
    console.log('服务器启动')
  },
  init: function (name) {
    this.name = name
  }
}

function User(name) {
  function F() { };

  F.prototype = lol;

  let f = new F();
  f.init(name);
  return f;
}

let user = User('黄梵高');
user.startGame();

//创建了一个名叫F的构造函数，并且提前暴漏了接口init才得以修改内部属性，和直接创建对象相比自然是冗余了不少。

