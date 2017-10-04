function Queue() {
  
  q = [];

  this.print = function() {
    console.log(q);
  };

  this.enqueue = function(val) {
    q.push(val);
  };

  this.dequeue = function() {
    return q.shift();
  };    

  this.front = function() {
    console.log(q[0]);
  }

  this.isEmpty = function() {
    console.log(q.length === 0);
  };

  this.size = function() {
    console.log(q.length);
  };

};

let line = new Queue();
line.enqueue(99);
line.enqueue(33);
line.enqueue(3);
line.enqueue(75);
line.enqueue(4536);
line.print();
line.front();
line.isEmpty();
line.dequeue();
line.print();
line.size();