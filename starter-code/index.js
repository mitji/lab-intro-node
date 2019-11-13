class SortedList {
    constructor() {
      this.items = [];
      this.length = 0;
    }
    add(item) {
      this.items.push(item);
      this.length++;
    }
    get(pos) {
      if (pos>=this.length) {
        throw new Error('OutOfBounds');
      } else {
        this.items.sort( (a,b) => {
          return a-b;
        })
        return this.items[pos];
      }
    }
    max() {
      if(this.length === 0) {
        throw new Error('EmptySortedList');
      } else {
        return Math.max(...this.items);
      }
    }
    min() {
      if(this.length === 0) {
        throw new Error('EmptySortedList');
      } else {
        return Math.min(...this.items);
      }
    }
    average() {
      if(this.length === 0) {
        throw new Error('EmptySortedList');
      } else {
        let sum = this.items.reduce ( (accumulator, currentValue) => {
          return accumulator += currentValue;
        });
        return sum/this.items.length;
      }
    }
    sum() {
      let sum = 0;
      if(this.length === 0) {
        return sum;
      } else {
        sum = this.items.reduce ( (accumulator, currentValue) => {
          return accumulator += currentValue;
        });
        return sum;
      }
    }
};

module.exports = SortedList;

