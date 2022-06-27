// Função de seta / Função seta

const rectangleArea = (base, height) => {
    const area = base * height;
    return area;
}

console.log(rectangleArea(12, 10)); // 120

// Quando temos somente um parâmetro, não é necessário os parênteses
// E quando temos somente uma instrução, não precisamos das chaves e também não precisamos da palavra-chave return (fica implícito que aquele valor será retornado)

const squareArea = side => side * side;


console.log(squareArea(8)); // 64