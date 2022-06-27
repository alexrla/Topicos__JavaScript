// Passando os parâmetros de forma normal
function calculateAverage(numberOne, numberTwo)  {
    return (numberOne + numberTwo) / (calculateAverage.length);
}

console.log(calculateAverage(2, 3)); // 2.5

// Parâmetros padrões
// Se quando chamarmos a função, não passarmos um dos argumentos, ou nenhum, os valores padrões serão usados (no nosso exemplo: 1, 5 e 9)
// Se passarmos os argumentos, ao invés desses valores padrões, os valores contidos nos argumentos é que serão utilizados
function sumOfNumbers(numberOne = 1, numberTwo = 5, numberThree = 9)  {
    return numberOne + numberTwo + numberThree;
}

console.log(sumOfNumbers()); // 15
console.log(sumOfNumbers(10)); // 24
console.log(sumOfNumbers(10, 8)); // 27
console.log(sumOfNumbers(10, 5, 6)); // 21

// Parâmetros rest
// Transforma um número indeterminado de parâmetros, em uma lista
function showNumbers(...numbers)    {
    console.log(numbers); 
}

showNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9); // [1, 2, 3, 4, 5, 6, 7, 8, 9]