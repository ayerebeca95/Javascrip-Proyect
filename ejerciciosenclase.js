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
/*let repetir = false;
do{
console.log("¡Solo una vez!");
}while(repetir)
while(repetir){
  console.log("¡Solo una vez!");
} */


 //After Class
 /*let nombre = "Rebe";
 /*console.log(`hola ${nombre}`);*/

 /*if(nombre === "Aye"){
     console.log("Hola Aye");
    }else if(nombre === "Rebe"){
     console.log("Hola Rebe")
     }else {
     console.log("Hola desconocido");
 }*/

 //CICLOS CON FOR WHILE
/*for(let i = 0; i < 1; i++){
    let ingresarNombre = prompt("Nombre del paciente:");
    document.write("Turno N°" +i+ "  Nombre del paciente: "+ingresarNombre);
 }

 let constrasena = prompt("Ingresar su Contraseña");

 while(constrasena != "1234") {
     alert("El usuario ingresó una contraseña incorrecta");
     constrasena = prompt("Ingresar su contraseña");
 }*/

 /*class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
  
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
  
    vender() {
        this.vendido = true;
    }
  }
  
  const producto1 = new Producto("arroz", "125");
  const producto2 = new Producto("arz", "12");
  
  console.log(producto1.vendido);
  producto1.vender();
  console.log(producto1.vendido);
  console.log(producto2.vendido);
  producto2.vender();
  console.log(producto2.vendido);*/


  /*for(let i = 0; i < 1; i++){
    let ingresarNombre = prompt("Nombre del paciente:");
    document.write("Turno N°" +i+ "  Nombre del paciente: "+ingresarNombre);
 }

 let constrasena = prompt("Ingresar su Contraseña");

 while(constrasena != "1234") {
     alert("El usuario ingresó una contraseña incorrecta");
     constrasena = prompt("Ingresar su contraseña");
 }*/

 //funciones para ahorrar lineas 
 /*function saludo(n){
     for(let i=0; i < n; i++){
         console.log("hola");
     }
 }

 saludo(5);*/

/* function saludo(){
     console.log("Hola a Todos");
 }
    saludo();*/

   /*function solicitarNombre(){
        let nombreIngresado = prompt("Ingresar Nombre");
        document.write("El nombre ingresado es: " + nombreIngresado)
    }
  solicitarNombre();*/

/*function transporte(precio, nombre){
    console.log(`Tu hijo ${nombre} ha sido transportado seguro con un pago de ${precio}`);
}
 transporte(500, "Roman");*/
 
 
 /*function sumar(primero, segundo){
     console.log(primero + segundo);
   return primero + segundo;
  }

 let resultado = sumar(6, 3);
 console.log("Este es el resultado: ", resultado);*/

 /*function calculadora (primero, segundo, operacion){
     switch (operacion){
         case "+":
             return primero + segundo;
             break;
         case "-":
             return primero - segundo;
             break;
         case "*":
             return primero * segundo;
             break;
         case "/":
             return primero / segundo;
             break;
        default:
            return 0;
            break;
        
     }
 }
  
console.log(calculadora(10, 5, "*"));*/


    /* function paciente(){// Parametro
    let nombreIngresado = prompt("Ingresar Nombre");
    let apellidoIngresado = prompt("Ingresar Apellido");
    let precio = prompt("Costo del turno")
    document.write("Paciente registrado: " + nombreIngresado + "  "+ apellidoIngresado + " " +" " +  " Costo del turno: " + precio);   
    }

    paciente(); */// Argumento

    /*function saludo(n){
        for (let i=0; i < n; i++){
            console.log("hola smart");
        }
       
    }

    saludo(5);*/


   /* function solicitarNombre(){
        let nombreIngresado = prompt ("Ingresar nombre");
        alert("el nombre ingresado es: " + nombreIngresado);
    }

    solicitarNombre();*/

   /* function transporte(precio){
        console.log(`Tu hijo ha sido transportado con un precio  de ${precio}`)
    }

    transporte(100);*/

    /*function sumar(num1, num2){
     console.log(num1 + num2);
      return num1 + num2;
    }

    let resultado = sumar(5, 3);
    console.log("este es el resultado", resultado);*/


    // FUNCIONES FLECHA
    /*const suma = (a,b) => a + b
    const resta = (a,b) => a + b
    const iva = x => x * 0.21
    let precioProducto = 500
    let descuento = 50

    // Calculo precioProducto + iva - descuento
    let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento)
    console.log(nuevoPrecio)*/

    /*function paciente(){// Parametro
    let nombreIngresado = prompt("Ingresar Nombre");
    let apellidoIngresado = prompt("Ingresar Apellido");
    let precio = prompt("Costo del turno")
    document.write("Paciente registrado: " + nombreIngresado + "  "+ apellidoIngresado + " " +" " +  " Costo del turno: " + precio);   
    }

    paciente();*/ /// Argumento


