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

// Co


miFuncion();
miFuncionFlecha();
miFuncionFlecha1();
console.log(saludar());
console.log(saludar1());