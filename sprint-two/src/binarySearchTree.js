var extend = function(a,b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a;
};

var makeBinarySearchTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.left = {};
  newTree.right = {};
  extend(newTree, bstMethods); 
  //console.log(newTree);
  return newTree;
};

var bstMethods = {

  insert: function(value) {
    extend(this.left, bstMethods); 
    extend(this.right, bstMethods); 

   if (value < this.value && this.left.value === undefined ) {
    this.left.value = value;
    this.left.left = {};
    this.left.right = {};
   } else if (value < this.value) {
    var nxt = this.left;
    nxt.insert(value);
   }

   else if (value > this.value && this.right.value === undefined) {
    this.right.value = value;
    this.right.right = {};
    this.right.left = {};
   } else if (value > this.value) {
    var nxt = this.right;
    nxt.insert(value);
   }
  },

  contains: function(value) {
    if (this.value === value) {return true;}
    else if (value < this.value && this.left.value) { var that = this.left; return that.contains(value); }
    else if (value > this.value && this.right.value) { var that = this.right; return that.contains(value); }
    return false;
  },

  depthFirstLog: function(fnc) {
    if (this.value) { fnc(this.value); }
    for (var key in this) {
      if (this[key].value) {
        this[key].depthFirstLog(fnc);
      }
    }
  }
     
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
