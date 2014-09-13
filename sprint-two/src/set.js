var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  set._size = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	this._storage[this._size] = item;
	this._size++;
};

setPrototype.contains = function(item){
  for (var i = 0; i < this._size; i++) {
  	if (this._storage[i] === item) {
  		return true;
  	}
  } return false;
};

setPrototype.remove = function(item){
	this._size && this._size--;
  for (var i = 0 ; i < this._size; i++) {
  	if (this._storage[i] === item) {
      this._storage.splice(i, 1);
  	}
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
