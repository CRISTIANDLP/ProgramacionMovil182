//console.log('HOLA');
//  FUNCION
//

/*
function suma(a,b){
    return a+b
}
*/

//funcion fatArrow
/*
const suma = (a,b)=>{
    return a+b
}
*/

//fat Arrow simplificada

/*const suma = (a,b)=> a+b*/

/*const usuario={
    nombre: 'cristian',
    apellidoP: 'lopez',
    edad: 20,
    direccion:{
        pais: 'mexico',
        ciudad: 'queretaro',
        calle: 'la chida 123'
    },
    amigos: ['greñudo' , 'alan'],
    estatus: true,
    
}

console.log(suma(2,3));
*/







//Trabajo con Arreglos
/*const nombres= ['Alan', 'Isa', 'Pablo', 'Juan Pablo']

for (let i =0 ; i< nombres.length; i++){
    const elemento= nombres  [i]
    console.log(elemento)


}

nombres.forEach(function (nombre){
    console.log(nombre)
})
*/

/*
const array2= nombres.map(function (nombre){
    console.log(nombre)
    return nombre
})

console.log(nombres)
console.log(array2)
*/


//FUNCION FIND: Ubicar elementos en un arreglo
/*const resultado = nombres.find(function (nombre){
    if(nombre == 'Pablo')  {
    return nombre
    }
})

   console.log(resultado)

  
  //FUNCION FILTER: RECORRE EL ARREGLO FILTRADO RESULTADO
  /*
  const resultado = nombres.find(function (nombre){
    if(nombre != 'Pablo') {
    return nombre
    if(nombre != 'Pablo') 
}   
})
    console.log(resultado) 
    console.log(nombres)
    
   */ 
    /*
    //FUNCION CONCAT:
    const edades=[78,89,12,8,10,15]
    console.log(nombres.concat(edades))

    console.log([...nombres, ...edades])
*/

//MOSULOS: IMPORT & EXPORT

//import {suma, resta} from "./calculadora.js"
//import * as calc from "./calculadora.js"

//console.log(calc.suma(45,54))
//console.log(calc.resta(45,54))

/*const ul= document.createElement('ul')

fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(response){
    console.log("Carga de datos completada")
    return response.json()
}).then(function(data){
    console.log(data)
    data.forEach(function (post){
        const li = document.createElement('li')
        li.innerHTML=post.title
        ul.append(li)
    })
    document.body.append(ul)
})

console.log('Cargando HTML')
console.log('Cargando CSS')
console.log('Cargando IMAGENES')

console.log(datos)
*/

//EJEMPLO CON ASYNC AWAINT

async function cargarDatos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const datos = await response.json();
    console.log(datos);
}

cargarDatos();

console.log('Cargando HTML');
console.log('carga CSS');
console.log('Carga imagenes');

