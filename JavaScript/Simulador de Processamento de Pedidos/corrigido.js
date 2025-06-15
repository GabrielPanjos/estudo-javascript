const pedidos = [
    { id: 1, cliente: "Ana", valor: 250, status: "pendente" },
    { id: 2, cliente: "Bruno", valor: 120, status: "pendente" },
    { id: 3, cliente: "Carla", valor: 800, status: "pendente" },
    { id: 4, cliente: "Daniel", valor: 320, status: "pendente" },
    { id: 5, cliente: "Eva", valor: 150, status: "pendente" }
];

let i = 0;

const processar = setInterval(() => {
    pedidos[i].status = "processado";
    console.log(pedidos[i]);
    i++;

    if (i === pedidos.length) {
        clearInterval(processar);
        console.log(`\nPedidos processados com sucesso!\n`);

        setTimeout(() => {
            // 1. Ordenar
            const ordenados = [...pedidos].sort((a, b) => b.valor - a.valor);
            console.log("Clientes por valor:");
            ordenados.forEach(p => console.log(`- ${p.cliente} - R$${p.valor}`));

            // 2. Soma total
            const total = pedidos.reduce((acc, pedido) => acc + pedido.valor, 0);
            console.log(`\nTotal arrecadado: R$${total}\n`);

            // 3. Filtrar pedidos altos
            console.log("Pedidos acima de R$300:");
            pedidos.filter(p => p.valor > 300).forEach(p => console.log(`- ${p.cliente}`));

            // 4. Mensagens
            console.log("\nMensagens:");
            pedidos.map(p => {
                const valorFormatado = p.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                console.log(`- Obrigado, ${p.cliente}, pelo seu pedido de ${valorFormatado}!`);
            });
        }, 2000);
    }
}, 2000);
