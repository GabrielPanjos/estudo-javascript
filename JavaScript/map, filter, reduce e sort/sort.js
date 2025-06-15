const numeros = [10, 5, 8, 1, 7];

const decrescente = numeros.sort((a, b) => a - b)
console.log(decrescente)

const crescente = numeros.sort((a, b) => b - a)
console.log(crescente)



const produtos = [
  { nome: 'Mouse', preco: 50 },
  { nome: 'Teclado', preco: 80 },
  { nome: 'Monitor', preco: 600 },
  { nome: 'Gabinete', preco: 200 }
];

const produtosCrescente = produtos.sort((a, b) => a.preco - b.preco)
console.log(produtosCrescente)



const nomes = ['Carlos', 'Ana', 'Pedro', 'bruno', 'amanda'];

console.log(nomes.sort())

const nomesDecrescente = nomes.sort((a,b) => b.toLocaleLowerCase().localeCompare(a.toLocaleLowerCase()))
console.log(nomesDecrescente)
