const despesas = [
  { tipo: 'alimentação', valor: 250 },
  { tipo: 'transporte', valor: 120 },
  { tipo: 'alimentação', valor: 90 },
  { tipo: 'lazer', valor: 300 },
  { tipo: 'alimentação', valor: 160 }
];

const alimentacao = despesas.filter(tipo => tipo.tipo == 'alimentação')

const gastoTotal = alimentacao.reduce(function(total, valor){
    return total + valor.valor
}, 0)
console.log(gastoTotal)