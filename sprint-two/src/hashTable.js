var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(Array.isArray(this._storage[i])){
  	this._storage[i].push([k, v]);
  }
  else{
  	this._storage[i] = [[k, v]];
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[i];
  for (var j = 0; j < bucket.length; j++){
		if (bucket[j][0] === k) {
			return bucket[j][1];
		}  	
  }
  return null;
};

HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[i];
  for (var j = 0; j < bucket.length; j++){
		if (bucket[j][0] === k) {
			bucket.splice(j,1);
		}
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * Constant time, implementing a hash table. Even though we iterate 
 * over arrays, the size of the arrays doesn't represent the size of
 * the input--the size by design doesn't exceed a certain number
 */
