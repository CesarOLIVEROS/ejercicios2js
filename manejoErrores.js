"use strict"


// Encerramos el error en el bloque diciendo intente pero si no puede catchee el error
try{
    x = 10;
    
}
catch(error ){
    console.log(error);
}

// finally se ejecuta sin importar que suceda anteriormente
finally{
    console.log('Terminamos de revisar errores.')
}
// Aca apesar del error el programa continuara.
console.log('continamos...');