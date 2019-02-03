var reverseList = function(head) {
  if (!head || !head.next) { return head}
  var pre = null
  console.log('head', JSON.stringify(head))
  while(head ) {
    var next = head.next;
    head.next = pre;
    pre = head
    head = next
  }
  return pre;
}
var obj = {
  id:1,
  next:{
    id:2,
    next: {
      id:4,
      next: {
        id:5,
        next: {
          id:6,
          next: {
            id:7,
            next:null
          }
        }
      }
    }
  }
}
console.log(JSON.stringify(reverseList(obj)))