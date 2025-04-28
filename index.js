// Esta es la version 1 del proyecto con operaciones basicas 
const { suma } = require("./operaciones/suma")
const { resta } = require("./operaciones/resta")
const { multi } = require("./operaciones/multiplicacion")
const { divi } = require("./operaciones/division")
const { raiz } = require("./operaciones2/raiz")
//arreglamos los conflictos
// agregamos la resta 
console.log("la suma es: ",suma(7,8))
console.log("la resta es: ",resta(9,8))
console.log("la multiplicacion es ",multi(7,9))
console.log("la division es ",divi(10,2))
console.log()
//operaciones 2
console.log("la raiz cuadrada es ",raiz(9))

