
'use strict'

let resultado = '';

try{
    
    if (isNaN(resultado)) throw 'no es un numero';
    else if (resultado === '') throw 'Es una cadena vacía';
    else if(resultado >= 0) throw 'Valor positivo';
    else if(resultado <= 0) throw'Es un valor negativo';

}
catch(error){
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
}
finally{
    console.log('Termina revision de errores');
}