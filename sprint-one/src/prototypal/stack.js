var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.len = 0;
  return newStack;
};

var stackMethods = {
	push: function(value) {
		this[this.len] = value;
		this.len++;
	},
	pop: function() {
		this.len && this.len--;
		var result = this[this.len];
		delete this[this.len];
		return result;
	},
	size: function() {
		return this.len;
	}
};


