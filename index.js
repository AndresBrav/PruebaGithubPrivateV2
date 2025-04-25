const { multi } = require("./operaciones/multiplicacion")
const { suma } = require("./operaciones/suma")
const { resta } = require("./operaciones/resta")

console.log("la suma es: ",suma(7,8))
console.log("la resta es: ",resta(9,8))
console.log("la multiplicacion es ",multi(7,9))

