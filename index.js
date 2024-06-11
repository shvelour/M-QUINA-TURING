function turingMachine(inputArray) {
  let stack = [];

  let results = [];

  for (let i = 0; i < inputArray.length; i++) {
    let token = inputArray[i];

    if (!isNaN(token)) {
      stack.push(Number(token));
    } else if (
      token === "+" ||
      token === "-" ||
      token === "*" ||
      token === "/"
    ) {
      if (stack.length < 2) {
        console.log("Erro: não há números suficientes na pilha.");
        return;
      }

      let b = stack.pop();
      let a = stack.pop();
      let result;

      if (token === "+") {
        result = a + b;
      } else if (token === "-") {
        result = a - b;
      } else if (token === "*") {
        result = a * b;
      } else if (token === "/") {
        if (b === 0) {
          console.log("Erro: divisão por zero.");
          return;
        }
        result = a / b;
      }

      stack.push(result);

      results.push(result);
    } else {
      console.log("Token inválido: " + token);
      return;
    }
  }

  return results;
}

let expression = [3, 4, "+", 2, "*", 7, "/"];
console.log(turingMachine(expression));
