function miFuncion1(){
    console.log('funcion 1');
}

function miFuncion2(){
    console.log('Funcion 2');
}


miFuncion1();
miFuncion2();

// Funcion callback 
// Funcion simple 
function imprimir(mensaje){
    console.log(mensaje);
}

// Funcion sumar que recibe por parametro la funcionCallback que recibe cualquier nombre y se llama
// en un parametro de la misma funcion. por esto llamamos a la funcion que creamos anteriormente.
function sumar (op1,op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(res);
}

// Funcion recibiendo parametros y llamando a la funcion callBack denominada imprimir.
sumar(3,4,imprimir);