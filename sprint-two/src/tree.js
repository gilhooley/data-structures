var extend = function(a,b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a;
};

var makeTree = function(value){
  var newTree = {};
  newTree.value = value; 
  newTree.children = []; 
  extend(newTree, treeMethods); 
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  this.value = value;
  this.children.push({value: value});
  this.children[this.children.length-1].children = [];
  extend(this.children[this.children.length-1], treeMethods);
};

treeMethods.contains = function(target){
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target) {
      return true;
    } else if (this.children[i].children.length > 0) {
      this.children[i].contains();
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
