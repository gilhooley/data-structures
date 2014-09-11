var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  //console.log(newStack);
  newStack.sizea = 0;
  newStack.storage = Object.create(Object.prototype);
  return newStack;
};


var stackMethods = {

  push: function(value) {
  	this.storage[this.sizea] = value;
  	this.sizea++;
  },


  pop: function() {
  	this.sizea && this.sizea--;
  	var result = this.storage[this.sizea];
	  delete this.storage[this.sizea];
  	return result;
  },


  size: function() {
  	return this.sizea;
  }

};


