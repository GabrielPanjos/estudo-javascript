function iniciar() {
    cronometro = setInterval(() => {
        const iniciar = document.getElementById('tempo').innerHTML
        let soma = parseInt(iniciar) + 1
        document.getElementById('tempo').innerHTML = soma

    }, 1000);
}

function parar() {
    clearInterval(cronometro)
}