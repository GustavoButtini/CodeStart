// 1. Guarde em uma variável a soma de todos os valores contidos na lista "numeros", e logue-a no console.

const numeros = [3, 4, 6, 8];
const numbers = numeros.reduce((acc, num) => {
  return acc + num;
}, 0);
console.log(numbers);
// 2. Guarde em uma variável uma string que contenha todos os valores da lista "letras", e logue-a no console.

const letras = ["a", "b", "c", "d"];
const letters = letras.reduce((acc, letter) => {
  return acc + letter;
});
console.log(letters);
// 3. Guarde em uma variável a soma das idades de todas as pessoas que votaram (votou = true), e logue-a no console.

const pessoas = [
  { nome: "Bob", idade: 30, votou: true },
  { nome: "Jake", idade: 32, votou: true },
  { nome: "Kate", idade: 25, votou: false },
  { nome: "Sam", idade: 20, votou: false },
  { nome: "Phil", idade: 21, votou: true },
  { nome: "Ed", idade: 55, votou: true },
  { nome: "Tami", idade: 54, votou: true },
  { nome: "Mary", idade: 31, votou: false },
  { nome: "Becky", idade: 43, votou: false },
  { nome: "Joey", idade: 41, votou: true },
  { nome: "Jeff", idade: 30, votou: true },
  { nome: "Zack", idade: 19, votou: false },
];
const people = pessoas.reduce((acc, people) => {
  if (people.votou === true) {
    return acc + people.idade;
  } else {
    return acc;
  }
}, 0);
console.log(people);
// 4. Guarde em uma variável a soma dos preços de todos os produtos na nossa lista de desejos, e logue-a no console.

const listaDeDesejos = [
  { titulo: "Tesla Model S", preco: 90000 },
  { titulo: "MacBook Pro", preco: 45000 },
  { titulo: "Outro Tesla Model S", preco: 5 },
  { titulo: "Carro de Fórmula 1", preco: 2000 },
  { titulo: "Outro Carro de Fórmula 1", preco: 90000 },
];
const wishlist = listaDeDesejos.reduce((acc, wish) => {
  return acc + wish.preco;
}, 0);
console.log(wishlist);
