
var extend = function(a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
};

var makeStack = function() {

  var newStack = {};
  newStack.sizea = 0;
  newStack.storage = {};
  extend(newStack, stackMethods);
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

  },

};
