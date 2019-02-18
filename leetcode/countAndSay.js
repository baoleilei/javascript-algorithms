/**
 * 38. 报数（JavaScript版）报数序列是指一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 被读作  "one 1"  ("一个一") , 即 11。
11 被读作 "two 1s" ("两个一"）, 即 21。
21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。

给定一个正整数 n ，输出报数序列的第 n 项。

注意：整数顺序将表示为一个字符串。

示例 1:

输入: 1
输出: "1"
示例 2:

输入: 4
输出: "1211"
思路：

首先这个题目读了好几遍。要得到第n项，把第n-1项读出来就可以了，所以是一个循环，每一次循环计算出一项。

在循环内部，我们需要把当前这一项郎读出来，得到的结果作为下一循环的开始；设置一个计数器count；一个指针 j 从1开始，第 j 个数和第 j - 1 个数相等，count++， 不相等，就可以朗读这个第 j - 1 个数。

JavaScript 版本：
 */

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    //创建cas方法，是为了保持输入输出一致，便于递归调用，其中n为字符串类
    //型，如果使用数字类型，会遇到大数损失精度的问题
   var cas=function(n){
             if(n=="1"){return "1";}
             else{
                    //获得前一个的结果
                    var tm=parseInt(n)-1;
                    var ds=cas(tm.toString());
                    //将ds转换为字符串
                    var ps=ds.toString();
                    var mm=[];                        
                    //计数器
                    var count=0;
                    //当前值
                    var current=ps[0];

                    for(var i=0;i<ps.length;i++){
                        if(current==ps[i]){
                            count++;
                        }else{
                            //将对应的读法压入新的数组
                            mm.push(count.toString());
                            mm.push(current);
                            //current=1是因为需要包含当前字符
                            count=1;
                            current=ps[i];
                        }
                    }
                mm.push(count.toString());
                mm.push(current);                     
             return mm.join("");
         }
}
return cas(n);
};
