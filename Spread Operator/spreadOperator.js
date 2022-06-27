/*
    O que ele faz?
        - Adiciona elementos de um array/objeto, em
        um outro array/objeto;
*/

// Com array
const firstNumbers = [1, 2, 3];

const numbers = [...firstNumbers, 4, 5, 6];
console.log(numbers); // [ 1, 2, 3, 4, 5, 6 ]

// Com objetos
const person = {
    name: "Bianca",
    age: 28
};

const moreInformation = {
    ...person,
    job: "Contadora",
}
console.log(moreInformation); // { name: 'Bianca', age: 28, job: 'Contadora' }