function curriedAdd(initial = 0) {
    let total = initial;
  
    function add(num) {
      if (typeof num === "undefined") {
        return total;
      }
      total += num;
      return add;
    }
  
    return add;
  }
  

module.exports = { curriedAdd };
