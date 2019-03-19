Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  var _this = this
  console.log('_this',_this)
  var args = [...arguments].slice(1)
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    console.log('this instanceof F',this instanceof F)
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}


let test = function(a,b){
  console.log('作用域绑定 '+ this.value)
  console.log('testBind参数传递 '+ a.value2)
  console.log('调用参数传递 ' + b)
}
   
let obj = {
  value:'ok'
}
   
let fun_new = test.myBind(obj,{value2:'also ok'})
   
// fun_new ('hello bind')
   
   
console.log(new fun_new('hello bind'))
  