var makeStack = function() {

  var newStack = Object.create(stackMethods);
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


