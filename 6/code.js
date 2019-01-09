var calculator = function () {
  var result = 0;
  this.add = function (x) {
      result = result + x;
      return this;
  };
   this.sub = function (x) {
      result = result - x;
      return this;
  };
  this.result = function () {
      return result;
  }
};
var res = new calculator().add(2).add(30).sub(-100).result();
console.log(res);
