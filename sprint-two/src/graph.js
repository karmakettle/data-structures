

var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(node){
  this.nodes[node] = this.nodes[node] || { edges: [] };
};

Graph.prototype.contains = function(node){
  return !!this.nodes[node];
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return this.nodes[fromNode].edges.indexOf(toNode) >= 0;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode].edges.push(toNode);
  this.nodes[toNode].edges.push(fromNode);
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



