/*
好久没打卡了，虽然自己有看题，不过最近在忙其他事，没什么时间写出来。马上就要开学了，开学了可能反而会更有时间来刷题吧。可以在上课的时间段来写，，哈哈。毕竟很少听课。

题目描述
将给定的字符串 例如”PAYPALISHIRING” 以Z字形排列成给定的行数

P   A   H   N
A P L S I I G
Y   I   R
之后从左往右，逐行读取字符：”PAHNAPLSIIGYIR”

实现一个将字符串进行指定行数变换的函数:

string convert(string s, int numRows);
示例1

输入: s = "PAYPALISHIRING", numRows = 3
输出: "PAHNAPLSIIGYIR"
实例2

输入: s = "PAYPALISHIRING", numRows = 4
输出: "PINALSIGYAHRPI"
解释:

P     I    N
A   L S  I G
Y A   H R
P     I
*/

function convertZ(s, numRows) {
  if (s==null || s.length <= 1 || numRows == 1)
  return s;

  //每次都会用到2*numRows-2，所以用一个变量保存起来
  var temp = 2*numRows - 2;
  var str = '';

  for(let i = 0; i < numRows; i++){
    //第0行
    if(i == 0){
        for(let k = 0; k * temp < s.length; k++){
            str = str + (s.charAt(k*temp));
        }
    }
    //第numRows-1行
    else if(i == numRows -1){
        for(let k = 0; k*temp+numRows-1 < s.length;k++){
            str = str + (s.charAt(k*temp+numRows-1));
        }
    }
    //其他行
    else{
        for(let k = 0; k*temp+i < s.length; k++){
            // str.append(s.charAt(k*temp+i));
             str = str + (s.charAt(k*temp+numRows-1));
            if((k+1)*temp -i < s.length){
                // str.append(s.charAt((k+1)*temp - i));
                str = str + s.charAt((k+1)*temp - i);
                s.charAt(k*temp+i)
            }
        }
    }
  }
  return str;
}

console.log(convertZ('PAYPALISHIRING',3))