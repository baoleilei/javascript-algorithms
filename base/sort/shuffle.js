/**
作者：野生纯情的小狮子
链接：https://juejin.im/post/5bd5c589f265da0a96251a56
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 */
/**
 * 法一：通过给数组的原生方法sort()传递一个函数，让比较函数随机返回-1或1；var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
 */
arr.sort(function(){
    return Math.random() > 0.5 ? -1:1;
});
console.log(arr);
/**
 * 法二、洗牌算法思想：第一次把数组的最后一位数和随机产生的index位置的数进行交换；第二次把数组中的倒数第二位数和随机产生的index位置的数进行交换；以此类推，完成乱排。var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
 */
if(!Array.prototype.shuffle) {
    Array.prototype.shuffle = function () {
        for (var j, x, i = this.length - 1; i >= 0; i--) {
            j = Number.parseInt(Math.random() * i);
            x = this[i];
            this[i] = this[j];
            this[j] = x;
        }
        return this;
    }
}
console.log(arr.shuffle());
