const funcionarios = [
    { nome: 'Ana', salario: 3000, ativo: true, setor: 'TI' },
    { nome: 'Bruno', salario: 2500, ativo: false, setor: 'RH' },
    { nome: 'Carla', salario: 4000, ativo: true, setor: 'TI' },
    { nome: 'Daniel', salario: 2800, ativo: true, setor: 'Financeiro' },
    { nome: 'Eva', salario: 5000, ativo: false, setor: 'TI' },
    { nome: 'Felipe', salario: 3200, ativo: true, setor: 'RH' },
];

const funcionariosAtivos = funcionarios.filter(funcionario => funcionario.ativo & funcionario.setor === 'TI')
console.log(funcionariosAtivos)

const salarioDecrescente = funcionariosAtivos.sort((a, b) => b.salario - a.salario)
console.log(salarioDecrescente)

const novosFuncionarios = funcionariosAtivos.map(funcionario => `${funcionario.nome}, ${funcionario.salario}`)
console.log(novosFuncionarios)

const mediaSalarial = funcionariosAtivos.reduce(function (total, salario) {
    return total + salario.salario
}, 0)
console.log(mediaSalarial / funcionariosAtivos.length)