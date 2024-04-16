const readline = require('readline');

class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first number: ', (firstNumber) => {
  rl.question('Enter the second number: ', (secondNumber) => {
    rl.question('Enter the operation (add, subtract, multiply, divide): ', (operation) => {
      const calculator = new Calculator();
      let result;
      switch (operation) {
        case 'add':
          result = calculator.add(parseFloat(firstNumber), parseFloat(secondNumber));
          break;
        case 'subtract':
          result = calculator.subtract(parseFloat(firstNumber), parseFloat(secondNumber));
          break;
        case 'multiply':
          result = calculator.multiply(parseFloat(firstNumber), parseFloat(secondNumber));
          break;
        case 'divide':
          result = calculator.divide(parseFloat(firstNumber), parseFloat(secondNumber));
          break;
        default:
          console.log('Invalid operation');
          rl.close();
          return;
      }
      console.log(`The result is: ${result}`);
      rl.close();
    });
  });
});