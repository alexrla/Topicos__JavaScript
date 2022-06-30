const myArray = ["Leandro", "Bianca", "Theo", "Vanda"];

// Retorna o índice do elemento informado
console.log(myArray.indexOf("Leandro")); // 0

// Se o elemento não existir, retorna -1
console.log(myArray.indexOf("leandro")); // -1

// Retorna uma nova string, modificada a partir de um separador
console.log(myArray.join(" - ")); // Leandro - Bianca - Theo - Vanda

// Removendo o último elemento
myArray.pop();
console.log(myArray); // [ 'Leandro', 'Bianca', 'Theo' ]

// Removendo o primeiro elemento
myArray.shift();
console.log(myArray); // [ 'Bianca', 'Theo' ]

// Alterando um elemento do array
myArray[0] = "Leandro";
console.log(myArray); // [ 'Leandro', 'Theo' ]

// Adicionando um elemento no final do array
// Podemos adicionar mais de um elemento. Ex.: myArray.push("Elemento1", "Elemento2", ...);
myArray.push("Vanda");
console.log(myArray); // [ 'Leandro', 'Theo', 'Vanda' ]

// Adicionando um elemento no começo do array
// Podemos adicionar mais de um elemento. Ex.: myArray.unshift("Elemento1", "Elemento2", ...);
myArray.unshift("Alex");
console.log(myArray); // [ 'Alex', 'Leandro', 'Theo', 'Vanda' ]

// Verificando se um elemento está contido em alguma coleção (string, array, ...)
console.log(myArray.includes("Leandro")); // true

// Verificando se o elemento termina com o valor que foi passado
const { 0: name } = myArray;
console.log(name.endsWith("dro")); // false

// Verificando se o elemento começa com o valor que foi passado
const { 1: secondName } = myArray;
console.log(secondName.startsWith("th")); // false

// Verifica se existe, pelo menos um, que atende ao passado
console.log(myArray.some(name => name === "Theo")); // true
console.log(myArray.some(name => name === "Bianca")); // false

// Verifica se todos os elementos atendem ao valor passado
const persons = [
    {name: "Leandro", age: 31},
    {name: "Theo", age: 0.7}
];

console.log(persons.every(person => person.age >= 18)); // false

// Removendo um intervalo de elementos  .splice(índice_inicial, quantidade)
myArray.splice(0, 1);
console.log(myArray); // [ 'Leandro', 'Theo', 'Vanda' ]

let myNewArray = [5, 4, 3, 2, 1];

// Ordenando um array (strings são ordenadas na ordem alfabética)
myNewArray = myNewArray.sort();
console.log(myNewArray); // [ 1, 2, 3, 4, 5 ]

// Ordenando na ordem inversa
myNewArray = myNewArray.reverse();
console.log(myNewArray); // [ 5, 4, 3, 2, 1 ]

// Gerando um novo array [.map() - mapeia um array de origem e gera um novo array]
myNewNumbers = myNewArray.map(number => number * number);
console.log(myNewNumbers); // [ 25, 16, 9, 4, 1 ]

// Filtrando os elementos de um array [.filter() - filtra os elementos de um array e gera um novo array, com os elementos que passaram na condição - se a função retornar false, o elemento é ignorado e se retornar true, o elemento é adicioando]
myNewArrayOfNumbers = myNewNumbers.filter(number => number % 2 === 0);
console.log(myNewArrayOfNumbers); // [ 16, 4 ]

// Pegando o primeiro elemento do array, que satisfaz a uma condição [.find()]
// O .findIndex(), retorna o índice do primeiro elemento do array que satisfaz a condição
myElement = myNewNumbers.find(number => number % 2 === 0);
console.log(myElement); // 16

myIndex = myNewNumbers.findIndex(number => number % 2 === 0);
console.log(myIndex); // 1