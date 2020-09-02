function getValue(input) {
    document.getElementById("input").value += input;
  }

  function clearScreen() {
    document.getElementById("input").value = "";
  }
  
  function getAnswer() {
    let results = document.getElementById("input").value;
    currentLength = indexOfCurrentOutput(results);
    currentNum = Number.parseFloat(results);
    result = currentNum;
    while (currentLength !== -1) {
      operator = results[currentLength];
      if (operator === undefined) {
        break;
      }
      results = results.slice(currentLength + 1);
      currentNum = Number.parseFloat(results);
      performOperation(currentNum, operator);
    }
    document.getElementById("input").value = result;
  }
  
  function indexOfCurrentOutput(inp) {
    plus = inp.indexOf("+");
    minus = inp.indexOf("-");
    multiplication = inp.indexOf("*");
    divide = inp.indexOf("/");
    opIndexArray = [
      plus,
      minus,
      multiplication,
     divide,
    ];
    min = plus;
    if (
      plus !== -1 ||
      minus !== -1 ||
      multiplication !== -1 ||
      divide !== -1
    ) {
      for (let i = 0; i < opIndexArray.length; i++) {
        if (min === -1) {
          min = opIndexArray[i + 1];
          if (min === undefined) {
            return -1;
          }
        }
        if (
          opIndexArray[i] < min &&
          opIndexArray[i] !== -1
        ) {
          min = opIndexArray[i];
        }
      }
      return min;
    } else {
      return -1;
    }
  }
  
  function performOperation(numbers, op) {
    switch (op) {
      case "+":
        result += numbers;
        break;
      case "-":
        result -= numbers;
        break;
      case "*":
        result *= numbers;
        break;
      case "/":
        result /= numbers;
        break;
      default:
        break;
    }
    return result;
  }
  