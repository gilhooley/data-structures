var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function(){
    size && size--;
    var result = storage[0];

    for (var i = size; i > 0; i--) {
      storage[i-1] = storage[i];
    }

    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};



/*
queue.enqueue('a'); // storage[0] = a, storage.size = 1
queue.enqueue('b'); // storage[1] = b, storage.size = 2
queue.dequeue();    // storage > 0, storage.size = 1, return result = storage[0] = a; storage[0] = b
queue.enqueue('c');
expect(queue.dequeue()).to.equal('b');
*/