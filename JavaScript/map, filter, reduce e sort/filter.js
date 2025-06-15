const numeros = [2, 4, 5, 7, 10];

const filtro = numeros.filter(numero => numero > 6)
console.log(filtro)

const aoQuadrado = numeros.map(numero => (
    numero ** 2
))
console.log(aoQuadrado)

const soma = numeros.reduce(function (total, numero){
    return total + numero
}, 0)
console.log(soma)