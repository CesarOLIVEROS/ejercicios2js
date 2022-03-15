let reloj = ()=> {
    // Creamos un objeto de tipo Date para extraer la fecha y hora
    let fecha = new Date();
    //imprimimos y accedemos con los metodos get a el dato solicitado
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

// Por medio de setinterval vamos a llamar a la funcion flecha

// Esta funcion determinara cada cuanto se debera llamar una funcion que puede ser asincrona.
setInterval(reloj, 1000);