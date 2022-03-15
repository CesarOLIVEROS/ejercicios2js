function miFuncion1(){
    console.log('funcion 1');
}

function miFuncion2(){
    console.log('Funcion 2');
}

// Funcion callback 
// Funcion simple 
function imprimir(mensaje){
    console.log(mensaje);
}

// Funcion sumar que recibe por parametro la funcionCallback que recibe cualquier nombre y se llama
// en un parametro de la misma funcion. por esto llamamos a la funcion que creamos anteriormente.
function sumar (op1,op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`); // se puede usar el templateString para mostrar el resultado en la funcion final.
}

// Funcion recibiendo parametros y llamando a la funcion callBack denominada imprimir.
sumar(3,4,imprimir);


// llamadas asincronas con uso setTimeout

function miFuncionCallBack(){
    console.log('Saludo desde async despues de 3 segundos');
};

// Creamos la funcion explicita de setTimeout que recibe de parametros, una funcion asincrona y el tiempo en milisegundos de espera.
// Se pasa por referencia la funcion sin parentesis como si fuera una variable
setTimeout(miFuncionCallBack, 3000);

// Otra forma de pasar la funcion setTimeout, es pasarle la funcion explicita como una sola linea de codigo.
// Declarando una funcion normal y sin parametros.
setTimeout(function(){console.log('Saludo desde asincrono 2')}, 4000);

// Usamos otra sintaxis con ArrowFunction, para expresar la función,
// ArrowFunction no se pasa el nombre function y siendo una sola linea no hay que abrir los corchetes.
setTimeout(()=> console.log('Saludo asincrono 3'), 5000 );