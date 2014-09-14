var Graph = function(){
  this.sizeish = 0;
};

Graph.prototype.addNode = function(newNode, toNode){
  this[newNode] = {value: newNode};
  this.sizeish++;
  if (this.sizeish < 2) {
    return;
  } else if (toNode === undefined) {
    var starterNode = Object.keys(this)[1];
    this[starterNode][newNode] = {value: newNode};
    this[newNode][starterNode] = {value: starterNode};
  } else {
    this[toNode][newNode] = {value: newNode};
    this[newNode][toNode] = {value: toNode};
  }
};

Graph.prototype.contains = function(node){
  for (var key in this) {
    if (this[key].value === node) {return true;}
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  var result;
  for (var key in this) {
    if (typeof this[key] === "object" && this[key].value === node) {
      result = this[key];
      delete this[key];
      this.sizeish--;
    }
  }
  return result;
};

Graph.prototype.getEdge = function(fromNode, toNode){
  if (this[fromNode].value === toNode) {
   return true;
  }
  else {for (var key in this[fromNode]) {
      if (this[fromNode][key].value === toNode) {
        return true;
      }
    }}
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this[fromNode][toNode] = {value: toNode};
  this[toNode][fromNode] = {value: fromNode};
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if (this.contains(fromNode)) {
    for (var key in this[fromNode]) {
      if (this[fromNode][key].value === toNode) {
        delete this[fromNode][key];
          if (Object.keys(this[fromNode]).length < 2) {
            delete this[fromNode];
          }
        delete this[key][fromNode];
          if (Object.keys(this[key]).length < 2) {
            delete this[key];
          }
      }
    }
  };

  Graph.prototype.forEachNode = function(fnc) {
    // review function binding!
    // for (var key in this) {
    //    fnc(this[key]);
    // }
  };
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
