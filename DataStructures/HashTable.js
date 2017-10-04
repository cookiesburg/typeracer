function HashTable() {
  this.size = 0;
  this.data = {};
}   

HashTable.prototype.clear = function() {
  this.data = {};
  this.size = 0;
  return this.data;
};

HashTable.prototype.contains = function(key) {
  if (this.data.hasOwnProperty(key)) {
    return true;
  } 

  return false;
};

HashTable.prototype.isEmpty = function() {
  return this.size > 0 ? false : true;
};

HashTable.prototype.put = function(key, value) {
  if this.data.hasOwnProperty(key) {
    throw new Error("cannot duplicate key");
  }

  this.data[key] = value;
  this.size += 1;
  return this.data;
};

HashTable.prototype.remove = function() {
  if (this.data.hasOwnProperty(key)) {
      delete this.data[key];
      this.size -= 1;
      return this.data;
  }
};

hash = new HashTable();