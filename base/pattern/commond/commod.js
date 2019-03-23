
/*
设计模式手册之命令模式
1. 什么是“命令模式”？
命令模式是一种数据驱动的设计模式，它属于行为型模式。

请求以命令的形式包裹在对象中，并传给调用对象。
调用对象寻找可以处理该命令的合适的对象，并把该命令传给相应的对象。
该对象执行命令。
在这三步骤中，分别有3个不同的主体：发送者、传递者和执行者。在实现过程中，需要特别关


命令对象将动作的接收者设置在属性中，并且对外暴露了execute接口（按照习惯约定）。

在其他类设置命令并且执行命令的时候，只需要按照约定调用Command对象的execute()即可。到底是谁接受命令，并且怎么执行命令，都交给Command对象来处理！

*/
// 命令执行者 接受到命令，执行相关操作 
const MenuBar = {
  refresh(){
    console.log("刷新菜单页面");
  }
};

// 命令对象，execute方法就是执行相关命令  
const RefreshMenuBarCommand = receiver => {
  return {
    execute(){
      receiver.refresh();
    }
  }
};

//  发送者  为按钮对象指定对应的 对象   
const setCommand = (button, command) => {
  button.onclick = () => {
    command.execute();
  }
};

let refreshMenuBarCommand = RefreshMenuBarCommand(MenuBar);
let button = document.querySelector("button");
setCommand(button, refreshMenuBarCommand);

