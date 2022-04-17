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


    // AFTER CLAAS LUIS SALINAS, Objeto Literal

   /* const persona = {
        nombre: "Juan",
        apellido: "perez",
        edad: 40,
        hijos: {
            hijo1: {
                nombre: "Roman",
                apellido: "Perez",
                edad: 10
            },
            hijo2: {
                nombre: "Mariano",
                apellido: "Perez",
                edad: 15
            }
        }

    }

    console.log(persona.nombre);
    console.log(persona.hijos.hijo2.edad);*/

   /* let numero = 10;
    let array = [10, 20, 30, 40]
    console.log(array[1]);

    function contadorCaracteres(cadena=""){
        if(isNaN (cadena)){
            let arrayCaracteres = cadena.split("")
            let contadorCaracteres= cadena.length

            console.log(arrayCaracteres);
            console.log(contadorCaracteres);
        }else {
            console.log("No es un numero");
        }
    }

    contadorCaracteres(javascript);*/

    /*function repiteTexto (texto="", veces=0){
        for (let i = 0; i < veces; i++){
            console.log(texto)
        }
    }

repiteTexto("Hola mundo", 3);
repiteTexto("Vamos a seguir aprendiendo", 2);*/


// PROBAMOS CARRITO

/*class Bateria {
    mAh;
    marca;

    constructor (mAh, marca) {
        this.mAh = mAh;
        this.marca = marca;
    }
}



class Chip {
    empresa;
    numero;

    constructor (empresa, numero){
        this.empresa = empresa;
        this.numero = numero;
    }
}

 
class Smart {
    modelo;
    bateria;
    nroChip;
    chips;

    constructor (modelo, cantMah, marcaBateria){
        this.modelo = modelo;
        this.bateria = new Bateria (cantMah, marcaBateria);
        this.nroChip = 0;
        this.chips = []
    }
  
    agregarChip(chip){
        if(this.nroChip < 3){// SI FUERA UN 2 EN VEZ DE 3 , ME APARECERÁ "NO SE PPUEDE AGREGAR MAS CHIPS"
        this.chips.push(chip);
        this.nroChip++;;
        }else {
            console.log("No se puede agregar mas chips");
        }

    }
}

let iphone = new Smart ("Iphone", 200, "Samsung");
console.log(iphone);
let entel = new Chip ( "Entel", "12345");
let tole = new Chip ( "Tole", "99345");
let tole1 = new Chip ( "Tole12", "99345");
iphone.agregarChip(entel); 
iphone.agregarChip(tole);
iphone.agregarChip(tole1);
console.log(iphone);
*/

/*let array = [ 1, 2, 3]
array.push(22); Para agregar algun numro al final
console.log(array[2]);*/

/*let nombre = prompt ("Ingrese su Nombre");

let usuario = prompt ("Ingrese su usuario")
let contraseña = prompt ( "Ingrese su Contraseña");

alert(`${nombre} Ponga sus datos por favor`)

let user = "";
let pass = "";
let intentos = 3;

function login (usuario, contrasenia, intentos){
    if(!(usuario=== "" && contrasenia === "")){
        while (intentos > 0 && (intentos !=0 && usuario !== user || contraseña !== pass )){

       user = prompt("Ingrese su usuario");
       pass = prompt("Ingrese su contraseña");
       if (user == usuario && pass === contrasenia){
           alert("Bienvenidos, acceso permitido")
           
       }else{
           alert(`Usuario o contraseña incorrecta, te quedan ${intentos--} intentos`);
       }

        }
    }
}


// PROBANDO CARRITO
login (usuario, contraseña, intentos)*/

