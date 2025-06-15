const numeros = [5, 11, 90, 26, 72]

const par = (n) => {
    if (n % 2 == 1) {
        return null;
    } else {
        return n
    }
}

const dobrar = numeros.map(numero => numero * 2)
const pares = numeros.filter(numero => (par(numero)))

console.log(pares)