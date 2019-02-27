/**
 * 
 * @param {给定一个整数数组 asteroids，表示在同一行的行星。

对于数组中的每一个元素，其绝对值表示行星的大小，正负表示行星的移动方向（正表示向右移动，负表示向左移动）。每一颗行星以相同的速度移动。

找出碰撞后剩下的所有行星。碰撞规则：两个行星相互碰撞，较小的行星会爆炸。如果两颗行星大小相同，则两颗行星都会爆炸。两颗移动方向相同的行星，永远不会发生碰撞。

示例 1:

输入: 
asteroids = [5, 10, -5] 
输出: [5, 10] 
解释: 
10 和 -5 碰撞后只剩下 10。 5 和 10 永远不会发生碰撞。 
示例 2:

输入: 
asteroids = [8, -8] 
输出: [] 
解释: 
8 和 -8 碰撞后，两者都发生爆炸。 
示例 3:

输入: 
asteroids = [10, 2, -5] 
输出: [10] 
解释: 
2 和 -5 发生碰撞后剩下 -5。10 和 -5 发生碰撞后剩下 10。 
示例 4:

输入: 
asteroids = [-2, -1, 1, 2] 
输出: [-2, -1, 1, 2] 
解释: 
-2 和 -1 向左移动，而 1 和 2 向右移动。 
由于移动方向相同的行星不会发生碰撞，所以最终没有行星发生碰撞。 
说明:

数组 asteroids 的长度不超过 10000。 
每一颗行星的大小都是非零整数，范围是 [-1000, 1000] 。

思路： 
栈的基本操作， 
使用js数组自带的push()，pop()操作完成 
1.当遇到正数时，直接压入栈， 
2.当遇到负数时，如果当前栈为空，或者前一个数为负数时，直接压入栈， 
否则从栈中弹出一个值进行比较
--------------------- 
作者：旧月新酒 
来源：CSDN 
原文：https://blog.csdn.net/qq_40547126/article/details/82194381 
版权声明：本文为博主原创文章，转载请附上博文链接！} asteroids 
 */
var asteroidCollision = function(asteroids) {
  var dd=[];
  for(var i=0;i<asteroids.length;i++){
      //遇到正数，直接压入栈
      if(asteroids[i]>0){
          dd.push(asteroids[i]);
      }else if(asteroids[i]<0){
          //当栈为空或者左边的值为负数时，直接压入栈
          if(dd.length==0||dd[dd.length-1]<0){
              dd.push(asteroids[i]);
          }else{
              //弹出最后一个数
              var mm=dd.pop();
              //负数较大时，丢弃正数
              if(mm+asteroids[i]<0){
                console.log(11,mm)
                  i--;
              }else if(mm+asteroids[i]>0){
                  //正数较大时，重新压入栈中
                  asteroids[i]=mm;
                  i--;
              }
          }
      }

  }
  return dd;
};
console.log(asteroidCollision([1,-222]))