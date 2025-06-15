const alunos = [
  { nome: 'Ana', notas: [8, 9, 7] },
  { nome: 'Bruno', notas: [6, 5, 7] },
  { nome: 'Carla', notas: [9, 9, 10] },
];

const media = alunos.map(nota => (nota.notas[0] + nota.notas[1] + nota.notas[2]) / nota.notas.length)

const mediaTotal = media.reduce(function(total, nota){
    return (total + nota) 
}, 0)
console.log(mediaTotal / alunos.length)