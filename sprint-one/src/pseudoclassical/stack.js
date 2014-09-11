var Stack = function() {
	this.storage = {};
	this.sizea = 0;
};

Stack.prototype.push = function(value){
	this.storage[this.sizea] = value;
	this.sizea++;
};

Stack.prototype.pop = function(){
	this.sizea && this.sizea--;
	var result = this.storage[this.sizea];
	delete this.storage[this.sizea];
	return result;
};

Stack.prototype.size = function(){
	return this.sizea;
};