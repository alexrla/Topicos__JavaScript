const person = {
    name: "Beatriz",
    age: 22,
    details: {
        eyesColor: "Verde",
        hairColor: "Castanho"
    }
};

// Keys() - retorna um array de strings que representa as chaves de cada propriedade
const keysPerson = Object.keys(person);
console.log(keysPerson); // [ 'name', 'age', 'details' ]

// Values() - retorna um array com os valores de cada propriedade
const valuesPerson = Object.values(person);
console.log(valuesPerson); // [ 'Beatriz', 22, { eyesColor: 'Verde', hairColor: 'Castanho' } ]

// Entries() - retorna um array, cujo os elementos, também são arrays, correspondentes aos pares [chave: valor]
const entriesPerson = Object.entries(person);
console.log(entriesPerson); // [ [ 'name', 'Beatriz' ], [ 'age', 22 ], [ 'details', { eyesColor: 'Verde', hairColor: 'Castanho' } ] ]

// Assign() - copia as propriedes de um objetos de origem, para um objeto de destino
const assingPerson = Object.assign(person);
console.log(assingPerson); // { name: 'Beatriz', age: 22, details: { eyesColor: 'Verde', hairColor: 'Castanho' } }