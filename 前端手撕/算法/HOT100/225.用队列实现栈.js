var MyStack = function () {
  this.queue = [];
};

MyStack.prototype.push = function (x) {
  this.queue.push(x);
};

/*
主要思路：利用另外一个栈暂存数据
*/
MyStack.prototype.pop = function () {
  const tempQueue = [];
  while (this.queue.length !== 1) {
    tempQueue.push(this.queue.shift());
  }
  const res = this.queue[0];
  this.queue = tempQueue;
  return res;
};

MyStack.prototype.top = function () {
  const item = this.pop();
  this.push(item);
  return item;
};

MyStack.prototype.empty = function () {
  return this.queue.length === 0;
};
