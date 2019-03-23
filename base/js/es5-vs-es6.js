console.log(ES5Class()) // es5:可以直接作为函数运行
// console.log(new ES6Class()) // 会报错：不存在变量提升

function ES5Class(){
  console.log("hello")
}

ES5Class.prototype.func = function(){ console.log("Hello world") }

class ES6Class{
  constructor(){}
  func(){
    console.log("Hello world")
  }
}

let es5 = new ES5Class()
let es6 = new ES6Class()

console.log("ES5 :")
for(let _ in es5){
  console.log(_)
}

// es6:不可枚举
console.log("ES6 :")
for(let _ in es6){
  console.log(_)
}
/*
  es5 vs es6
  class的构造参数必须是new来调用，不可以将其作为普通函数执行
  es6 的class不存在变量提升
  最重要的是：es6内部方法不可以枚举。es5的prototype上的方法可以枚举
*/