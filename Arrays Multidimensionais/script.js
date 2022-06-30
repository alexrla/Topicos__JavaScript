/*
    - JavaScript não oferece suporte direto aos arrays multidimensionais, porém, podemos trabalhar com eles, os construindo de forma manual (temos uma "array maior" que vai conter outros "arrays menores" - esses "arrays menores", irão representar cada linha da matriz [o array multidimensiona - no nosso caso, veremos mais o bidimensional]);

    - Arrays bidimensionais são coleções de itens, organizados como uma matriz de linhas e colunas (um array de arrays);

    - Os métodos utilizados com "arrays normais" (de uma dimensão), também podem ser utilizados com arrays multidimensionais;
*/

// Exemplo (matriz de três linhas e três colunas):
const myArrayTwoDimensional = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// Para exibir um array bidimensional, podemos utilizar o console.table()
console.table(myArrayTwoDimensional);

// Para acessar um elemento específico do array bidimensional, fazemos: myArrayTwoDimensional[número_da_linha][número_da_coluna]
console.log(myArrayTwoDimensional[0][1]); // 2

// Para percorrermos arrays multidimensionais, usamosloops aninhados (um loop dentro do outro). Por exemplo:
myArrayTwoDimensional.forEach((line, index) => {
    line.forEach((cell, index) => {
        console.log(cell); 
    }); 
});