/*      Variables y Tipos de Datos
let (variable reasignable), const (constante), var (evitar en ES6+).
Tipos primitivos: string, number, boolean, null, undefined.     */

// Declaraciones
let nombre = "Carlos";  // String
const edad = 30;        // Number 
let esProgramador = true; // Boolean
let direccion = null;   // Null (valor nulo intencional)
let telefono;           // Undefined (no definido)

// Uso práctico
console.log(`Hola, ${nombre}. Tienes ${edad} años.`); // Template literals
console.log(typeof direccion); // "object" (¡cuidado con este comportamiento!)


/*      Operadores y Estructuras de Control
Operadores: aritméticos (+, -, *, /), comparación (==, ===, !=, !==), lógicos (&&, ||, !).
Condicionales: if/else, switch, operador ternario.  */

// Operadores
let precio = 100;
let descuento = precio > 50 ? precio * 0.9 : precio; // Ternario

// Condicionales
if (edad >= 18) {
  console.log("Mayor de edad");
} else {
  console.log("Menor de edad");
}

// Switch
switch (new Date().getDay()) {
  case 0: console.log("Domingo"); break;
  case 1: console.log("Lunes"); break;
  default: console.log("Otro día");
}


/*      Funciones
Declaración vs expresión.
Parámetros y argumentos.
Scope (alcance) y return. */

// Declaración
function saludar(nombre) {
  return `¡Hola, ${nombre}!`;
}

// Expresión (arrow function ES6+)
const sumar = (a, b) => a + b;

// Uso
console.log(saludar("Ana")); // "¡Hola, Ana!"
console.log(sumar(5, 3));    // 8


/*      Arrays y Objetos
Métodos de arrays: push(), pop(), map(), filter().
Objetos literales: propiedades y métodos. */

// Array
let frutas = ["manzana", "pera"];
frutas.push("naranja"); // Añade al final
let frutasFiltradas = frutas.filter(fruta => fruta.length > 4);

// Objeto
let usuario = {
  nombre: "Luisa",
  edad: 25,
  saludar: function() {
    return `Hola, soy ${this.nombre}`;
  }
};
console.log(usuario.saludar()); // "Hola, soy Luisa"


/*      Bucles
for, while, do...while.
Iteración sobre arrays: for...of. */

// For clásico
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// For...of (arrays)
let numeros = [10, 20, 30];
for (let num of numeros) {
  console.log(num); // 10, 20, 30
}

// While
let contador = 0;
while (contador < 3) {
  console.log(contador); // 0, 1, 2
  contador++;
}

