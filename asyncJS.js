// al usarla se debe el metodo obligado a devolver una promesa 
let promesa = new Promise((resolver) =>{
    setTimeout(()=> resolver('Saludos desde promesa y setTimeout'), 3000);

});

// llamamos async con la funcion y le pasamos la promesa a devolver0
async function miFuncionConPromesa(){
    return 'Saludos con promesa y async';
}

miFuncionConPromesa( ).then(valor =>console.log(valor));  


// Crea la funcion asincrona y le pasas la arrowFunction la promesa 
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise( resolver =>{
        resolver('Promesa con await');
    });
    console.log( await miPromesa);

}
//  siempre llamar el metodo o funcion que creaas para dar la funcionalidad.
funcionConPromesaYAwait();

// SetTimeout y async await combinadaas

async function funcionConPromesaAwaitTime(){
    let mipromesa = new Promise(resolver => {
        setTimeout(() =>resolver ('Promesa con await y timeout'), 3000);
    });
    console.log(await mipromesa);
}

funcionConPromesaAwaitTime();