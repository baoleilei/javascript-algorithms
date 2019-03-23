/*
1. 什么是迭代器模式？
迭代器模式是指提供一种方法顺序访问一个集合对象的各个元素，使用者不需要了解集合对象的底层实现。

2. 内部迭代器和外部迭代器
内部迭代器：封装的方法完全接手迭代过程，外部只需要一次调用。

外部迭代器：用户必须显式地请求迭代下一元素。熟悉C++的朋友，可以类比C++内置对象的迭代器的 end()、next()等方法。
*/


const Iterator = obj => {
  let current = 0;
  let next = () => current += 1;
  let end = () => current >= obj.length;
  let get = () => obj[current];

  return {
    next,
    end,
    get
  }
}

let myIter = Iterator([1, 2, 3]);
while(!myIter.end()) {
  console.log(myIter.get())
  myIter.next();
}


