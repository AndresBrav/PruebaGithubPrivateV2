const { suma } = require("./operaciones/suma")
// const { resta } = require("./operaciones/resta")
const { multi } = require("./operaciones/multiplicacion")
const { divi } = require("./operaciones/division")
//arreglamos los conflictos
console.log("la suma es: ",suma(7,8))
// console.log("la resta es: ",resta(9,8))
console.log("la multiplicacion es ",multi(7,9))
console.log("la division es ",divi(10,2))

