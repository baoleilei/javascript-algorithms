/**
 * 给定一个字符串，找出不含有重复字符的最长子串的长度。 
示例 1: 
输入: “abcabcbb” 
输出: 3 
解释: 无重复字符的最长子串是 “abc”，其长度为 3。

示例 2: 
输入: “bbbbb” 
输出: 1 
解释: 无重复字符的最长子串是 “b”，其长度为 1。

示例 3: 
输入: “pwwkew” 
输出: 3 
解释: 无重复字符的最长子串是 “wke”，其长度为 3。 
请注意，答案必须是一个子串，”pwke” 是一个子序列 而不是子串。

版权声明：本文为博主原创文章，转载请附上博文链接！
 */

var lengthOfLongestSubstring = function(s) {
  var max =0;
//定义last指针，指向左边界
  var last=-1;
  var  map={};
//不断向右移动
  for(var i=0;i<s.length;i++){
//出现重复的情况，更新last边界
//last之后出现重复元素，last<map[s[i]]才会成立
console.log('s[i]', s[i])
console.log(last, map[s[i]],map)
    if(map[s[i]]>=0&&last<map[s[i]]){
        last=map[s[i]];
    }
//更新最大值
      if(i-last>max){max=i-last;}
      map[s[i]]=i;
  }
  return max;
};
console.log(lengthOfLongestSubstring('sdsdsdsds'))