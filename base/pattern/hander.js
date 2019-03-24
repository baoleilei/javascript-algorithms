/**
 * 设计模式手册之责任链模式
1. 什么是“责任链模式”？
责任链模式：多个对象均有机会处理请求，从而解除发送者和接受者之间的耦合关系。这些对象连接成为链式结构，每个节点转发请求，直到有对象处理请求为止。

其核心就是：请求者不必知道是谁哪个节点对象处理的请求。如果当前不符合终止条件，那么把请求转发给下一个节点处理。

而当需求具有“传递”的性质时（代码中其中一种体现就是：多个if、else if、else if、else嵌套），就可以考虑将每个分支拆分成一个节点对象，拼接成为责任链。

2. 优点与代价
优点
可以根据需求变动，任意向责任链中添加 / 删除节点对象
没有固定的“开始节点”，可以从任意节点开始
代价：责任链最大的代价就是每个节点带来的多余消耗。当责任链过长，很多节点只有传递的作用，而不是真正地处理逻辑。
3. 代码实现
为了方便演示，模拟常见的“日志打印”场景。模拟了 3 种级别的日志输出：

LogHandler: 普通日志
WarnHandler：警告日志
ErrorHandler：错误日志
首先我们会构造“责任链”：LogHandler -> WarnHandler -> ErrorHandler。LogHandler作为链的开始节点。

如果是普通日志，那么就由 LogHandler 处理，停止传播；如果是 Warn 级别的日志，那么 LogHandler 就会自动向下传递，WarnHandler 接收到并且处理，停止传播；Error 级别日志同理。
 */
class Handler {
  constructor() {
    this.next = null;
  }

  setNext(handler) {
    this.next = handler;
  }
}

class LogHandler extends Handler {
  constructor(...props) {
    super(...props);
    this.name = "log";
  }

  handle(level, msg) {
    if (level === this.name) {
      console.log(`LOG: ${msg}`);
      return;
    }
    this.next && this.next.handle(...arguments);
  }
}

class WarnHandler extends Handler {
  constructor(...props) {
    super(...props);
    this.name = "warn";
  }

  handle(level, msg) {
    if (level === this.name) {
      console.log(`WARN: ${msg}`);
      return;
    }
    this.next && this.next.handle(...arguments);
  }
}

class ErrorHandler extends Handler {
  constructor(...props) {
    super(...props);
    this.name = "error";
  }

  handle(level, msg) {
    if (level === this.name) {
      console.log(`ERROR: ${msg}`);
      return;
    }
    this.next && this.next.handle(...arguments);
  }
}

/******************以下是测试代码******************/

let logHandler = new LogHandler();
let warnHandler = new WarnHandler();
let errorHandler = new ErrorHandler();

// 设置下一个处理的节点
logHandler.setNext(warnHandler);
warnHandler.setNext(errorHandler);

logHandler.handle("error", "Some error occur");



