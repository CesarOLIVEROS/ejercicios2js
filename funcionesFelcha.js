// Declaramos la funcion dentro de una variable para llamarla en cualquier momento.
let miFuncion = function(){
    console.log('saludos desde mi función');
}

// Forma de declarar una funcion flecha.
let miFuncionFlecha = () => {
    console.log('Saludos desde de mi funcion flecha');
}



// MANEJO PARA FUNCIONES FLECHA

// forma 2 de usar la funcion
const miFuncionFlecha1 =()=> console.log('saludos desde mi funcion flecha 2');

// forma 3 de usar la funcion

const saludar = () =>{
    return 'Saludos desde funcion Flecha 3'
}

// Forma 4 de usar la funcion flecha cuando es una sola linea.
const saludar1 =()=> 'Saludos desde funcion flecha 4';

// Forma de regresar objetos en funcion flecha de javascript
const regresaObjetos = ()=>({nombre: 'Juan', apellido: 'Lara'});

// Funcion con parametros, declarando el nombre de los parametros pasando  el mensaje, despues del primer parentesis es el parametro y 
//luego de la flecha es el cuerpo de la funcion.
const funcionParametros = (mensaje) => console.log(mensaje);

// Funcion con mas de un parametro
const funcionConVariosArgumentos = (op1,op2,) => op2 + op1;


// Funcion con mas argumentos y operaciones mas complejas
const funcionConVariosParametrosComplejos = (op1,op2) =>{
    let resultado = op1 +op2;
    return resultado;
};

miFuncion();
miFuncionFlecha();
miFuncionFlecha1();
console.log(saludar());
console.log(saludar1());
console.log(regresaObjetos());
// Llamamos la funcion con parametros y pasamos el texto. 
console.log(funcionParametros('saludos con parametros'));
// funcion con varios parametros
console.log(funcionConVariosArgumentos(3,5));
console.log(funcionConVariosParametrosComplejos(3,4));