/*class Articulo {
    constructor (prenda, precio){
        this.prenda = prenda;
        this.precio = parseInt(precio);
    }

    precioTotal(){
        return this.precio * 1.21;
    }
}

const producto1 = new Articulo ("Camisa", 2000);
const producto2 = new Articulo ("Pantalon", 3000);
const producto3 = new Articulo ("Zapatillas", 9000);

let ropaElegida = [
    producto1,
    producto2,
    producto3
]

let nombre = prompt ("ingrese tu nombre para exoeriencia");
let apellido = prompt ("ingrese tu apellido para mejor");

let eleccion = prompt (
    `Hola ${nombre}, bienvenido a la tienda:
    Digite 1 para ${producto1.prenda}, precio ${producto1.precio}
    Digite 2 para ${producto2.prenda}, precio ${producto2.precio}
    Digite 3 para ${producto3.prenda}, precio ${producto3.precio}`
)

let total = 0;

function eleccionDeRopa() {
    while (eleccion != "NO"){
        console.log(`${nombre}
        tus prendas elegidas son ${ropaElegida[eleccion-1].prenda}`);
       total += ropaElegida[eleccion-1].precioTotal();
        eleccion = prompt (
            `Hola ${nombre}, QUERES SEGUIR COMPRANDO? Elegí que ropa deseas comprar o de lo contrario digita NO:
            Digite 1 para ${producto1.prenda}, precio ${producto1.precio}
            Digite 2 para ${producto2.prenda}, precio ${producto2.precio}
            Digite 3 para ${producto3.prenda}, precio ${producto3.precio}`
        )
        console.log(`total a pagar ${total}`)
    }

    eleccionDeRopa();

    function pagar  (){
        let formaPago = parseInt (prompt (`${nombre}, el monto a pagar es ${total}
            1 para debito
            2 para credito:`))
        }

        if(formaPago===1){
            let pago = (`Ingresa el numero de la tarjeta: `);
            let cuotas = parseInt(prompt`${nombre}, cuantas cuotas deseas?
            1 para 3 cuotas con un recargo del 10%,
            2 para 6 cuotas con un recargo de 15%,
            3 para 12 cuotas con un recargo del 20%`);
             let recargo = 0;
             let cuota = 0;

             switch(cuotas){
                 case 1 : 
                 recargo = total * 0.10;
                 total+= recargo;

                 alert(`${nombre}, tu pago fue existoso, gracias por comprar
                 Detalles de la compra:
                 Compra a nombre de ${nombre} ${apellido}
                 Total abonado ${total}`);
                 break;
                 case 2 : 
                 recargo = total * 0.15;
                 total+= recargo;

                 alert(`${nombre}, tu pago fue existoso, gracias por comprar
                 Detalles de la compra:
                 Compra a nombre de ${nombre} ${apellido}
                 Total abonado ${total}`);
                 break;
             }
            
        
    
    }

}

eleccionDeRopa();*/


// EJERCICIOS CLASE 4

/*const arr1 = [1, true, false, "casa"];
const nombres = ["pepito", "maria", "agostina"];*/

/*const numero =  [1, 2, 3, 4, 5];
console.log(numero[0]);
console.log(numero[3]);*/

/*const numero =  [1, 2, 3, 4, 5];
for (let index = 0; index < 0; i++){
    alert(numero[index]);
}*/

/*console.log("andres".length);*/

/*const nombres = ["pepito", "maria", "agostina"];
console.log(nombres.length);
nombres.push("Luis");
console.log(nombres);
console.log(nombres.length);*/

/*const nombres = ["pepito", "maria", "agostina"];
nombres.splice(1, 3);// APARECE EL PRIMERO Y SEGUNDO
console.log(nombres);*/

/*const nombres = ["pepito", "maria", "agostina", "Juan"];
console.log(nomrbes.join (","));

console.log(nombres.join("*"));*/

/*const perros = ["Pupy", "Ronnie"]
const gatos = ["Mishi", "Garfield", "Zuri"]
const mascotas = perros.concat(gatos);
console.log(mascotas);*/

/*const nombres = ["pepito", "maria", "agostina", "Juan"];
const masculinos = nombres.slice(1, 3);
console.log(masculinos);*/// RECORTA PERO SIMPRE UNA MENOS ANTES DE LLEGAAR

/*const nombres = ["pepito", "Pedro", "agostina", "Juan"];
let nombre = prompt ("ingrese la persona que se va a ir");

const index = nombres.indexOf(nombre);
const invitacionActivos = nombres.splice(index, index);
console.log(nombres);*/

