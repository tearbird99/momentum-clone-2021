const calculator = {
  plus: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  invol: function (a, b) {
    console.log(a ** b);
  },
};

calculator.plus(2, 3);
calculator.minus(5, 1);
calculator.divide(9, 2);
calculator.invol(8, 3);
