const myString = "Alex Arruda";

// Descobrindo o tamanho de uma string (quantidade de caracteres)
console.log(myString.length); // 11

// Acessando caracteres (o índice inicial também é o de número zero [0])
console.log(myString[6]); // r

// Buscando uma substring
// Se a substring não pertencer a string, será retornado -1
const mySubString = myString.indexOf("Alex");
console.log(mySubString); // 0 - A substring "Alex", se inicia na posição zero (índice: [0])

// Verificando a existência de uma substring/caractere
// Retorna true se existir e false, caso contrário
console.log(myString.includes("Arruda")); // true

// Convertendo string para letras maiúsculas
console.log(myString.toUpperCase()); // ALEX ARRUDA

// Convertendo string para letras minúsculas
console.log(myString.toLowerCase()); // alex arruda

// Alterando a string
// Passamos a substrig que queremos substituir como primeiro argumento e em seguida passamos a string que desejamos
console.log(myString.replace("Arruda", "Lima")); // Alex Lima