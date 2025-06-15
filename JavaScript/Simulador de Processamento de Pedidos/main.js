const pedidos = [
    { id: 1, cliente: "Ana", valor: 250, status: "pendente" },
    { id: 2, cliente: "Bruno", valor: 120, status: "pendente" },
    { id: 3, cliente: "Carla", valor: 800, status: "pendente" },
    { id: 4, cliente: "Daniel", valor: 320, status: "pendente" },
    { id: 5, cliente: "Eva", valor: 150, status: "pendente" }
];

let pedido = 0

const processar = setInterval(() => {

    pedidos[pedido].status = "processado"
    console.log(pedidos[pedido])
    pedido++

    if (pedido == (pedidos.length)) {
        console.log(`\nPedidos processados com sucesso!\n`)

        setTimeout(() => {
            console.log('Clientes por valor:')
            console.log(pedidos.sort((a, b) => a.valor - b.valor))

            console.log(`\nTotal arrecadado: R$${pedidos.reduce((total, valor) => {
                return total + valor.valor
            }, 0)}\n`)

            console.log(pedidos.filter(pedido => pedido.valor > 300))

            console.log(`\nMensagens:`)
            console.log(pedidos.map(pedido => `- Obrigado, ${pedido.cliente}, pelo seu pedido de R$${pedido.valor}`))
        }, 200);

        clearInterval(processar)
    }
}, 200);



