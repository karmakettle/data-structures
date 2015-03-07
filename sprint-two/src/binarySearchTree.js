var BinarySearchTree = function(value){
  var tree = Object.create(bTreeMethods);
  tree.value = value;
  tree.left = undefined;
  tree.right = undefined;

  return tree;
};

bTreeMethods = {};

bTreeMethods.insert = function(value) {
  // check left -- if newNode is less than currentNode
  if (value < this.value){
    // if left of currentNode is undefined
    if (this.left === undefined){
      // insert - create new node
      this.left = BinarySearchTree(value);
    }
    // else if value of newNode is less than currentNode
    else {
          // recurse on this left side
    this.left.insert(value);          
    }
  }
  // else (this will be where newNode's value is greater than currentNode, right side)
  else {
    // if right of currentNode is undefined
      // insert - create new node
    if (this.right === undefined){
      //insert - create new node
      this.right = BinarySearchTree(value);
    }
    else {
    // recurse on this right side};
      this.right.insert(value);
    }
  }
};

bTreeMethods.contains = function(target) {
  var result = false;
  if (target === this.value){
    return true;
  } else {
    if (this.left !== undefined && target < this.value){
      result = result || this.left.contains(target);
    } else if (this.right !== undefined) {
      result = result || this.right.contains(target);
    }
  }
  return result;
};

bTreeMethods.depthFirstLog = function(cb, stack) {
  //create array
  stack = stack || [this];
  var next = stack.pop();
  
  //if this.left (right) is !undefined,
  //cb(this.value)
  if (next.left !== undefined){
    //load array w/this.left, this.right
    stack.push(next.left);
  }
  if (next.right !== undefined){
    stack.push(next.right);
  }
  //recurse on array.pop
  cb(next.value);

  if (next.left || next.right) {
    next.depthFirstLog(cb, stack);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
