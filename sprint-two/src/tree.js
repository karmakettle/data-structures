var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(new Tree(value));
};

treeMethods.contains = function(target){
  var result = false;
  if (this.value === target) {
  	return true;
  }
  for (var i = 0; i < this.children.length; i++) {
  	result = this.children[i].contains(target) || result;
  }

  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * .addChild:  Constant time
 * .contains:  Linear, looks through all possibilities but not more than once
 */
