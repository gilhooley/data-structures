var HashTable = function(){
  this._limit = 8;
  this._count = 0;                                    // need for resizing
  this._storage = makeLimitedArray(this._limit);
  for (var m = 0; m < this._limit; m++) {             // move to insert (check for existence of bucket, else create bucket)
    this._storage[m] = [];
  }
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i].push( [k,v] );
  this._count++;                                      // only if not overwriting an existing value!!
  
  // if count > .75*limit, this._resize(this._limit*2)

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  
  for (var j = 0; j < this._storage[i].length; j++) {
    if (this._storage[i][j][0] === k) { 
      return this._storage[i][j][1]; 
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  for (var j = 0; j < this._storage[i].length; j++) {
    if (this._storage[i][j][0] === k) { 
      this._storage[i][j][1] = null; 
      this._count--;
    }
  }
  // if count < .25*limit, this._resize(this._limit/2)

  HashTable.prototype._resize = function(newLimit) {
    var oldStorage = this._storage;

    //set new limit
    //make a new storage with new size
    //walk through current storage
    //for each bucket
      //for each tuple
        //call insert with this tuple
  };

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
