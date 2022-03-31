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

class Persona{
    constructor(nombreCompleto, turno, precio){
    this.nombreCompleto = nombreCompleto;
    this.turno = turno;
    this.precio = precio;
}
hablar (){
    console.log("Paciente: " + this.nombreCompleto + " " + "Turno: " +  this.turno + " " + "Costo: " + this.precio)
}
}
const persona1 = new Persona ("Rebeca Torres", "Oculista", 200);
persona1.hablar();


   