/*const nombres = ["pepito", "Pedro", "agostina", "Juan"];
let nombre = prompt ("ingrese la persona que se va a ir");

if(nombres.includes("Rita")){

}*/

/*const listaNombres = [];// en la pagina en consola me aparecera el numero uno por uno de cada nombre 
let cantidad = 5;

do {
let entrada = prompt ("Ingresar nomrbe");
listaNombres.push(entrada.toUpperCase());
console.log(listaNombres.length);
}while(listaNombres.length != cantidad)
const nuevaLista = listaNombres.concat(["ana", "ema"]);
alert(nuevaLista.join("\n")); // si pongo /n me saldra al final de los 5 nombres escritos uno debajo de otros 
*/

// ARREGLOS CON OBJETOS
/*const productos = [
    {nombre: "camara", precio: 1233},
    {nombre: "television", precio: 1233},
    {nombre: "celular", precio: 1233}
];

//console.log(productos);

for (const producto of productos){ // Agarra los productos del anterior y aparecera uno debajo del otro
    console.log(producto.nombre);
    console.log(producto.precio);
}*/

/*class Producto {
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva()
}*/

/*function mayorQue(n){
    return (m) => m > n 
}

let mayorQueDiez = mayorQue (10)

console.log(mayorQueDiez(12))
console.log(mayorQueDiez(8))*/


// RETORNAR FUNCIONES
/*function asignarOperacion (op) {
    if (op == "sumar"){
        return (a, b) => a + b 
    }else if (op == "restar"){
        return (a, b) => a - b
    }
}

let suma = asignarOperacion("sumar")
let resta = asignarOperacion("restar")

console.log(suma(5,2));
console.log(resta (5, 2));*/

// RECIBIR FUNCIONES POR PARAMENTROS

/*function porCadaUno (arr, fn){ // EL arr reemplaza el numeros y el fn reemplaza el console.log
 for ( const el of arr){
        fn (el);
    }
}

const numeros = [ 1, 2, 3, 4];
porCadaUno (numeros, console.log);*/

// MULTIPLICANDOLO
/*function multiplicar (x){
    console.log(x*2);
}

function porCadaUno (arr, fn){ // EL arr reemplaza el numeros y el fn reemplaza el console.log
    for ( const el of arr){
           fn (el);
       }
   }
   
   const numeros = [ 1, 2, 3, 4];
   porCadaUno (numeros, multiplicar);*/

   /*const numeros = [ 1, 2, 3, 4];
   numeros.forEach((num)=> {
       console.log(num);
   })*/


   // METODO FIND
  /* const cursos = [
       {nombre: "Javascript", precio: 1500},
       {nombre: "React Js", precio: 2800}
   ]

   const resultado = cursos.find((el) => el.nombre === "React Js")
   console.log(resultado);   // encuentra el resultado que busco*/
// CUANDO ULTILIZAMOS EL SOME HACE TRUE O FALSE TE DICE SI EXISTE O NO 

// METODO FILTER

/*let personas =[
{nombre: "aye", edad: 27},
{nombre: "Roman", edad: 22},
{nombre: "lisa", edad: 15}
]

console.log(personas.filter(x=> x.edad < 18));*/// aparece los nombres que sean menores de 18


/*let productos = [
    {nombre: "camisa", activo: true},
    {nombre: "blusa", activo: false},
    {nombre: "correa", activo: true}
]
console.log(productos.filter(x => x.activo === false));*/// mostrara quienes estan disponibles o no en false o true

/*const nombres = [ "rita", "Pedro", "miguel", "ana", "vanesa" ]
let nombre =  prompt("ingrese el nombre de la perosna que se retira");
/*const index = nombres.indexOf(nombre);
const invitados = nombres.splice(index, index);
console.log(nombres);*/

/*if (nombres.includes("rita")){
    const index = nombres.indexOf(nombre);
const invitados = nombres.splice(index, index);
console.log(nombres);
}else {
    console.log("donde se encuentra");
}*/

