// Esta es la version 1 del proyecto con operaciones basicas 
const { suma } = require("./operaciones/suma")
const { resta } = require("./operaciones/resta")
const { multi } = require("./operaciones/multiplicacion")
const { divi } = require("./operaciones/division")
const { raiz } = require("./operaciones2/raiz")
const { potencia } = require("./operaciones2/potencia")
const { logaritmo } = require("./operaciones2/logaritmoNatural")
const {logB2} = require('./operaciones2/logaritmoBase2')
const { redondearNumero } = require("./operaciones3/redondeo")
//arreglamos los conflictos
// agregamos la resta 
console.log("la suma es: ",suma(7,8))
console.log("la resta es: ",resta(9,8))
console.log("la multiplicacion es ",multi(7,9))
console.log("la division es ",divi(10,2))
console.log()
//operaciones 2
console.log("la raiz cuadrada es ",raiz(9))
console.log("la potencia es",potencia(6,2))
console.log("el logaritmo natural es",logaritmo(10))
console.log("el logaritmo de base 2 es",logB2(8))

//operaciones 3
console.log("el redondeo es ",redondearNumero(81.6))

