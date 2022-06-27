// As funções são armazenadas em variáveis
// O hoisting não pode ser aplicado em expressões de funções

const squareArea = function calculateSquareArea(side)   {
    const area = side * side;
    return area;
}

console.log(squareArea(4)); // 16