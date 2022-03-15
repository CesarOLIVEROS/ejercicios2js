// creamos un objeto de tipo promesa y le pasamos el argumento de resolver y rechazar
// Cerrar correctamente el objeto
let miPromesa = new Promise((resolver, rechazar) => {
    // creamos la variable para almacenar una de las dos respuestas el camino verdadero o el camino falso
    let expresion = false;
    // evaluamos la expresion y definimos que camino tomar
    if(expresion)
    resolver('Resolvio correcto')
    else
        rechazar('se produjo un error');
});
// Se llama la promesa con la funcion then la cual definira si es resuelta o rechazada, basado en una callback e imprimira un valor.
miPromesa.then(
    valor => console.log(valor),
    error => console.log(error));
// La forma de usar el metodo CATCH, y llamar la funcion callback
miPromesa.then(valor =>console.log(valor)).catch(error=>console.log(error));


let promesa = new Promise((resolver) => {
    setTimeout( () => resolver('saludos con promesa y timeout'), 3000);
});

promesa.then(valor=> console.log(valor));
