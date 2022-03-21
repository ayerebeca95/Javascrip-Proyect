/*let num1 = 4;
let num2 = 6;

let result = num1 + num2;

console.log(num1 + num2)
console.log(result);*/

//document.write("<h1> Hello World </h1>");



/*// TIPOS DE DATOS
"Hello World" // String


// NUMBER
10000
-2.3

// BOOLEAN
true
false

// ARRAY
["joe", "ryan", "marta"]
[1, 2, 3]

// OBJECT
"ryan"
70.4
14
true*/

//console.log({"username":"ryan", //todo esto se ve en console de la wed con f12
//"score": 70.4});

// Estoy creando variables
/*var nameuser = "john";
let lastname = "carter";

// reasignando el valor de la variable nameuser
nameuser = 'pepe';


const PI = 3.1415;

console.log(PI)

// camelcase
let useerName = 'gordon';*/

/*let numberOne = 60;
let numberTwo = 100;
let result = numberOne + numberTwo;

console.log(result);*/


/*let name = 'John'
let lastname = 'Carter';

let completeName = name + lastname;

console.log(completeName);*/

// Tipos de datos:
//undefined, null, boolean, srting, symbol, number y object.

/*var estaciones = ["Verano", "invierno", "otoño", "Primavera"];
estaciones.push("amormio");
console.log(estaciones)

// Apenas actuaalizas la pagina aparece arriba en cuadrado para completar algo
var respuesta = prompt ("Escribe un numero mayor que 5", "7");
if(respuesta>5) {
alert("Excelente respuesta Mariano lindo");

}*/

/*let hijoEstudia = true;
if(hijoEstudia){
    console.log("pudes salir a jugar");
}
else {
    console.log("No puedes salir a Jugar");
}*/


/*let edad = prompt("Ingrese su edad");

if(edad >= 18){
    alert("Puedes ingresar, en instantes se cargara la información")
}
else {
    alert("No puedes ingresar");
}
*/


/*let nombreIngresado = prompt("Nombre del paciente");
let apellidoIngresado= prompt("Apellido del paciente");

if((nombreIngresado == "Carla") || (apellidoIngresado == "Lopez")){
alert("Nombre: " + nombreIngresado +  "  Apellido: " + apellidoIngresado);
}
else {
    alert ("Error: Ingresar Nombre y Apellido Válido del Paciente");
}*/

// SE MUESTRA DEL 0 AL 10 EN LA CONSOLA
/*for(let i = 0; i < 10; i++){
    console.log(i); // SI PONGO alert(i); me apareceraa en la pagina
}*/


// En cada repeticion, calculamos el numero ingresado x el numero (i)

/*let ingresarNumero = parseInt(prompt("Ingresar Numero"));
for (let i = 1; i <= 10; i++){
    let resultado = ingresarNumero * i ;
    alert(ingresarNumero + " X " + i + " = " + resultado);
} */



 //CICLOS CON DO WHILE
 //do{

 //}while();

 /*let repetir = false;

 while(repetir){
     console.log("Solo una vez");
 }*/

/*do {
    numero = "ingresar numero"
   console.log("hola")
}*/

/*let entrada = prompt("ingresar Nombre");

while(entrada != "ESC") {
    switch (entrada){
        case "ANA":
            alert("HOLA ANA");
            break;
            case "JUAN":
            alert("HOLA JUAN");
            break;
            default:
                alert("QUIEN SOS?");
                break;
    }

    entrada = prompt("Ingresar un Nombre");
}*/

/*let password = "";

while (password != "hola") {
    password = prompt("Introduzca su Contrseña")
}

console.log("Fin del bucle");*/


// Ciclos con 
/*
let numero = 0;
do {
    numero = prompt("Ingresar Número");
    console.log(numero);
} while(parseInt(numero));*/



// Ciclos con DO y WHILE
let repetir = false;
do{
console.log("¡Solo una vez!");
}while(repetir)
while(repetir){
  console.log("¡Solo una vez!");
} 

//CICLOS CON FOR WHILE
for(let i = 0; i < 1; i++){
    let ingresarNombre = prompt("Nombre del paciente:");
    alert("Turno N°" +i+ "  Nombre del paciente: "+ingresarNombre);
 }

 let constrasena = prompt("Ingresar su Contraseña");

 while(constrasena != "1234") {
     alert("El usuario ingresó una contraseña incorrecta");
     constrasena = prompt("Ingresar su contraseña");
 }
 