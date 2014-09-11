var Queue = function() {
	this.storage = {};
	this.sizea = 0;
};

Queue.prototype.enqueue = function(value) {
	this.storage[this.sizea] = value;
	this.sizea++;
};

Queue.prototype.dequeue = function() {
	this.sizea && this.sizea--;
	var result = this.storage[0];
	delete this.storage[0];
	for (var key in this.storage) {
		this.storage[key-1] = this.storage[key];
	}

	return result;
};

Queue.prototype.size = function() {
	return this.sizea;
};

