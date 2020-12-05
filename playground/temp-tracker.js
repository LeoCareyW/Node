class TempTracker {
  constructor() {
    this.max = null;
    this.min = null;

    this.count = null;
    this.total = null;
    this.array = new Array(111).fill(0)
    this.mode = 0;
  };


  insert(temperature) {

    if (this.max === null || temperature > this.max) {
      this.max = temperature
    };

    if (this.min === null || temperature < this.min) {
      this.min = temperature
    };

    this.count += 1
    this.total += temperature
    this.mean = (this.total / this.count)

    this.array[temperature] += 1
    if ((this.array[temperature]) > this.array[this.mode]) {
      this.mode = temperature
    }
  };


  getMax() {
    return this.max;
  }

  getMin() {
    return this.min;
  }

  getMean() {
    return this.mean;
  }

  getMode() {
    return this.mode
  }

}
