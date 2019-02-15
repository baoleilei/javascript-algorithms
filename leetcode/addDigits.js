/**
 * 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。

示例:

输入: 38 
输出: 2 
解释: 各位相加的过程为：3 + 8 = 11, 1 + 1 = 2。 由于 2 是一位数，所以返回 2。 
进阶: 
你可以不使用循环或者递归，且在 O(1) 时间复杂度内解决这个问题吗？

将数字转换为字符，之后循环相加
 */

 let addDigits = function(num){
     while(num > 10){
        let dd = num.toString()
        var count = 0;
        for(let i =0 ; i < dd.length; i++) {
           count += parseInt(dd[i])
        }
        num = count
     }
     return num
 }
console.log( addDigits(38));