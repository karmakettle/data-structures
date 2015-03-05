var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var begin = 0;
  var end = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
  	storage[end] = value;
  	end++;
  };

  someInstance.dequeue = function(){
  	if(begin !== end){
  		var result = storage[begin];
  		delete storage[begin];
  		begin++;

  	return result;
  	}
  };

  someInstance.size = function(){
  	return end - begin;
  };

  return someInstance;
};
