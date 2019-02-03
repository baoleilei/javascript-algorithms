/**
 * 2叉树反转
 * @param {*} root 
 */
function invertTree(root) {
  if (root!== null) {
    var temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
  }

  return root
}

var obj={
  id:4,		
  left:{
    id:2,
    left:{
      id:1,
      left:null,
      right:null
    },
    right:{
      id:3,
      left:null,
      right:null
    }
  },
  right:{
    id:7,
    left:{
      id:6,
      left:null,
      right:null
    },
    right:{
      id:9,
      left:null,
      right:null
    }
  }
}
console.log(invertTree(obj))