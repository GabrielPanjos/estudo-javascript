const alunos = [
  { nome: "Ana", nota: 8.5, presente: true, tempoAssistido: 130 },
  { nome: "Bruno", nota: 6.8, presente: false, tempoAssistido: 40 },
  { nome: "Carla", nota: 9.2, presente: true, tempoAssistido: 200 },
  { nome: "Daniel", nota: 4.5, presente: true, tempoAssistido: 60 },
  { nome: "Eva", nota: 7.8, presente: false, tempoAssistido: 10 },
  { nome: "Felipe", nota: 10, presente: true, tempoAssistido: 180 }
];

let aluno = 0

const carregarAluno = setInterval(() => {
  console.log(`🔄 Carregando dados do aluno: ${alunos[aluno].nome}`)
  aluno++

  if (alunos.length == aluno) {
    console.log('\n✅ Todos os alunos foram processados!\n')
    setTimeout(() => {
      const alunosPresentes = alunos.filter(alunoPresente => alunoPresente.presente == true)
      alunosPresentes.sort((a, b) => b.nota - a.nota)

      console.log('📋 Alunos presentes por nota:')
      alunosPresentes.forEach(aluno => {
        console.log(`- ${aluno.nome} (${aluno.nota})`)
      })

      const notasGeral = alunos.reduce((media, nota) => {
        return media + nota.nota
      }, 0)
      console.log(`\n📈 Média geral das notas: ${notasGeral / alunos.length}\n`)

      console.log(`🕒 Alunos com mais de 120 minutos assistidos:`)
      const alunosMaisAssistidos = alunos.filter(aluno => aluno.tempoAssistido > 120)
      alunosMaisAssistidos.forEach(aluno => {
        console.log(`- ${aluno.nome}`)
      })

      console.log(`\n📢 Mensagens:`)
      const alunoAprovado = alunos.map(aluno => {
        if (aluno.nota >= 7 & aluno.tempoAssistido >= 100) {
          console.log(`- ${aluno.nome}: Aprovado`)
        } else {
          console.log(`- ${aluno.nome}: Reprovado`)
        }
      })
    }, 2000);

    clearInterval(carregarAluno)
  }
}, 1000);