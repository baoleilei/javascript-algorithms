let arr = [1,2,5,50,3]

/**
 * @param preTotal 初始值
 * @param ele 当前元素
 * @param index 当前元素索引
 */
let a = arr.reduce((preTotal, ele, index) => {
  return preTotal + ele
},13)

console.log(a) // 61




Array.prototype.myReduce = function (fn, initialValue) {
  if (this.length == 0) {
    if (initialValue  === undefined) {
      console.error('reduce of empty array with no initialValue')
    } else {
      return initialValue
    }
  } else {
    var prev = initialValue !== undefined ? initialValue : this[0]
    var startIndex = initialValue !== undefined ? 0 : 1
    for (var i = startIndex; i < this.length; i++) {
        prev = fn(prev, this[i])
    }
    return prev
  }
}


var ret = arr.myReduce(function(prev, curr) {
  return prev + curr
})

console.log(ret)

const compose = (...functions) => input => 
                   functions.reduceRight((chain, func) => chain.then(func), Promise.resolve(input))