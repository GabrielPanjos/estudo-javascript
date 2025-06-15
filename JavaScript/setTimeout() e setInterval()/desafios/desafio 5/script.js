let margin = 10

let intervalo = setInterval(() => {
    margin += 10
    let margem = `${margin}px`
    document.querySelector('div').style.marginLeft = margem

    if (margin == 300){
        clearInterval(intervalo)
    }
}, 100);

