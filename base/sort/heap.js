/*
堆排序利用了二叉堆的特性来做，二叉堆通常用数组表示，并且二叉堆是一颗完全二叉树（所有叶节点（最底层的节点）都是从左往右顺序排序，并且其他层的节点都是满的）。二叉堆又分为大根堆与小根堆。

大根堆是某个节点的所有子节点的值都比他小
小根堆是某个节点的所有子节点的值都比他大
堆排序的原理就是组成一个大根堆或者小根堆。以小根堆为例，某个节点的左边子节点索引是 i * 2 + 1，右边是 i * 2 + 2，父节点是 (i - 1) /2。

首先遍历数组，判断该节点的父节点是否比他小，如果小就交换位置并继续判断，直到他的父节点比他大
重新以上操作 1，直到数组首位是最大值
然后将首位和末尾交换位置并将数组长度减一，表示数组末尾已是最大值，不需要再比较大小
对比左右节点哪个大，然后记住大的节点的索引并且和父节点对比大小，如果子节点大就交换位置
重复以上操作 3 - 4 直到整个数组都是大根堆。
*/


//以下代码实现了小根堆，如果需要实现大根堆，只需要把节点对比反一下就好
function heap(array) {
  checkArray(array)
  // 将最大值交换到首位
  for (let i = 0; i < array.length; i++) {
    heapInsert(array, i)
  }
  let size = array.length
  // 交换首位和末尾
  swap(array, 0, --size)
  while (size > 0) {
    heapify(array, 0, size)
    swap(array, 0, --size)
  }
  return array
}

function heapInsert(array, index) {
  // 如果当前节点比父节点大，就交换
  while (array[index] > array[parseInt((index - 1) / 2)]) {
    swap(array, index, parseInt((index - 1) / 2))
    // 将索引变成父节点
    index = parseInt((index - 1) / 2)
  }
}
function heapify(array, index, size) {
  let left = index * 2 + 1
  while (left < size) {
    // 判断左右节点大小
    let largest =
      left + 1 < size && array[left] < array[left + 1] ? left + 1 : left
    // 判断子节点和父节点大小
    largest = array[index] < array[largest] ? largest : index
    if (largest === index) break
    swap(array, index, largest)
    index = largest
    left = index * 2 + 1
  }
}