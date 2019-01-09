function add(a,b) {
    if (arguments.length == 1) {
      return function(f) {
        return a + f;
      };
    }
    return a + b;
  }
console.log(add(5, 2));
console.log(add(1)(7));
console.log(add(3)(8));