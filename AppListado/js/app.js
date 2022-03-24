console.log('Listado de personas');

const personas = [
    new persona('Juan', 'Perez'),
    new persona('Karla', 'Lara')
];

function mostrarPersonas(){
    let listado = '';
    for(let persona of personas){
        console.log(persona);
        // al recorrer el arreglo que contiene los datos se deben concatenar a el atributo <li> de HTML para mostrarlo en la web
        listado += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    // luego recuperamos el elemento del HTML de caracteristicas <ul> el cual contendra el li con el listado de personas
    document.getElementById('personas').innerHTML = listado;
    // esta funcion tambien es mostrada en el momento que se carga la pagina debido al metodo onload
};

function agregarPersona(){
    // primero se obtiene el formulario o el elemento html y luego los subindices de los elementos en mencion.
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    // validacion de informacion 
    if(nombre.value != '' && apellido.value != '' && isNaN(nombre.value) && isNaN(apellido.value)){
        const persona1 = new persona(nombre.value, apellido.value);
        // no llamar el objeto igual que la clase genera conflicto
        console.log(persona1);
        personas.push(persona1);
        mostrarPersonas();

    }else{
        alert('El formulario no puede estar vacio o por el contrario no debe ser numerico');
    };
};
