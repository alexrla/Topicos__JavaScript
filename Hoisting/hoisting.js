/*
    - Comportamento no qual chamamos uma função/variável, antes mesmo de declará-las;
*/

console.log(calculateAverage(2, 3, 4)); // 3

function calculateAverage(numberOne, numberTwo, numberThree) {
    const average = (numberOne + numberTwo + numberThree) / (calculateAverage.length);
    return average
}