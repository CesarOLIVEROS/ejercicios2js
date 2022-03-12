class Empleado{

    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Nombre ${this._nombre} con el sueldo de: ${this._sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}, depto: ${this._departamento}.`;
    }
}

// Funcion para poliformismo con los detalles de cada clase que le pasemos por parametro
// Tomamos el tipo y lo pasamos por parametro
function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
    //podemos saber con instanof si un objeto es una instancia de que tipo para validar o usar en un decisional
    if(tipo instanceof Gerente){

        console.log('Es un objeto de tipo Gerente');
        console.log(tipo._departamento);
    }// Validamos ademas si otros objetos son del tipo de la clase padre.
    if(tipo instanceof Empleado){
        console.log('Es un objeto de tipo Empleado');
        console.log(tipo._departamento);
    }
}


let empleado1 = new Empleado('Carlos Cardenas', 1700 );
let gerente1 = new Gerente('Juan Oliveros', 1500, 'Sistemas');

// se llama a la funcion y se pasa por referencia o parametro un objeto de tipo EMpleado este es detectado por la funcion.
imprimir(empleado1);
imprimir(gerente1);