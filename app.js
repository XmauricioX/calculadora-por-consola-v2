/*
--------------------------------------------------------------------------------------------------

    COMO USAR
        En la consola hayr que poner node app.js operacion numero1 numero2
    se reemplaza operacion por suma, resta, etc y los numeros 1 y 2 por cualquier valor numerico

--------------------------------------------------------------------------------------------------
*/
let process = require("process");
let operaciones = require ("./operaciones");

let operacion = process.argv[2];
let num1 = process.argv[3];
let num2 = process.argv[4];

switch (operacion) {
    case "sumar":
        console.log();
        console.log("El resultado es: " + operaciones.sumar(num1,num2));
        break;
    case "restar":
        console.log();
        console.log("El resultado es: " + operaciones.restar(num1,num2));
        break;
    case "multiplicar":
        console.log();
        console.log("El resultado es: " + operaciones.multiplicar(num1,num2));
        break;
    case "dividir":
        console.log();
        console.log("El resultado es: " + operaciones.dividir(num1,num2));
        break;
    default:
        break;
}
