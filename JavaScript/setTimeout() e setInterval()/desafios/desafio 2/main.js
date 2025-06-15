

setInterval(() => {

    let data = new Date()

    let hora = data.getHours()
    let minuto = data.getMinutes()
    let segundos = data.getSeconds()

    setTimeout(() => {
        console.log(`Horário altual: ${hora}:${minuto}:${segundos}`)
    }, 1000)
}, 1000)