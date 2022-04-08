// PRIMER DESAFIO ENTREGADO

/*for(let i = 0; i < 1; i++){
    let ingresarNombre = prompt("Nombre del paciente:");
    document.write("Turno N°" +i+ "  Nombre del paciente: "+ingresarNombre);
 }

 let constrasena = prompt("Ingresar su Contraseña");

 while(constrasena != "1234") {
     alert("El usuario ingresó una contraseña incorrecta");
     constrasena = prompt("Ingresar su contraseña");
 }*/


// SECUNDO DESAFIO ENTEGADO

/*class Persona{
    constructor(nombreCompleto, turno, precio){
    this.nombreCompleto = nombreCompleto;
    this.turno = turno;
    this.precio = precio;
   }
  hablar (){
  console.log("Paciente: " + this.nombreCompleto + " " + "Turno: " +  this.turno + " " + "Costo: " + this.precio);
 }
}
const persona1 = new Persona ("Rebeca Torres", "Oculista", 200);
persona1.hablar();*/


// TERCER DESAFIO DOS ENGREGAS // EN MI PARTE SHOP DE LA PAGINA
/* Consola, en mi pagina cree una nav que dice SHOP y dentro contiene 
 algunos de estos productos de rehabilitacion o medicamentos*/
let productos = [
    {nombre: "Cuello Ortopédico", activo: true, precio: 1050},
    {nombre: "Bota Ortopédica", activo: false, precio: 2250},
    {nombre: "Gotas Ojos", activo: true, precio: 3152},
    {nombre: "Crema anti-Hemorroides", activo: true, precio: 4500},
    {nombre: "Faja Conductora", activo: false, precio: 1483},
    {nombre: "Sertal", activo: true, precio: 3644},
    {nombre: "Aspirina", activo: false, precio: 2217},
    {nombre: "Paracetamol", activo: true, precio: 3045}
]
console.log(productos.filter(n => n.nombre.includes("Paracetamol")).map(x => x.activo));
console.log(productos.length);

const inicio = new Date ("25 Diciembre 2022")

for (let i = 0; i < 1; i++) {
    console.log("haciendo tiempo")
}
const final = new Date ("26 Diciembre 2022")

console.log("El proceso tardó: " + (final - inicio) + "milisegundos");

// Pagina
const listaPacientes = [];// en la pagina en consola me aparecera el numero uno por uno de cada nombre 
let cantidad = 5;

 do {
 let entrada = prompt ("Ingrese su nombre completo");
 listaPacientes.push(entrada.toUpperCase());
 console.log(listaPacientes.length);
  }while(listaPacientes.length != cantidad)
 const nuevaLista = listaPacientes.concat(["Ana Paz", "Ema Robing"]); // AGREGO ESTOS DOS NOMBRES AL FINAL
 alert(nuevaLista.join("\n")); // si pongo /n me saldra al final de los 5 nombres escritos uno debajo de otros 

