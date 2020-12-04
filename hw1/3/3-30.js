var report = {
  sum: 0,
  count: 0,
  average_var: 0,
  add: function() {
    var args = Array.prototype.slice.call(arguments);
    args.forEach(function(entry) {
      this.sum += entry;
      ++this.count;
      this.average_var = this.sum / this.count
    }, this);
  },
  average: function() {
    return this.sum / this.count;
  },
};
report.add(60, 85, 95);
console.log(report.sum, report.count, report.average(), report.average_var); // 240 3 80