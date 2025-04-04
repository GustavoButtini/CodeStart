// 1. Assinale uma variável pra cada valor na lista "numeros" utilizando Destructuring, e logue-as no console.

const numeros = [1, 2, 3, 4, 5];
const [v1, v2, v3, v4, v5] = numeros;
console.log(v1, v2, v3, v4, v5);
// 2. Inverta os valores das variáveis "a" e "b". Transforme o valor da variável "a" no valor da variável "b" e vice-versa, e logue-as no console.

let a = 5;
let b = 10;

[a, b] = [b, a];
console.log(a, b);

// 3. Crie uma nova lista baseando-se na "melhoresSeriesDoMundo" adicionando dois novos valores a ela utilizando o Spread Operator, e logue-a no console.

const melhoresSeriesDoMundo = ["GOT", "Breaking Bad", "Vikings"];
const m2 = ["Harry Potter", "Power Rangers", ...melhoresSeriesDoMundo];
console.log(m2);
// 4. Assinale os dois primeiros valores da lista "sobremesas" a duas variáveis, e distribua o restante em apenas uma, utilizando o Spread Operator, e logue-as no console.

const sobremesas = [
  "Sorvete",
  "Petit Gateau",
  "Açai",
  "Pudim",
  "Mousse de Maracujá",
];
let [s1, s2, ...s3] = sobremesas;
console.log(s1, s2, s3);
