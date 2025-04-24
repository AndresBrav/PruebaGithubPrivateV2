const { suma,resta,multiplicacion, division } = require('./funciones'); // sin extensión .js, así está bien para CommonJS
const {hola,estado, bienvenida} = require('./saludos')

console.log("vamos a ver la suma");
suma(1,2)
console.log("vamos a ver la resta")
resta(8,2)
console.log("vamos a ver la multiplicacion")
multiplicacion(9,9)
console.log("vamos a ver la division")
division(8,4)

hola()
estado()
bienvenida()
