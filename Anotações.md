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
  
- **Formas de criar um array:**

  ```javascript
  // Forma 1
  const myArray = [1, 2, 3, 4, 5];
  
  // Forma 2
  const myArrayTwo = Array(1, 2, 3, 4, 5);
  
  // Forma 3
  const myArrayThree = new Array(1, 2, 3, 4, 5);
  ```

- **O índice inicial de um array, é o índice de número zero ( `0` );**

- **O índice do último elemento do array, é sempre o tamanho dele, menos um: `tamanho_do_array = array.length - 1`;**

- **Podemos adicionar um elemento em um array, através do índice daquele elemento:**

  ```javascript
  const myArray = [];
  
  myArray[0] = 1; // myArray = [1]
  ```

- **Para trocar o elemento de um array, também podemos fazer isso através do índice:**

  ```javascript
  const myArray = [1, 2, 3];
  
  myArray[0] = 4; // myArray = [4, 2, 3]
  ```

- **Propriedades de arrays, são informações verificadas de um valor (por exemplo, a propriedade _length_, que nos dá o tamanho do array, quantidade de elementos);**

- **Método de arrays, são funções prontas, utilizadas para realizar operações em arrays;**

- **Para chamar uma propriedade de um array/um método, usamos a notação de ponto (em métodos, adicionamos um par de parêntes após o nome do método);**

- **Os métodos de arrays: `.pop`, `.shift` e `.splice`, retornam os elementos removidos (podemos atribuir a variáveis, a fim de pegar esses elementos removidos);**

- **Para pegar um elemento aleatório em um array, usamos o objeto _Math_ (objeto utilizado para realizar operações matemáticas em números), que nos disponibiliza o método _random()_, que retorna um número aleatório entre 0 e 1 (incluindo o 0, mas nunca incluind o 1). Com isso, utilizamos o `Math.random()`, em conjunto com o `Math.floor()`, que arredonda o número para baixo. Outro fato é que, se quisermos retornar um número aleatório entre 0 e qualquer outro número, devemos fazer: `Math.floor(Math.random() * outro_numero)`. Agora, sabendo gerar um número aleatório, podemos passar esse número como índice e assim, pegar um elemento aleatório do array;**

- **Variações do for (e aplicação em arrays):**

  - **Tradicional;**

    ```javascript
    const myArray = ["elemento1", "elemento2", "elemento3"];
    
    for(let i; i < myArray.length; i++)	{
        console.log(myArray[i]);
    }
    ```

  - **For IN (Não recomendado a sua utilização com arrays);**

    ```javascript
    const myArray = ["elemento1", "elemento2", "elemento3"];
    
    // Define cada índice do array, para uma variável definida
    for(let i in myArray)	{
        console.log(myArray[i]);
    }
    ```

  - **For OF;**

    ```javascript
    const myArray = ["elemento1", "elemento2", "elemento3"];
    
    // Define cada elemento do array, para uma variável definida
    for(let element of myArray)	{
        console.log(element);
    }
    ```

  - **For EACH;**

    ```javascript
    const myArray = ["elemento1", "elemento2", "elemento3"];
    
    // Percorre o array, passando por cada elemento, podendo resgatar o seu valor e o seu índice
    myArray.forEach((element, index) => {
       	console.log(element);
        console.log(`Element[${index}]: ${element}`);
    });
    ```

  - **For OF x For EACH (estruturas bastantes úteis, para se percorrer arrays):**

    - **Nos casos onde não necessitamos do índice, onde não precisemos interromper o ciclo e até mesmo para um melhor desempenho, usamos o _For OF_ (o _For Each_ pode ser utilizado quando necessitamos do índice);**

- **Forma de se criar um objeto:**

  - **Notação literal (forma comum de se criar um objeto);**
  - **Object.create;**
  - **Construtor Object();**
  

- **Para editar o atributo/método de um objeto, fazemos: **

  ```javascript
  // Editando atributo 
  nome_do_objeto.atributo_existente = "novo_valor";
  
  // Editando método (sobrescrevendo)
  nome_do_objeto.método_existente = function()	{
      // Novas instruções...
  };
  ```

- **Em objetos, quando tentamos acessar um atributo inexistente, é retornado `undefined`;**

- **Percorrendo objetos (utilizando o For OF):**

  ```javascript
  const myObject = {
  	propertyOne: "valueOne",
      propertyTwo: "valueTwo"
      .
      .
      .
  };
  
  for(const [key, value] of Object.entries(myObject))	{
      console.log(`${key}: ${value}`);
  }
  ```

