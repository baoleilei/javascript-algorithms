function curry(fun) {
  let args = [...arguments].slice(1)
  return function() {
    return fun.apply(null, [...args, ...arguments])
  }
}



function add(a, b) {
  return a + b;
}

var addCurry = curry(add,1);
// addCurry(3); //3
console.log(addCurry(3))
