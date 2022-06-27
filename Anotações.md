# JavaScript

- **Criada em 1996, por Brendan Eich;**

- **ECMAScript: padrão no qual o JavaScript é baseado;**

- **"Tudo no JavaScript é objeto";**

- **Tipos de dados:**

  - **Primitivos: `String`, `Number`, `Boolean`, `BigInt`, `Undefined`, `Symbol`;**
  - **Primitivo especial: `Null`;**
  - **Complexos: `Object`, `Function`;**

- **Var: usado em situações onde queremos obter suporte de navegadores mais antigos;**

- **Null x Undefined:**

  - **Null: representa a ausência, intencional, de um valor de objeto;**
  - **Undefined: utilizado quando uma variável não teve um valor atribuído;**

- **Tipagem dinâmica: em JavaScript, não é necessário informar que tipo de dado, uma variável vai conter, ao declará-la;**

- **Precendência de operadores:**

  - **Primeiro: realizado as operações entre parênteses;**
  - **Segundo: realizado as operações de multiplicação e divisão;**
  - **Terceiro: realizado as operações de adição e subtração;**

- **Operadores unários de incremento e de decremento:**

  ```javascript
  // Operador de incremento e de decremento
  // Pŕefixo (++x || --x) - Realiza o incremento e retorna o valor
  // Póx-fixo (x++ || x--) - Retorna o valor e depois realiza o incremento
  
  let x = 2;
  console.log(x); // x = 2
  console.log(++x); // x = 3
  console.log(x++); // x = 3
  console.log(x); // x = 4
  
  let y = 5;
  console.log(y); // y = 5
  console.log(--y); // y = 4
  console.log(y--); // y = 4
  console.log(y); // x = 3
  ```

- **Números especiais:**

  ```javascript
  /* 
  	- Os valores +Infinity e -Infinity (representam os números infinitos, positivos e negativos);
  	
  	- Eles aparecem quando realizamos uma operação por zero ou quando valores não podem ser representados por serem, muito 		grandes, ou muito pequenos;
  	
  	- Também podemos nos referir a eles, de forma direta:
  		let number = +Infinity;
  		
  	- O valor NaN,é retornando de operações, cujo o resultado obtido é um valor numericamente indefinido;
  	
  	- O NaN pode aparecer em divisões por zero, em divisões de um valor infinito por outro,...
  */
  ```

- **Precedência de operadores lógicos:**

  - **Primeiro: operações entre parênteses;**
  - **Segundo: Not [Não] lógico ( ! );**
  - **Terceiro: And [E] lógico ( && );**
  - **Por último: Or [Ou] lógico ( || );**

- **Operador ternário:**

  ```javascript
  // Utilizado para inicializar uma variável
  
  // Ex.:
  let myVar = expressão ? (se true, faça isso...) : (senão, faça isso...);
  
  // Podemos realizar aninhamento, com os operadores ternários
  let myVar = expressão ? (expressão ? (se true, faça isso...) : (senão, faça isso...)) : (senão, faça isso...);
  ```

- **Métodos: propriedades de objetos que possuem como valor, uma função;**

- **Parâmetros que podemos utilizar ao criar funções (a partir do ECMAS2015):**

  - **"Normais";**
  - **Default/Padrão;**
  - **Rest;**

