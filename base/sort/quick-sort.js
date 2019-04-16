//https://www.cnblogs.com/aaronjs/p/3539538.html
function partition(items, left, right) {
  var pivot   = items[Math.floor((right + left) / 2)],
      i       = left,
      j       = right;
  while (i <= j) {
      while (items[i] < pivot) {
          i++;
      }
      while (items[j] > pivot) {
          j--;
      }
      if (i <= j) {
          swap(items, i, j);
          i++;
          j--;
      }
  }
  return i;
}
function swap(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}
function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
      index = partition(items, left, right);
      if (left < index - 1) {
          quickSort(items, left, index - 1);
      }
      if (index < right) {
          quickSort(items, index, right);
      }

  }
  return items;
}

var items = [1,232,4,4,34,5,4,4536,5,5]
console.log(quickSort(items,0, items.length - 1))
// me

function quick(items, left,right) {
  let index;
  if (items.length > 1) {
    index = partition(items, left,right)
    if (left < index -1) {
      quick(items, left, index -1)
    } 
    if (index < right) {
      quick(items, index, right);
    }
  }
   
}

function partitio(items, left, right) {
  let pivot = items (Math.floor(left + right) /2)
  let i = left
  let j = right
  while (i < j) {
    while(items(pivot) < pivot) {
      i++
    }
    while(items(pivot) > pivot){
      j++
    }
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
}