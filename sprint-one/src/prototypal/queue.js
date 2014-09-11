var makeQueue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.storage = Object.create(Object.prototype);
  newQueue.sizea = 0;
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
    delete this.storage[0];

    for (var key in this.storage){
    	this.storage[key-1] = this.storage[key];
    }

  	return result;
  },

  size: function() {
  	return this.sizea;
  }

};