/*const cursos = [
    {nombre: "Javascript", precio: 1500},
    {nombre: "React Js", precio: 2800},
    {nombre: "Angular Js", precio: 2800},
    {nombre: "Desarrollo web", precio: 2800}

]

const nombres = cursos.map((el) => el.precio);
console.log(nombres);*/   // encuentra el resultado que busco de todos

/*const numeros = [ 1, 2, 3, 4, 5, 6]
const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)
console.log(total);*/


/*const productos = [
    {id: 1, nombre:"Arroz", precio: 1500},
    {id: 2, nombre:"Fideo", precio: 2800},
    {id: 3, nombre:"Pan", precio: 2800},
    {id: 4, nombre:"Flan", precio: 2800}

]

const buscando = productos.find(producto => producto.id === 3)
console.log(buscando)

const existe = productos.some(producto => producto.nombre === "Harina")
console.log(existe)

const baratos = productos.filter(producto => producto.precio < 100)
console.log(baratos)


const listaNombres = productos.map(producto => producto.nombre)
console.log(listaNombres);*/


// AFTER CLASS 6/4 . Map, some

/*let info = [
    {nombre: "cafe", precio: 1200, disponible: true},
    {nombre: "pan", precio: 5200,  disponible: false},
    {nombre: "leche", precio: 400,  disponible: true}
]

let result = info.filter(x => x.nombre == "cafe")
console.log(result);

console.log(info.map(x => x.precio));

let productosDis = info.filter(x => x.disponible === true)
console.log(productosDis);*/

/*class Producto {
    constructor (id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

let productoVirtuales = [];

for (let i =0; i < 2; i++){
    let id = prompt ("ingrese id");
    let nombre= prompt ("ingrese id");
    let precio= prompt ("ingrese id");

    productoVirtuales.push(new Producto (id, nombre, precio));
}

[{nombre:"1234", id: 5}, {nombre: "123451234", id: 6}]

function eliminarProducto(id){
    let index = productoVirtuales.indexOf(productoVirtuales.find (x => x.id === id))
    productoVirtuales.splice(index, 1);
}

eliminarProducto(6);*/

/*let servicios = [
    {servicio: "agua", precio: 1050} ,
    {servicio: "luz", precio: 2550} ,
    {servicio: "comida", precio: 4150} 
    
]

console.log(servicios.filter(s => s.servicio.includes("agua")).map(x => x.precio));
*/

/*const inicio = new Date ()

for (let i = 0; i < 1000; i++) {
    console.log("haciendo tiempo")
}
const final = new Date ()

console.log("El proceso tardó: " + (final - inicio) + "milisegundos");*/
/*const inicio = new Date ("25 Diciembre 2022")

for (let i = 0; i < 1; i++) {
    console.log("haciendo tiempo")
}
const final = new Date ("26 Diciembre 2022")
console.log("El proceso tardó: " + (final - inicio) + "milisegundos");*/


// CLASE 5 

/*let div = document.getElementById("app"); // compilando con html
console.log(div.innerHTML); // muestra lo que el din tiene por dentro*/

/*let parrafo = document.getElementById("parrafo");
console.log(parrafo.innerHTML);
console.log(parrafo.innerText);*/

/*let perritos = document.getElementsByClassName("perritos");
for ( const  perrito of perritos){
    console.log(perrito);
}*/

/*let contenedores = document.getElementsByTagName("div");
console.log(contenedores[0].innerHTML);*/

/*let h1 = document.getElementById("identificador");
h1.innerHTML = "<h2> hola <p>a todos<p> </h2>"
*/
/*setTimeout(() => {
    h1.innerText = "hola mundo"
}, 2000); // cambia en dos segundos de hola a todos a hola mundo
*/

/*
1. creamos el nodo 
2. insertamos la info del nodo
3. Añadir un padre

let nombre = "aye";
let parrafo = document.createElement("p");
parrafo.innerHTML = `<h1>hola ${nombre}  </h1>`;
document.body.apeend(parrafo); // se agrega al final
parrafo.className = "saludo"*/

//parrafo.remove(); para borrar

