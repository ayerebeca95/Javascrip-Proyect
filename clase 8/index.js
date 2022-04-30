/*for (let letra of "hola"){
    setTimeout(() => {
        console.log(letra)
    }, 1000)
}

for (let letra of "mundo"){
    setTimeout(() => {
        console.log(letra)
    }, 3000)
}*/

/*setInterval(() => { // INTERVAL SE REPITE Y REPITE LO DEL LOG
    console.log("hola")
}, 1000)*/

/*let counter = 0

const interval = setInterval (() => {
   try {
       reporte()
   }catch {
       // en caso de que el proceso falle
       clearInterval(interval)
       console.log("el preceso fallo");
   }
}, 1000)

function reporte (){
    // instrucciones para enviae el reporte diario a la empresa
}*/

/*console.log("arranca");

const fin = setTimeout(() =>{
    console.log("llega al fin ")
}, 1000)

clearTimeout(fin);*/

/*const eventoFuturo = (validacion) => {
    return new Promise((resolve, reject) => {
setTimeoutv(() => {
    res ? resolve ('promesa resuelta') : reject('promesa rechaza')
}, 2000)
    })
}

eventoFuturo(true).then((respuesta)=> {
    console.log(respuesta); // then es cuando se que hay una respuesta
}).catch((error)=> {
    console.log(error); // catch es cuando no hay respuesta
}).finally(() => {
    console.log('proceso terminado');
})*/

//eventoFuturo(true).then();
//eventoFuturo(false).catch();


/*fetch('https://jsonplaceholder.typidecode.com/posts/')
.then((responsse) =>responsse.json())
.then((json)=> console.log(json))
.catch((error) =>{
    console.log(error);
})

console.log(fetch('https://jsonplaceholder.typidecode.com/posts/'));

*/

/*fetch('https://jsonplaceholder.typidecode.com/posts/')
.then((res  =>res.json())
.then(data => {
    let primer = data[0];
    console.log();
})*/

/*const lista = document.querySelector('#listado');

fetch('https://jsonplaceholder.typidecode.com/posts/')
.then(rest => rest.json())
.then(data => {
    data.forEach(post => {
        const li = document.createElement('li');
        li.innerHTML = ``
        
    });
})*/