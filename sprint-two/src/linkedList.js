var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);
    if (!list.head) {
      list.head = node;
    } else {
      list.tail.next = node;
    }
    list.tail = node;
  };

  list.removeHead = function(){
    var result = list.head.value;
    if (list.head.next) {
      list.head = list.head.next;
    }
    return result;
  };

  list.contains = function(target){
    var node = list.head;
    while (node.next) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
