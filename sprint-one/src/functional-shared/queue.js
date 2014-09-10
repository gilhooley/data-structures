
var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};


var makeQueue = function(){

  var newQueue = {};
  newQueue.sizea = 0;
  newQueue.storage = {};
  extend(newQueue, queueMethods);
  return newQueue;

};



var queueMethods = { 

  enqueue: function(value) {
		this.storage[this.sizea] = value;
    this.sizea++;
	},

	dequeue: function() {
		this.sizea && this.sizea--;
		  var result = this.storage[0];

    for (var i = this.sizea; i > 0; i--) {
      this.storage[i-1] = this.storage[i];
    }

    return result;
	},

	size: function() {
		return this.sizea;
	}

};
 



