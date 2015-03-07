

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
  // var nodeMap = [{fromNode: toNode}, {toNode: fromNode}];
  // for (var i = 0; i < 2; i++) {
  //   var key = Object.keys(nodeMap[i])[0];
  //   var edges = this.nodes[key].edges;
  //   edges.slice(edges.indexOf(nodeMap[i][key]), 1);
  // }

    var temp = this.nodes[fromNode].edges;
    temp.splice(temp.indexOf(toNode), 1);
    this.nodes[fromNode].edges = temp;

    temp = this.nodes[toNode].edges;
    temp.splice(temp.indexOf(fromNode), 1);
    this.nodes[toNode].edges = temp;
};

Graph.prototype.forEachNode = function(cb){
  for (var key in this.nodes){
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



