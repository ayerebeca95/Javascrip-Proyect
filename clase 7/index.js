// CLASE 7 . OPERADORES AVANZADOS Y LIBRERIAS

// Para optimizar codigo 

/*let num = 10;
num = num + 1;
num += 1;
num++; // La mas usada
console.log(num);*/


/*let temperatura = 25;

if (temperatura > 21){
    console.log("hace calor");
}else{
    console.log("no hace mucho calor");
}*/
// Operador ternario condicion ? caso 1 : caso2

//temperatura > 21 ? console.log("hace calor") : console.log("hace frio");;

/* const usuario = {
     nombre: "octavio",
     edad: 18
 };

 const permiso = usuario.edad >= 18 ? true : false;

 permiso ? console.log("puedes entrar") : console.log("no puedes entrar");
 */

/*const carrito = []

if (carrito.length === 0) {
    console.log("el carrito esta vacio");
}

carrito.length === 0 && console.log("el carrito esta vacio");*/

/*const usuario = {
   nombre: "octavio",
   edad: 18
};

const registroIngreso = usuario.edad >= 18 && new Date;

console.log(registroIngreso);*/

/*
condicion1 || condicion2  el || es el mas utilizado
si condicion1 es diferente de 0, null, NaN, false o string vacio retorna condicion2
*/
/*console.log(0 || "valor");// valor
console.log(40 || "valor"); // 40*/

/*const usuario1 = {
    nombre: "John",
    edad: 14
}

const usuario2 = null;
console.log(usuario1.nombre || "el usuario no existe");
console.log(usuario2 || "el usuario no existe");*/

/*let carrito;
let carritoLocalStorage = JSON.parse(localStorage.getItem('carrito'))

if (carritoLocalStorage){
    carrito = carritoLocalStorage
}else {
    carrito = []
}

console.log(carrito);*/

/*const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
console.log(carrito);*/

/*const carrito = {
    productos: [123]
};
console.log(carrito?.productos || "los productos no existen");*/

/*const usuario = {
    nombre: "javier",
    edad:12,
    cursos: {
        javascript: "aprobado"
    }
};

console.log(usuario?.cursos?.javascript || "la propiedad no existe");
console.log(usuario?.trabajos?.coderhouse || "la propiedad no existe");*/

/*true ? (false ? console.log("hola") : console.log("chao")): console.log("no podemos entrar");*/

/*true && "hola"// hola , si el primero es es true con && sale el segundo
true || "hola"  */ // true , si el primero es true con || sale el primero

/*const perrito = {
    nombre: "firulai",
    edad: 3
};*/

/*let nombre = perrito.nombre;
let edad = perrito.edad;

console.log(nombre);
console.log(edad);*/

/*let {nombre, edad} = perrito;
console.log(nombre);
console.log(edad);*/

/*let {edad, nombre} = {nombre:"firulai", edad:3};
console.log(nombre);
console.log(edad);*/

/*const usuario = {
    nombre: "firulai",
    edad: 3
};
const { nombre, edad } = usuario;
console.log(usuario.edad);*/

/*const usuario = {
    nombre:"john",
    edad:32,
    telefono: {
        cel: 121121212,
        casa: null,
        trabajo: 2454511452
    }
}

const{nombre, edad, telefono} = usuario;
 console.log(nombre);
 console.log(edad);
 console.log(telefono.trabajo);*/

/*const item = {
    item_id: 123,
    price_per_name: "some product",
    price_per_unit: 5600
}

// CAMBIAMOS LOS NOMBRES SIN ""
const {
    item_id: identificador,
    price_per_name: nombre,
    price_per_unit: precio
} = item;

console.log(identificador, nombre, precio);*/

/*const producto = {
    id: 10,
    nombre: "curso javascript",
    precio: 1200
}

const destructurar = (item) => {
    const { id, nombre } = item
    console.log(id, nombre);
}

destructurar(producto);*/

/*const producto = {
    id: 10,
    nombre: "curso javascript",
    precio: 1200
}

const destructurar = (id, nombre) => {
    console.log(id, nombre);
}

destructurar(producto);*/


// ME MUESTRA CUANTOS CLICK DI EN EL BODY DE LA PAGINA EN LA CONSOLA DE LA PAGINA
/*window.addEventListener('click', ({x, y}) => {
    console.log(x, y);
})*/


// LO DESTRUCTURO POR POSICION Y LE PONGO UNA VARIABLE
/*const nombres = ["agustina", "octavio", "luis"];
const [nombre1, nombre2, nombre3] = ["agustina", "octavio", "luis"];

console.log(nombre1, nombre2, nombre3);*/

// OPERADOR SPREAD UNE LOS ELEMENTOS DEL ARREGLO
/*const nombres = ["agustina", "octavio", "luis"];
console.log(...nombres);*/

/*console.log(Math.max(1,6,3,7,9,90));

console.log(Math.max(...numeros));*/

/*const nombres1 = ["juan", "Julieta"];
const nombres2 = ["carlos", "mariela"];

let nombres = [...nombres1, ...nombres2]
console.log(nombres);
console.log({...nombres});*/

/*const usuario1 = {
    nombre: "Juan",
    edad: 32,
    curso: "Javascript"
}

const usuario2 = {
    ...usuario1
}

console.log(usuario2);

const usuario3 = {
    ...usuario1,
    curso: "ReactJS",
    email: "ayetorres88@gmail.com"
}

console.log(usuario3);*/

/*function sumar (...numeros){
    return numeros.reduce((acum, num) => acum + num,0);
}

console.log( sumar(0,1,2,3,4,5,6,7,8,9,1,2,3));
*/

const btn = document.querySelector("#myBotoon")
btn.addEventListener("click", () => {
   Swal.fire({
      title: "Agregado",
      icon: "success",
      confirmButtonText: "Cool",
   });
});












