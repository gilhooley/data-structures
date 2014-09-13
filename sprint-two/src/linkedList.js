var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.size = 0;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    this.tail = newNode;
    this[this.size] = newNode;
    if (this.size === 0) { 
      this.head = newNode; 
      this[this.size] = newNode;
      this.size++; 
    }
    else {
      this[this.size] = newNode;
      this[this.size-1].next = this[this.size];
      this.size++;
    }
  };

  list.removeHead = function(){
   if (this.size) {
    var result = this[0];
    delete this[0];
    for (var key in this) {
      this[key-1] = this[key];
    }
    this.size--;
    if (this.size === 0) { this.head = null; this.tail = null; }
    else {this.head = this[0];}
    return result.value;
   }
  };

  list.contains = function(target){
    for (var key in this) {
      if (this[key].value === target) { 
        //console.log(this[key]); 
        return true; }
    }
    return false;
  };
  return list;
};



var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};




 

/*
 * Complexity: What is the time complexity of the above functions?
 */
