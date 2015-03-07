

var Graph = function(){
  this.nodes = [];
};

Graph.prototype.addNode = function(node){
  this.nodes.push({
    name: node,
    pointers: [node]
  });
};

Graph.prototype.contains = function(node){
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].name === node) {
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  for (var i = 0; i < this.nodes.length; i++){
    if (this.nodes[i].name === node){
      this.nodes.splice(i, 1);
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  for (var i = 0; i < this.nodes.length; i++) {
    var node = this.nodes[i];
    if (node.name === fromNode) {
      return node.pointers.indexOf(toNode) >= 0;
    }
  }
};

Graph.prototype.addEdge = function(fromNode, toNode){
//if fromNode or toNode is an object, get its name and that becomes fromNode and toNode
  if (typeof fromNode !== "string") {
    fromNode = fromNode.name;
  }
  else if (typeof toNode !== "string") {
      toNode = toNode.name;
  }
  for (var i = 0; i < this.nodes.length; i++) {
    var node = this.nodes[i];
    if (node.name === fromNode) {
      node.pointers.push(toNode);
    } 
    else if (node.name === toNode) {
      node.pointers.push(fromNode);
    }
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  for (var i = 0; i < this.nodes.length; i++) {
    var node = this.nodes[i];
    if (node.name === fromNode) {
      var index = node.pointers.indexOf(toNode);
      if (index >= 0) {
        node.pointers.splice(index, 1);
      }
    } 
    else if (node.name === toNode) {
      var index = node.pointers.indexOf(toNode);
      if (index >= 0){
        node.pointers.splice(index, 1);
      }
    }
  }
};

Graph.prototype.forEachNode = function(cb){
  for (var i = 1; i < this.nodes.length; i++){
    cb(this.nodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