/*let padre = document.getElementById("padre");
let personas = [ "homero", "marge", "bart"];
for (const persona of personas){
    let li = document.createElement ("li");
    li.innerHTML = persona;
    padre.append(li);// se agregan prepend arriba me pone los li

}
*/

/*let btn  = document.getElementsByName ("btn");
btn.addEventListener("Añadir a carrito", respuesta);





function respuesta (){
   alert("Producto agregado");
   setTimeout(() => {// setTimeout es una funcion que toma una espera antes de ejecutar
      let h1 = document.createElement("h1");
      h1.innerHTML = "Bienvenidos a nuestro Hospital";
      document.body.append(h1);
  }, 1000)
}*/

//Con solo presionar el mouse ya se esta ejecutando
/*let boton = document.getElementById("eventos");
boton.addEventListener("mousedown", () => {
    console.log("evento mousedown");
});*/

/*boton.addEventListener("mouseup", () => {
    console.log("evento mouseup");
});*/

/*boton.addEventListener("mousemove", () => { // y el mouseover es para cuando se mueve el mouse sobre el elemento
    console.log("evento mousemove"); // hace que con tan solo apoyar mi mouse me marque cuantas veces este sobre el elemento mousemove
}) // mouseout me marca cuando apoyo el mouse y salgo del elemento
*/

// Eventos del teclado
/*let input1 = document.getElementById("nombre");
let input2 = document.getElementById("edad");
input1.onkeyup = () => {console.log("keyUp")}; // cuando se presiona la tecla y cuando la suelto se marca
input2.onkeydown = () => {console.log("keyDown")}; // con solo presionarlo 
*/

// Onchange - es cuando completas y entras a la otra , ejecuta
/*let input1 = document.getElementById("nombre");
let input2 = document.getElementById("edad");
input1.onchange = () => {console.log("valor1")}; 
input2.onchange = () => {console.log("volor2")}; */


// Evento input agrega lo que escribis 
/*let input1 = document.getElementById("nombre");
input1.addEventListener( `input `, () => {  
    console.log(input1.value)
})*/


// interactuando los formularios con la consola una vez que pongo enviar
/*let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario (e){
    e.preventDefault();
    console.log("Formulario enviado");
}*/

// Trae la informacion del formulario
/*let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault ();
    let formulario = e.target
    console.log(formulario);
    console.log(formulario.children[0].value);
    console.log(formulario.children[1].value);
}*/

/*
console.log(document.getElementsByTagName("li"));
console.log(document.getElementById("formulario"));
console.log(document.getElementsByClassName("bioPrincipal"));
console.log(document.querySelectorAll("a"));
document.querySelectorAll("a").forEach(el => console.log(el));
console.log(document.querySelectorAll("#header li"));
*/

// CLASE 6 PROFE

/*localStorage.setItem("nombre", "aye"); // setItem es para guardar
let numero = localStorage.getItem("valor", 5);

localStorage.setItem("nombre", "aye"); // getItem para obtener
let nombre = localStorage.getItem("nombre");

console.log(nombre);
console.log(typeof(numero));*/

//sessionStorage
/*localStorage.setItem("nombre1", "aye");
localStorage.setItem("nombre2", "mariano");
localStorage.setItem("nombre3", "ana");
localStorage.setItem("nombre4", "cesia");
localStorage.setItem("nombre5", "lea"); // localStorage.removeItem
console.log(localStorage.key(1));

for(let i= 0; i < localStorage.length; i++){ // le estoy diciendo que recorra uno por uno
    let clave = localStorage.key(i);

    console.log("clave" + clave + "valor: " + localStorage.getItem(clave));
}
*/
//console.log(sessionStorage.apellido);
//console.log(sessionStorage["apellido"]);

// JSON es un string , almacena en el localStorage objetos, etc

/*localStorage.setItem("arreglo", JSON.stringify([1,2,3]));
let arreglo = localStorage.getItem("arreglo");
console.log(JSON.parse(arreglo));*/

/*localStorage.setItem("objet",JSON.stringify({nombre:"juan", edad: 12}));
let objet = localStorage.getItem("objet");
console.log(JSON.parse(objet).nombre);*/




