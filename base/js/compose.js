function compose (...args){
  return function (){ 
      return dispatch(0)  
      
      function dispatch(i){
          const fn = args[i]
          console.log('fn', fn)
          if(!fn)return
          fn(()=>{ dispatch(i+1)})
      }
  }

  
}

var fn = compose(fn1, fn2, fn3)

fn() 
function fn1(next){
  console.log('start', 1)
  next()
  console.log('end' , 1)
}
function fn2(next){
  console.log('start', 2)
  next()
  console.log('end' , 2)
}
function fn3(next){
  console.log('-->', 3)
}
