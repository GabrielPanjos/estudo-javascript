let i = 1

const intervalo = setInterval(() => {
    console.log(i)
    i++

    if (i > 10) {
        clearInterval(intervalo)
    }
}, 1000);