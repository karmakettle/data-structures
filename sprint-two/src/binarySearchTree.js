var BinarySearchTree = function(value){
	var tree = Object.create(treeMethods);
	this.value = value;
	this.left = undefined;
	this.right = undefined;

	return tree;
};

BinarySearchTree.treeMethods = {};

treeMethods.insert = function(value) {

};

treeMethods.contains = function(target) {

};

treeMethods.depthFirstLog = function(cb) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
