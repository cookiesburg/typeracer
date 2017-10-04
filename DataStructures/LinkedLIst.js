function LinkedList() {
  this.head = null;
}

LinkedList.prototype.isEmpty = function() {
  console.log(this.head === null);
};

LinkedList.prototype.prepend = function(val) {
  let newNode = {
    data: val,
    next: this.head
  };
  
  this.head = newNode;
};

LinkedList.prototype.append = function(val) {
  let newNode = {
    data: val,
    next: null
  };

  let curr = this.head;

  if (this.head === null) {
    this.head = newNode;
    return;
  }

  while (curr.next !== null) {
    curr = curr.next;
  }
  
  curr.next = newNode;
};

LinkedList.prototype.amount = function() {
  let curr = this.head
  let count = 0

  if (curr === null) {
    return 0;
  }

  while (curr !== null) {
    count++;
    curr = curr.next;
  }

  console.log(count);
};

LinkedList.prototype.contains = function(val) {
  let curr = this.head;

  if (curr.data === val) {
    return true;
  }

  while (curr !== null) {
    if (curr.data === val) {
      return true;
    }
    curr = curr.next;
  }

  return false;
};

LinkedList.prototype.remove = function(val) {
  if (!this.contains(val)) {
    return;
  }

  if (this.head.data === val) {
    this.head = this.head.next
    return;
  };

  let prev = null
  let curr = this.head
  
  while (curr.data !== val) {
    prev = curr;
    curr = curr.next;
  }

  prev.next = curr.next;
};

LinkedList.prototype.print = function() {
  let output = '[';
  let curr = this.head;

  while (curr !== null) {
    output += curr.data;
    if (curr.next !== null) {
      output += ',';
    }
    curr = curr.next;
  }
  output += ']';
  console.log(output);
};

let list = new LinkedList();
list.append(34);
list.append(555);
list.append(3);
list.print();
list.prepend(44);
list.isEmpty();
list.print();
list.amount();
console.log(list.contains(9));
console.log(list.contains(44));
console.log(list.contains(555));
list.remove(34);
list.print();
list.append(90);
list.remove(44);
list.print();
