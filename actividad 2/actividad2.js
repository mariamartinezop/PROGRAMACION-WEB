//TAREA SCOPE
console.log("=== TAREA 1: Scope ===");

const nombre = "Luchi";
console.log("Nombre:", nombre);


if (true) {
  var contador = 50;
  console.log(contador);
}
// 'var' se puede usar fuera del bloque
console.log(contador);

if (true) {
  let mensaje = "Variable de bloque";
  console.log(mensaje);
}
// 'let' solo existe dentro del bloque, si lo usás afuera da error

// TAREA CREAR OBJETO
const productosInventario = Object();

for (i=1; i <= 5; i++) {
  let producto = "producto_" + i
  productosInventario[producto] = i*10
}

console.log(productosInventario);

// TAREA RECORRER EL OBJETO
let producto = Object.entries(productosInventario)

producto.forEach(([producto, valor]) =>{
  console.log(`El producto ${producto} tiene un stock de ${valor}.`)
})