- **Percorrendo strings:**

  - **For Tradicional;**

    ```javascript
    const myString = "Minha String";
    
    // Oferece mais desempenho, só que menos legibilidade
    
    // Recuperando o índice (semelhante ao indexOf)
    const letter = "a";
    let index;
    
    function myIndexOf(myString, letter)	{
        for(let i; i < myString.length; i++)	{
            if(myString[i] === letter)	{
                return i;
            }
    	}
        // Indicando que aquele caractere não existe na string 
        return -1;
    }
    
    index = myIndexOf(myString, letter);
    
    
    // Verificando se a substring/letra existe na string (semelhante ao includes)
    const letter = "a";
    let exists;
    
    function myIncludes(myString, letter)	{
        for(let i; i < myString.length; i++)	{
            if(myString[i] === letter)	{
                return true;
            }
    	}
        // Indicando que aquele caractere/substring não existe na string
        return false;
    }
    
    exists = myIndexOf(myString, letter);
    ```

  - **For IN (Não recomendado a sua utilização com arrays);**

    ```javascript
    const myString = "Minha String";
    
    // Oferece menos desempenho, só que mais legibilidade
    
    // Recuperando o índice (semelhante ao indexOf)
    const letter = "a";
    let index;
    
    function myIndexOf(myString, letter)	{
        for(let i in myString)	{
            if(myString[i] === letter)	{
                return i;
            }
    	}
        // Indicando que aquele caractere não existe na string 
        return -1;
    }
    
    index = myIndexOf(myString, letter);
    
    
    // Verificando se a substring/letra existe na string (semelhante ao includes)
    const letter = "a";
    let exists;
    
    function myIncludes(myString, letter)	{
        for(let i in myString)	{
            if(myString[i] === letter)	{
                return true;
            }
    	}
        // Indicando que aquele caractere/substring não existe na string
        return false;
    }
    
    exists = myIndexOf(myString, letter);
    ```

  - **For OF;**

    ```javascript
    const myString = "Minha String";
    
    // Oferece mais legibilidade, só que contamos com a ausência dos índices (logo, não podemos recuperar o índice - fazer algo semelhante ao indexOf)
    
    // Verificando se a substring/letra existe na string (semelhante ao includes)
    const letter = "a";
    let exists;
    
    function myIncludes(myString, letter)	{
        for(let currentLetter of myString)	{
            if(currentLetter === letter)	{
                return true;
            }
    	}
        // Indicando que aquele caractere/substring não existe na string
        return false;
    }
    
    exists = myIndexOf(myString, letter);
    ```

  - **For EACH;**

    ```javascript
    const myString = "Minha String";
    
    // Oferece mais padronização, mas peca no desempenho, já que o loop não para (não conseguimos interromper o loop, aplicando um break ou um return, por exemplo), ou seja, mesmo encontrando aquilo que buscamos, iremos percorrer toda a string
    
    // Verificando os espaços em branco de uma string, através do For EACH
    function countSpaces(myString)	{
        let count = 0;
        
        // O split vai transformar a string em um array
        myString.split(" ").forEach((letter) => {
            if(letter === " ")	{
                count += 1;
            }
        });
        
        return count;
    }
    
    let myCount = countSpaces(myString);
    ```

- **Desestruturação / Destructuring (arrays e objetos):**

  - **Sintaxe:**

    - ```javascript
      // Arrays
      
      // Sintaxe
      const [ variavel1, variavel2, ... ] = meuArray;
      
      // Exemplo
      const myArray = ["value1", "value2", ...];
      
      const [ valueOne, valueTwo, ...] = myArray;
      ```

    - ```javascript
      // Objetos
      
      // Sintaxe
      const { propriedade }= meuObjeto;
      
      // Exemplo
      const myObject = {
      	propertyOne: "valueOne",
          propertyTwo: "valueTwo", 
          .
          .
          .
      };
      
      // Os nomes das variáveis devem ser iguais aos das propriedades/atributos do objeto
      const { propertyOne, propertyOne, ... } = myObject;
      
      // Objetos Aninhados
      
      // Sintaxe
      const { propriedade: {propriedades_objeto_aninhado} }= meuObjeto;
      
      // Exemplo
      const myObject = {
      	propertyOne: "valueOne",
          propertyTwo: "valueTwo", 
          .
          propertyN: {
          	property1: "value1",
          	property2: "value2", 
      	},
          .
          .
      };
      
      // Os nomes das variáveis devem ser iguais aos das propriedades/atributos do objeto
      const { propertyN: { property1 }} = myObject;
      console.log(property1); // value1
      ```



