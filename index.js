const { suma,resta } = require('./funciones'); // sin extensión .js, así está bien para CommonJS

console.log("este es el cambio que vamos a hacer");
console.log("este es otro cambio 2");

console.log("este cambio marcará un error (no debería ahora)");
suma(1,2)
resta(8,2)
console.log("intentaremos subir a main ")
console.log("intentaremos subir a main x2 ")
console.log("intentaremos subir a main x3 ")
