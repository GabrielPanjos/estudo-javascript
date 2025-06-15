let contagem = 30

const intervalo = setInterval(() => {
    console.log(contagem)
    contagem--

    if (contagem == 0) {
        clearInterval(intervalo)
    }

}, 1000);