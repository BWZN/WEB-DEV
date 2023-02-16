let calculator = {
    a: prompt("a?", ""),
    b: prompt("b?", ""),

    read() {
        return +this.a, +this.b;
    },

    sum() {
        return +this.a + +this.b;
    },

    mul() {
        return +this.a * +this.b;
    },
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );