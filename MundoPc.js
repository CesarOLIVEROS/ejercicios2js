class DispositivoEntrada{

    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }


}

class Raton extends DispositivoEntrada{

    static contadorRatones = 0;
    // inicializa el constructor con los parametros de la clase padre
    constructor(tipoEntrada,marca){
        // se pasan los parametros atraves del metodo super
        super(tipoEntrada, marca);

        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton: { idRaton: ${this._idRaton} de entrada: ${this._tipoEntrada}, marca: ${this._marca} }`;
    }
}

class Teclado extends DispositivoEntrada{

    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: { idTeclado: ${this._idTeclado} de entrada: ${this._tipoEntrada}, de marca: ${this._marca} }`;
    }
}

class Monitor{

    static contadorMonitor =0;

    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitor;

        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor(){
        return this._idMonitor;
    }
    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }

    get tamaño(){
        return this._tamaño;
    }

    set tamaño(tamaño){
        this._tamaño = tamaño;
    }

    toString(){
        return `Monitor: { idMonitor: ${this._idMonitor} de marca: ${this._marca}, con un tamaño de: ${this._tamaño}" }`
    }
}


class Computadora {

    static contadorComputadoras =0;

    constructor(nombre, monitor, raton, teclado){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;

    }

    toString(){
        return `Computadora: ${this._idComputadora}, de nombre: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`;
    }
}


let raton1 = new Raton("USB",'Hp');
let teclado1 = new Teclado("Bluetooh",'Acer');
let monitor1 = new Monitor('HP', 27);
let computadora1 = new Computadora('Hp', monitor1, raton1,teclado1);
console.log(raton1.toString());
console.log(teclado1.toString());
console.log(monitor1.toString());
console.log(computadora1.toString());