var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.begin = 0;
  storage.end = 0;
  _.extend(storage, queueMethods);
  return storage;
};

var queueMethods = {
	enqueue: function(value){
		this[this.end] = value;
		this.end++;
	},
	dequeue: function(){
		if(this.begin !== this.end){
			var result = this[this.begin];
			this.begin++;
			return result;
		}
	},
	size: function(){
		return this.end - this.begin;
	}
};



