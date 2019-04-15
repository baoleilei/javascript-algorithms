/**
 * 
  装饰者模式：在不改变对象自身的基础上，动态地添加功能代码。

  根据描述，装饰者显然比继承等方式更灵活，而且不污染原来的代码，代码逻辑松耦合。

  2. 应用场景
  装饰者模式由于松耦合，多用于一开始不确定对象的功能、或者对象功能经常变动的时候。
  尤其是在参数检查、参数拦截等场景。

} 
 * @param {*} before 
 * @param {*} after 
 */
const addDecorator = (fn, before, after) => {
  let isFn = fn => typeof fn === "function";

  if (!isFn(fn)) {
    return () => {};
  }

  return (...args) => {
    let result;
    // 按照顺序执行“装饰函数”
    isFn(before) && before(...args);
    // 保存返回函数结果
    isFn(fn) && (result = fn(...args));
    isFn(after) && after(...args);
    // 最后返回结果
    return result;
  };
};

/******************以下是测试代码******************/

const beforeHello = (...args) => {
  console.log(`Before Hello, args are ${args}`);
};

const hello = (name = "user") => {
  console.log(`Hello, ${name}`);
  return name;
};

const afterHello = (...args) => {
  console.log(`After Hello, args are ${args}`);
};

const wrappedHello = addDecorator(hello, beforeHello, afterHello);

let result = wrappedHello("godbmw.com");
console.log(result);




