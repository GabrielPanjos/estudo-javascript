const produtos = [
  { nome: 'Teclado', preco: 80 },
  { nome: 'Mouse', preco: 50 },
  { nome: 'Monitor', preco: 600 },
  { nome: 'Gabinete', preco: 200 },
  { nome: 'Cabo HDMI', preco: 30 }
];

const produtosFiltrados = produtos.filter(produto => produto.preco > 100)

console.log(produtosFiltrados.map(produto => `${produto.nome.toUpperCase()}, ${produto.preco}`))